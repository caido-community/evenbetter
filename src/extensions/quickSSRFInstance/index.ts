import EvenBetterAPI from "@bebiks/evenbetter-api";
import { getSetting } from "../../settings";
import { reqHistoryPage } from './reqHistory/reqHistory';
import { PageOpenEvent } from "@bebiks/evenbetter-api/src/events/onPageOpen";
import { pullSSRFHits as pullSSRFHits, ssrfInstance, SSRFInstanceState } from "./instance";
import { settingsPage } from "./settings/settings";
import { Caido } from "@caido/sdk-frontend";
import { setActiveSidebarItem } from "../../utils/sidebar";

export const quickSSRFFunctionality = () => {
  EvenBetterAPI.eventManager.on("onPageOpen", (data: PageOpenEvent) => {
    if (
      data.newUrl == "#/replay" &&
      getSetting("ssrfInstanceFunctionality") === "true"
    ) {
      setTimeout(() => observeReplayInput(), 1000);
    }
  });

  const requestsHistory = reqHistoryPage();
  const settings = settingsPage();

  Caido.navigation.addPage("/evenbetter/quick-ssrf", {
    body: requestsHistory,
  });

  Caido.navigation.addPage("/evenbetter/quick-ssrf/settings", {
    body: settings,
  });

  Caido.sidebar.registerItem("Quick SSRF", "/evenbetter/quick-ssrf", {
    icon: "fas fa-compass",
    group: "EvenBetter",
  });

  EvenBetterAPI.eventManager.on("onPageOpen", (data: PageOpenEvent) => {
    setActiveSidebarItem(
      "Quick SSRF",
      data.newUrl.startsWith("#/evenbetter/quick-ssrf") ? "true" : "false"
    );
  });

  pullInterval();
};

const pullInterval = () => {
  const nextExecutionTime =
    window.location.hash === "#/evenbetter/quick-ssrf" ? 1250 : 8000;

  if (ssrfInstance && ssrfInstance.state === SSRFInstanceState.ACTIVE) pullSSRFHits();

  setTimeout(() => {
    pullInterval();
  }, nextExecutionTime);
};

let replayInputObserver: MutationObserver | null = null;
const observeReplayInput = () => {
  const replayInput = document.querySelector(".c-replay-entry .cm-content");
  if (!replayInput) return;

  if (replayInputObserver) {
    replayInputObserver.disconnect();
    replayInputObserver = null;
  }

  const ssrfInstancePlaceholder = getSetting("ssrfInstancePlaceholder");

  replayInputObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      const originalTextContent = mutation.target.textContent;

      if (originalTextContent.includes(ssrfInstancePlaceholder)) {
        if (!ssrfInstance) {
          EvenBetterAPI.modal.openModal({
            title: "SSRF Instance not found",
            content:
              "Please create an SSRF instance from the sidebar Quick SSRF page before using this functionality.",
          });
          return;
        }

        const sel = window.getSelection();
        const node = sel.focusNode;
        const offset = sel.focusOffset;
        const pos = getCursorPosition(mutation.target, node, offset, {
          pos: 0,
          done: false,
        });
        if (offset === 0) pos.pos += 0.5;

        const newTextContent = originalTextContent.replace(
          getSetting("ssrfInstancePlaceholder"),
          ssrfInstance.url
        );
        mutation.target.textContent = newTextContent;

        sel.removeAllRanges();
        const range = setCursorPosition(
          mutation.target,
          document.createRange(),
          {
            pos: pos.pos,
            done: false,
          }
        );
        range.collapse(true);
        sel.addRange(range);
      }
    });
  });

  const config = {
    characterData: true,
    subtree: true,
  };

  replayInputObserver.observe(replayInput, config);
};

function getCursorPosition(
  parent: Node,
  node: Node,
  offset: number,
  stat: { pos: number; done: boolean }
) {
  if (stat.done) return stat;

  let currentNode = null;
  if (parent.childNodes.length == 0) {
    stat.pos += parent.textContent.length;
  } else {
    for (let i = 0; i < parent.childNodes.length && !stat.done; i++) {
      currentNode = parent.childNodes[i];
      if (currentNode === node) {
        stat.pos += offset;
        stat.done = true;
        return stat;
      } else getCursorPosition(currentNode, node, offset, stat);
    }
  }
  return stat;
}

function setCursorPosition(
  parent: Node,
  range: Range,
  stat: { pos: number; done: boolean }
) {
  if (stat.done) return range;

  if (parent.childNodes.length == 0) {
    if (parent.textContent.length >= stat.pos) {
      range.setStart(parent, stat.pos);
      stat.done = true;
    } else {
      stat.pos = stat.pos - parent.textContent.length;
    }
  } else {
    for (let i = 0; i < parent.childNodes.length && !stat.done; i++) {
      let currentNode = parent.childNodes[i];
      setCursorPosition(currentNode, range, stat);
    }
  }
  return range;
}
