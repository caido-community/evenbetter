(()=>{var e={228:(e,t,n)=>{"use strict";n.r(t),n.d(t,{colorizeHttpHistory:()=>d,observeHTTPRequests:()=>l});const{getSetting:r}=n(464),{modifyItemRow:o,isHighlighted:s,getRowIDColor:c}=n(732);let i,a=0;const l=()=>{const e=document.querySelector(".c-table__wrapper");e&&(i&&(i.disconnect(),i=null),i=new MutationObserver((e=>{e.forEach((e=>{if("highlighted"===e.attributeName){const t=e.target;return void u(t)}if(0===e.addedNodes.length)return;const t=e.addedNodes[0];if(t.classList?.contains("c-table__item-row")){if("Loading..."==t.textContent.trim())return void setTimeout((()=>{null!=t&&"Loading..."!=t.textContent.trim()&&o(t)}),500);o(t)}})),d()})),i.observe(e,{childList:!0,characterData:!0,attributes:!0,subtree:!0}))},d=()=>{const e=Date.now();e-a<50||(a=e,document.querySelectorAll('.c-item-cell[data-column-id="REQ_QUERY"]').forEach((e=>u(e))))},u=e=>{const t=e.parentElement,n=t.querySelector(".c-item-cell[data-column-id='ID']").textContent;s(n)?(t.style.backgroundColor=c(n),t.setAttribute("colorized","true")):(t.style.backgroundColor="",t.setAttribute("colorized","false"))}},732:(e,t,n)=>{"use strict";n.r(t),n.d(t,{getProjectName:()=>h,getRowIDColor:()=>p,isHighlighted:()=>v,listenForRightClick:()=>r,modifyContextMenu:()=>l,modifyItemRow:()=>o,removeHighlightedRow:()=>g,storeHighlightedRow:()=>u});const r=()=>{document.querySelectorAll(".c-table__item-row").forEach(o)},o=e=>{e.removeEventListener("contextmenu",a),e.addEventListener("contextmenu",a),e.removeEventListener("click",c),e.addEventListener("click",c)};let s=null;const c=e=>{let t=e.target.closest(".c-item-row");t&&(s=t.querySelector(".c-item-cell[data-column-id='ID']").textContent,setTimeout((()=>{i()}),10))},i=()=>{const e=document.querySelector(".c-request-skeleton__body");e&&(e.removeEventListener("contextmenu",a),e.addEventListener("contextmenu",a))},a=e=>{const t=e.target;if(t.closest(".c-request-skeleton__body"))return void setTimeout((()=>l(s,null)),10);const n=t.closest(".c-item-row");if(!n)return;const r=n.querySelector(".c-item-cell[data-column-id='ID']").textContent;c(e),setTimeout((()=>l(r,n)),10)},l=(e,t)=>{const n=document.querySelector(".c-menu"),r=n.querySelectorAll(".c-item"),o=n.querySelectorAll(".c-divider");if(!n||!r||!o)return;t||(t=(e=>{const t=document.querySelectorAll(".c-item-row .c-item-cell[data-column-id='ID']");for(let n=0;n<t.length;n++)if(t[n].textContent===e)return t[n].closest(".c-item-row")})(e));const s=o[0].cloneNode(!0);n.insertBefore(s,r[r.length]);const c=n.querySelector(".fa-caret-right").parentElement.parentElement.cloneNode(!0);c.querySelector(".c-item__content").textContent="Highlight row",c.querySelector(".c-item__menu").insertAdjacentHTML("beforeend",'\n        <div class="c-item__menu evenbetter__c-item__menu">\n          <div class="c-menu evenbetter__c-menu">\n            <div\n              class="c-item evenbetter__c-item"\n            >\n              <div class="c-item__content evenbetter__c-item__content">None</div>\n            </div>\n            <div\n              class="c-item evenbetter__c-item"\n            >\n              <div class="c-item__content evenbetter__c-item__content">Red</div>\n            </div>\n            <div\n              class="c-item evenbetter__c-item"\n            >\n              <div class="c-item__content evenbetter__c-item__content">Green</div>\n            </div>\n            <div\n              class="c-item evenbetter__c-item"\n            >\n              <div class="c-item__content evenbetter__c-item__content">Blue</div>\n            </div>\n            <div\n              class="c-item evenbetter__c-item"\n            >\n              <div class="c-item__content evenbetter__c-item__content">Orange</div>\n            </div>\n          </div>\n        </div>\n      '),c.id="highlightRowMenu",c.querySelector(".c-item__menu").style.display="none",c.querySelectorAll(".c-item").forEach((e=>{let t=e.querySelector(".c-item__content").textContent;e.style.paddingLeft="0.35rem",e.style.borderRadius=0,"None"!==t&&(e.style.borderLeft="3px solid",e.style.borderLeftColor=t)})),c.addEventListener("mouseenter",(()=>{c.querySelector(".c-item__menu").style.display="block";const e=c.querySelector(".c-item__menu");e.style.left=0,e.style.top="120px"})),r.forEach((e=>e.addEventListener("mouseenter",d))),c.querySelectorAll(".c-item").forEach((n=>{n.addEventListener("click",(()=>{let r=n.querySelector(".c-item__content").textContent;"None"===r?(t&&(t.style.backgroundColor="",t.removeAttribute("highlighted")),g(e)):(t&&(t.style.backgroundColor=r,t.setAttribute("highlighted",r)),u(e,r)),d()}))})),n.insertBefore(c,r[r.length])},d=()=>{const e=document.getElementById("highlightRowMenu");e&&(e.querySelector(".c-item__menu").style.display="none")},u=(e,t)=>{const n=JSON.parse(localStorage.getItem(h()+".highlightedRows"))||{};n[e]=t,localStorage.setItem(h()+".highlightedRows",JSON.stringify(n))},g=e=>{const t=JSON.parse(localStorage.getItem(h()+".highlightedRows"))||{};delete t[e],localStorage.setItem(h()+".highlightedRows",JSON.stringify(t))},v=e=>void 0!==(JSON.parse(localStorage.getItem(h()+".highlightedRows"))||{})[e],p=e=>(JSON.parse(localStorage.getItem(h()+".highlightedRows"))||{})[e],h=()=>{let e=document.querySelector(".c-current-project .c-current-project__right")?.textContent;return e||"Untitled"}},640:(e,t,n)=>{"use strict";n.r(t),n.d(t,{evenBetterTab:()=>l});const{getSetting:r,setSetting:o,defaultSettings:s,checkForUpdates:c}=n(464),{themes:i,loadTheme:a}=n(496),l=()=>{const e=r("theme"),t=document.createElement("div");t.innerHTML=`\n  <div class="even-better__settings">\n    <header>\n      <div class="header-title">\n        <h1>EvenBetter ${s.currentVersion} - Settings</h1>\n        <div class="header-outdated" style="display:none;">You are using outdated version!</div>\n      </div>\n      <div class="header-description">\n        Customize EvenBetter plugin here and make your Caido even better :D\n      </div>\n    </header>\n\n    <main>\n      <div class="left">\n        <div class="settings-box">\n          \x3c!-- Settings header --\x3e\n          <div class="settings-box__header">\n            <div class="settings-box__header-title">Themes</div>\n            <div class="settings-box__header-description">\n              Change the appearance of your Caido\n            </div>\n          </div>\n\n          \x3c!-- Settings content --\x3e\n          <div class="settings-box__content">\n            <select>\n              ${Object.keys(i).map((t=>`<option value="${t}" ${e==t?"selected":""}>${i[t].name}</option>`)).join("")}\n            </select>\n          </div>\n        </div>\n\n        ${"true"==r("ssrfInstanceFunctionality")?'\n        <div class="settings-box ssrfInstanceFunctionality">\n          \x3c!-- Settings header --\x3e\n          <div class="settings-box__header">\n            <div class="settings-box__header-title">Quick SSRF placeholder</div>\n            <div class="settings-box__header-description">\n              Set the placeholder that will be used to create new SSRF instance\n            </div>\n          </div>\n\n          \x3c!-- Settings content --\x3e\n          <div class="settings-box__content">\n            <div class="c-text-input">\n              <div class="c-text-input__outer">\n                <div class="c-text-input__inner">\n                  <input\n                    placeholder="$ssrfinstance"\n                    spellcheck="false"\n                    class="c-text-input__input"\n                  />\n                </div>\n              </div>\n            </div>\n\n            <button disabled>Save</button>\n          </div>\n        </div>':""}\n      </div>\n\n      <div class="right">\n        <div class="toggle-features">\n          <div class="toggle-features__header">\n            <div class="toggle-features__header-title">Toggle features</div>\n            <div class="toggle-features__header-description">\n              Enable or disable features of the EvenBetter plugin\n            </div>\n          </div>\n          <hr />\n          <div class="toggle-features__content">\n            <div class="toggle-features__content-item">\n              <div class="toggle-features__content-item-title">\n                Sidebar tweaks\n              </div>\n\n              <div class="toggle-features__content-item-toggle">\n                <div class="toggle-features__content-item-description">\n                  <b>Groups Rearrange:</b> Show move buttons next to sidebar\n                  groups.\n                </div>\n                <div>\n                  <input type="checkbox" name="sidebarRearrangeGroups" id="rearrangegroups" ${"true"===r("sidebarRearrangeGroups")?"checked":""} />\n                </div>\n              </div>\n\n              <div class="toggle-features__content-item-toggle">\n                <div class="toggle-features__content-item-description">\n                  <b>Groups Collapse:</b> This allows you to collapse groups\n                  in the sidebar.\n                </div>\n                <div>\n                  <input type="checkbox" name="sidebarHideGroups" id="hidegroups" ${"true"===r("sidebarHideGroups")?"checked":""} />\n                </div>\n              </div>\n            </div>\n\n            <hr />\n\n            <div class="toggle-features__content-item">\n              <div class="toggle-features__content-item-title">\n                Quick SSRF Instance\n              </div>\n\n              <div class="toggle-features__content-item-toggle">\n                <div class="toggle-features__content-item-description">\n                  Quickly create new ssrf.cvssadvisor.com instance by typing the placeholder.\n                </div>\n                <div>\n                  <input type="checkbox" name="ssrfInstanceFunctionality" id="ssrfinstance" ${"true"===r("ssrfInstanceFunctionality")?"checked":""} />\n                </div>\n              </div>\n            </div>\n\n            <hr />\n\n            <div class="toggle-features__content-item">\n              <div class="toggle-features__content-item-title">\n                Highlight Rows\n              </div>\n\n              <div class="toggle-features__content-item-toggle">\n                <div class="toggle-features__content-item-description">\n                  Right click to highlight rows on the HTTP History page.\n                </div>\n                <div>\n                  <input type="checkbox" name="highlightRowsFunctionality" id="highlightrows" ${"true"===r("highlightRowsFunctionality")?"checked":""} />\n                </div>\n              </div>\n            </div>\n\n            <hr />\n\n            <div class="toggle-features__content-item">\n              <div class="toggle-features__content-item-title">\n                Version Check Warning\n              </div>\n\n              <div class="toggle-features__content-item-toggle">\n                <div class="toggle-features__content-item-description">\n                  Choose if you want to see warning on startup if you are\n                  using outdated EvenBetter version.\n                </div>\n                <div>\n                  <input type="checkbox" name="showOutdatedVersionWarning" id="versioncheck" ${"true"===r("showOutdatedVersionWarning")?"checked":""} />\n                </div>\n              </div>\n            </div>\n\n            <button disabled>Save</button>\n          </div>\n        </div>\n      </div>\n    </main>\n  </div>`,t.id="evenbetter-settings-content",t.querySelector("select").addEventListener("change",(e=>{const t=e.target.value;o("theme",t),a(t)}));const n=[];let l=!1;t.querySelectorAll("input[type=checkbox]").forEach((e=>{e.addEventListener("change",(e=>{const r=e.target.name,o=e.target.checked,s=n.findIndex((e=>e.name===r));-1!==s?n.splice(s,1):n.push({name:r,value:o}),l=n.length>0;const c=t.querySelector(".toggle-features__content button");l?c.removeAttribute("disabled"):c.setAttribute("disabled",!0)}))})),t.querySelector(".toggle-features__content button").addEventListener("click",(()=>{n.forEach((e=>{o(e.name,e.value)})),location.reload()}));const d=t.querySelector(".ssrfInstanceFunctionality");if(d){const e=[];d.querySelector("input").value=r("ssrfInstancePlaceholder"),d.querySelector("input").addEventListener("input",(t=>{const n=t.target.value;e.push({name:"ssrfInstancePlaceholder",value:n}),d.querySelector("button").removeAttribute("disabled")})),d.querySelector("button").addEventListener("click",(()=>{e.forEach((e=>{o(e.name,e.value),location.reload()}))}))}return c().then((e=>{e.includes("New EvenBetter version available")&&(t.querySelector(".header-outdated").style.display="block")})),t}},544:(e,t,n)=>{"use strict";n.r(t),n.d(t,{replaceSSRFInstanceText:()=>o});const{getSetting:r}=n(464),o=(e,t)=>{const n=t.replace(r("ssrfInstancePlaceholder"),"$creating_instance");e.target.textContent=n,fetch("https://api.cvssadvisor.com/ssrf/api/instance",{method:"POST"}).then((e=>e.json())).then((t=>{const r=n.replace("$creating_instance","https://"+t+".c5.rs");e.target.textContent=r,window.open("https://ssrf.cvssadvisor.com/instance/"+t)})).catch((()=>{const t=n.replace("$creating_instance","$creating_instance_failed");e.target.textContent=t}))}},676:(e,t,n)=>{"use strict";let r;n.r(t),n.d(t,{onScopeTabOpened:()=>o});const o=()=>{s(),c()},s=()=>{const e=document.querySelector(".c-preset-list__well");e&&(r&&(r.disconnect(),r=null),r=new MutationObserver((e=>{e.forEach((e=>{"data-is-active"===e.attributeName&&"true"===e.target.getAttribute("data-is-active")&&setTimeout((()=>i()),50),e.addedNodes.length>0&&e.addedNodes[0].classList.contains("c-preset-list__well-body")&&i()}))})),null!==document.querySelector(".c-preset-body__scope-form-value-input")&&i(),r.observe(e,{attributes:!0,childList:!0,subtree:!0}),console.log("Scope presents observer started"))},c=()=>{const e=document.querySelector(".c-scope-presets__body-actions");if(!e)return;document.querySelector("#scope-presents-import")?.remove();const t=e.children[0].cloneNode(!0);t.querySelector(".c-button__label").innerHTML='<div class="c-button__leading-icon"><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="M4 13V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V13" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n  <path d="M12 3L12 15M12 15L8.5 11.5M12 15L15.5 11.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n  </svg></div><p style="\n      margin: 0;\n  ">Import</p>',t.id="scope-presents-import",t.addEventListener("click",(()=>{const e=document.createElement("input");e.type="file",e.accept=".json",e.style.display="none",e.addEventListener("change",(e=>{const t=e.target.files[0],n=new FileReader;n.onload=e=>{const t=JSON.parse(e.target.result);a(t)},n.readAsText(t)})),document.body.prepend(e),e.click(),e.remove()})),e.appendChild(t)},i=()=>{const e=document.querySelector(".c-header__read-only");if(!e)return;document.querySelector("#scope-presents-export")?.remove();const t=document.createElement("div");t.innerHTML='\n        <svg fill="#fff" height="13px" width="13px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" \n                viewBox="0 0 492.022 492.022" xml:space="preserve">\n            <g id="XMLID_607_">\n                <path id="XMLID_609_" d="M317.88,113.728H58.729C26.348,113.728,0,140.078,0,172.459v259.15c0,32.381,26.348,58.729,58.729,58.729\n                    H317.88c32.381,0,58.728-26.348,58.728-58.729v-259.15C376.608,140.078,350.261,113.728,317.88,113.728z M307.958,421.687H68.651\n                    V182.378h239.307V421.687z"/>\n                <path id="XMLID_608_" d="M406.609,1.685H260.308c-18.956,0-34.325,15.369-34.325,34.324c0,18.956,15.369,34.326,34.325,34.326\n                    h146.302c9.236,0,16.762,7.525,16.762,16.76V233.4c0,18.955,15.368,34.324,34.325,34.324s34.326-15.369,34.326-34.324V87.095\n                    C492.022,40,453.706,1.685,406.609,1.685z"/>\n            </g>\n        </svg>',t.id="scope-presents-export",t.addEventListener("click",(()=>{const e=document.querySelectorAll(".c-scope-list__well-entry:not([data-header])");if(!e)return;const t=document.querySelector(".c-header__read-only label").textContent,n={presetName:t,allowlist:[],denylist:[]};e.forEach((e=>{const t=e.querySelector(".c-scope-list__well-entry-type").innerText,r=e.querySelector(".c-scope-list__well-entry-value").innerText;"In Scope"===t?n.allowlist.push(r):n.denylist.push(r)}));const r=JSON.stringify(n,null,2),o=new Blob([r],{type:"application/json"}),s=URL.createObjectURL(o),c=document.createElement("a");c.href=s,c.download="scope-"+t+".json",c.click()})),e.appendChild(t)},a=e=>{const t={operationName:"createScope",query:"mutation createScope($input: CreateScopeInput!) {\n  createScope(input: $input) {\n    error {\n      ... on InvalidGlobTermsUserError {\n        ...invalidGlobTermsUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n    scope {\n      ...scopeFull\n    }\n  }\n}\nfragment invalidGlobTermsUserErrorFull on InvalidGlobTermsUserError {\n  ...userErrorFull\n  terms\n}\nfragment userErrorFull on UserError {\n  __typename\n  code\n}\nfragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}\nfragment scopeFull on Scope {\n  __typename\n  id\n  name\n  allowlist\n  denylist\n  indexed\n}",variables:{input:{allowlist:e.allowlist,denylist:e.denylist,name:e.presetName}}};fetch("http://127.0.0.1:8080/graphql",{body:JSON.stringify(t),method:"POST",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("CAIDO_AUTHENTICATION")).accessToken}})}},352:(e,t,n)=>{"use strict";n.r(t),n.d(t,{getWorkflowByID:()=>s,onWorkflowsTabOpened:()=>r});const r=()=>{o()},o=()=>{const e=document.querySelectorAll(".c-table-header__new");e&&e.forEach((e=>{const t=e.querySelector(".c-button").cloneNode(!0);t.querySelector(".c-button__label").innerHTML='\n    <div class="c-button__leading-icon"><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M4 13V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V13" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n    <path d="M12 3L12 15M12 15L8.5 11.5M12 15L15.5 11.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n    </svg></div><p style="\n        margin: 0;\n    ">Import</p></div>',t.id="workflow-import",t.addEventListener("click",(()=>{const e=document.createElement("input");e.type="file",e.accept=".json",e.style.display="none",e.addEventListener("change",(e=>{const t=e.target.files[0],n=new FileReader;n.onload=e=>{const t=JSON.parse(e.target.result);c(t.data.workflow.definition)},n.readAsText(t)})),document.body.prepend(e),e.click(),e.remove()})),e.appendChild(t)}))},s=async e=>{const t={operationName:"workflow",query:"query workflow($id: ID!) {\n  workflow(id: $id) {\n    ...workflowFull\n  }\n}\nfragment workflowFull on Workflow {\n  ...workflowMeta\n  definition\n}\nfragment workflowMeta on Workflow {\n  __typename\n  id\n  kind\n  name\n}",variables:{id:e}};return fetch("http://127.0.0.1:8080/graphql",{body:JSON.stringify(t),method:"POST",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("CAIDO_AUTHENTICATION")).accessToken}}).then((e=>e.json()))},c=e=>{const t={operationName:"createWorkflow",query:"mutation createWorkflow($input: CreateWorkflowInput!) { \n createWorkflow(input: $input) { \n error { \n ... on WorkflowUserError { \n ...workflowUserErrorFull \n } \n ... on OtherUserError { \n ...otherUserErrorFull \n } \n } \n workflow { \n ...workflowFull \n } \n } \n} \nfragment workflowUserErrorFull on WorkflowUserError { \n ...userErrorFull \n nodeId \n message \n reason \n} \nfragment userErrorFull on UserError { \n __typename \n code \n} \nfragment otherUserErrorFull on OtherUserError { \n ...userErrorFull \n} \nfragment workflowFull on Workflow { \n __typename \n id \n kind \n name \n definition \n}",variables:{input:{definition:{...e}}}};fetch("http://127.0.0.1:8080/graphql",{body:JSON.stringify(t),method:"POST",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("CAIDO_AUTHENTICATION")).accessToken}})}},136:(e,t,n)=>{const{getSetting:r}=n(464),o=()=>{document.querySelectorAll(".c-sidebar-group").forEach((e=>{const t=e.children[0].textContent.trim(),n=e.getAttribute("data-is-group-collapsed");localStorage.setItem(`evenbetter_${t}_isCollapsed`,n)}))};e.exports={addGroupHideFunctionality:()=>{"true"===r("sidebarHideGroups")&&document.querySelectorAll(".c-sidebar-group__title").forEach((e=>{"..."!==e.textContent&&e.addEventListener("click",(()=>{const t=e.parentElement,n=t.querySelector(".c-sidebar-group__items");"true"===t.getAttribute("data-is-group-collapsed")?(n.style.display="block",t.setAttribute("data-is-group-collapsed","false")):(n.style.display="none",t.setAttribute("data-is-group-collapsed","true")),o()}))}))},restoreSidebarGroupCollapsedStates:()=>{"true"===r("sidebarHideGroups")&&document.querySelectorAll(".c-sidebar-group").forEach((e=>{const t=e.children[0].textContent.trim(),n=localStorage.getItem(`evenbetter_${t}_isCollapsed`);n&&(e.setAttribute("data-is-group-collapsed",n),e.querySelector(".c-sidebar-group__items").style.display="true"===n?"none":"block")}))},storeSidebarGroupCollapsedStates:o}},60:(e,t,n)=>{const{getSetting:r}=n(464),o=(e,t)=>{const n=Array.from(e.parentElement.children).indexOf(e);if("up"===t&&n>0||"down"===t&&n<e.parentElement.children.length-1){const r="up"===t?n-1:n+1;if(0==r)return;const o=e.parentElement.children[r+("up"===t?0:1)];e.parentElement.insertBefore(e,o),s()}},s=()=>{document.querySelectorAll(".c-sidebar-group").forEach((e=>{const t=e.children[0].textContent.trim(),n=Array.from(e.parentElement.children).indexOf(e);localStorage.setItem(`evenbetter_${t}_position`,n)}))};e.exports={addMoveButtonsToSidebar:()=>{"true"===r("sidebarRearrangeGroups")&&(document.querySelectorAll(".c-sidebar-group__title").forEach((e=>{const t=e.textContent;"..."!==t&&((e,t)=>{e.innerHTML=`\n        <div style="display:flex;justify-content:space-between;align-items:center;">${t}\n          <div class="c-sidebar-group__rearrange-arrows">\n              <svg class="c-sidebar-group__move-up" width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                  <path d="M12 5V19M12 5L6 11M12 5L18 11" stroke="#424242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n              </svg>\n              <svg class="c-sidebar-group__move-down" width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                  <path d="M12 5V19M12 19L6 13M12 19L18 13" stroke="#424242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n              </svg>\n          </div>\n        `})(e,t)})),document.querySelectorAll(".c-sidebar-group").forEach((e=>{const t=e.querySelector(".c-sidebar-group__move-up"),n=e.querySelector(".c-sidebar-group__move-down");t&&n&&(t.addEventListener("click",(t=>{o(e,"up"),t.stopPropagation()})),n.addEventListener("click",(t=>{o(e,"down"),t.stopPropagation()})))})))},restoreSidebarGroupPositions:()=>{"true"===r("sidebarRearrangeGroups")&&document.querySelectorAll(".c-sidebar-group").forEach((e=>{const t=e.children[0].textContent.trim(),n=localStorage.getItem(`evenbetter_${t}_position`);n&&e.parentElement.insertBefore(e,e.parentElement.children[n])}))},storeSidebarGroupPositions:s}},300:(e,t,n)=>{"use strict";n.r(t),n.d(t,{openModal:()=>o});const r=()=>{document.querySelector(".evenbetter-modal").remove()},o=(e,t)=>{null!==document.querySelector(".evenbetter-modal")&&r();const n=((e,t)=>{const n=document.createElement("div");var o;return n.classList.add("evenbetter-modal"),n.innerHTML=`\n    <div class="evenbetter-modal__content">\n        <div class="evenbetter-modal__content-header">\n            <h2 class="evenbetter-modal__content-header-title">${e}</h2>\n        </div>\n        <div class="evenbetter-modal__content-body">\n            <p class="evenbetter-modal__content-body-text">${o=t,String(o).replace(/[^\w. ]/gi,(function(e){return"&#"+e.charCodeAt(0)+";"}))}</p>\n            <button class="evenbetter-modal__content-body-close">\n                Close\n            </button>\n        </div>\n    </div>\n  `,n.querySelector(".evenbetter-modal__content-body-close").addEventListener("click",r),n})(e,t);document.body.appendChild(n)}},464:(e,t,n)=>{"use strict";n.r(t),n.d(t,{checkForUpdates:()=>c,defaultSettings:()=>r,getSetting:()=>o,setSetting:()=>s});const r={ssrfInstancePlaceholder:"$ssrfinstance",sidebarHideGroups:"true",sidebarRearrangeGroups:"true",ssrfInstanceFunctionality:"true",showOutdatedVersionWarning:"true",highlightRowsFunctionality:"true",evenBetterVersionCheckUrl:"https://raw.githubusercontent.com/bebiksior/EvenBetter/main/version.txt",currentVersion:"v1.5"},o=e=>null===localStorage.getItem(`evenbetter_${e}`)?r[e]:localStorage.getItem(`evenbetter_${e}`),s=(e,t)=>{localStorage.setItem(`evenbetter_${e}`,t)},c=async()=>{try{const e=await fetch(r.evenBetterVersionCheckUrl,{cache:"no-store",headers:{"Cache-Control":"no-cache"}}),t=await e.text();return t.trim()===r.currentVersion?"You are using the latest version! 🎉":`New EvenBetter version available: ${t}.`}catch(e){return"Failed to check for updates"}}},496:(e,t,n)=>{"use strict";n.r(t),n.d(t,{loadTheme:()=>o,themes:()=>r});const r={evendarker:{name:"Even Darker","--c-header-cell-border":"#101010","--c-bg-default":"#050607","--c-bg-subtle":"#090a0c","--c-table-item-row":"#08090a","--c-table-item-row-hover":"#0f1012","--header-cell-width":"1px","--c-table-even-item-row":"#08090a","--c-fg-default":"var(--c-white-100)","--c-fg-subtle":"var(--c-gray-400)","--selection-background":"rgba(255, 255, 255, 0.15)","--selected-row-background":"var(--c-bg-default)"},caido:{name:"Caido Default","--c-header-cell-border":"#101010","--c-bg-default":"#25272d","--c-bg-subtle":"var(--c-gray-800)","--c-table-item-row":"#08090a","--c-table-item-row-hover":"#25272d","--header-cell-width":"0px","--c-table-even-item-row":"#353942","--c-fg-default":"var(--c-white-100)","--c-fg-subtle":"var(--c-gray-400)","--selection-background":"rgba(255, 255, 255, 0.15)","--selected-row-background":"var(--c-bg-default)"},gray:{name:"Gray","--c-header-cell-border":"#101010","--c-bg-default":"#202020","--c-bg-subtle":"#252525","--c-table-item-row":"#252525","--c-table-item-row-hover":"#303030","--header-cell-width":"1px","--c-table-even-item-row":"#252525","--c-fg-default":"var(--c-white-100)","--c-fg-subtle":"var(--c-gray-400)","--selection-background":"rgba(255, 255, 255, 0.15)","--selected-row-background":"var(--c-bg-default)"},oceanblue:{name:"Ocean Blue","--c-header-cell-border":"#116699","--c-bg-default":"#1a2b3c","--c-bg-subtle":"#2a3b4c","--c-table-item-row":"#1c2d3e","--c-table-item-row-hover":"#2a3b4c","--header-cell-width":"0px","--c-table-even-item-row":"#2c3d4e","--c-fg-default":"var(--c-white-100)","--c-fg-subtle":"var(--c-gray-400)","--selection-background":"rgba(255, 255, 255, 0.15)","--selected-row-background":"var(--c-bg-default)"},solarized:{name:"Solarized","--c-header-cell-border":"#93a1a1","--c-bg-default":"#002b36","--c-bg-subtle":"#073642","--c-table-item-row":"#073642","--c-table-item-row-hover":"#586e75","--header-cell-width":"1px","--c-table-even-item-row":"#073642","--c-fg-default":"#93a1a1","--c-fg-subtle":"#657b83","--selection-background":"rgba(255, 255, 255, 0.15)","--selected-row-background":"#073642"},black:{name:"Black","--c-header-cell-border":"#000000","--c-bg-default":"#111111","--c-bg-subtle":"#070707","--c-table-item-row":"#050505","--c-table-item-row-hover":"#222222","--header-cell-width":"0px","--c-table-even-item-row":"#111111","--c-fg-default":"var(--c-white-100)","--c-fg-subtle":"var(--c-gray-400)","--selection-background":"rgba(255, 255, 255, 0.15)","--selected-row-background":"var(--c-bg-default)"}},o=e=>{const t=r[e];t&&Object.keys(t).forEach((e=>{document.documentElement.style.setProperty(e,t[e],"important")}))}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const{loadTheme:e}=n(496),{addMoveButtonsToSidebar:t,restoreSidebarGroupPositions:r}=n(60),{getSetting:o,checkForUpdates:s}=n(464),{addGroupHideFunctionality:c,restoreSidebarGroupCollapsedStates:i}=n(136),{evenBetterTab:a}=n(640),{replaceSSRFInstanceText:l}=n(544),{observeHTTPRequests:d,colorizeHttpHistory:u}=n(228),{onScopeTabOpened:g}=n(676),{openModal:v}=n(300),{onWorkflowsTabOpened:p}=n(352),{listenForRightClick:h}=n(732);let m;const b=e=>{switch(console.log("Tab opened: ",e),e){case"c-intercept":"true"===o("highlightRowsFunctionality")&&setTimeout((()=>{u(),d(),h()}),200);break;case"c-replay":setTimeout((()=>E()),25);break;case"c-settings":setTimeout((()=>{f(),S()}),10);break;case"c-scope":setTimeout((()=>{g()}),10);break;case"c-convert":setTimeout((()=>{p()}),25)}};let _;const f=()=>{const e=document.querySelector(".c-settings__navigation .c-underline-nav");e&&(_&&(_.disconnect(),_=null),_=new MutationObserver((e=>{e.forEach((e=>{"true"===e.target.getAttribute("data-is-active")&&y(e.target.textContent)}))})),_.observe(e,{subtree:!0,attributes:!0}))},y=e=>{console.log("Settings tab opened: ",e);const t=document.querySelector(".c-settings__content");switch(e){case"Developer":setTimeout((()=>{document.querySelector(".c-custom-js__footer").addEventListener("click",(()=>{setTimeout((()=>{location.reload()}),300)}))}),50);break;case"EvenBetter":return t.children[0].style.display="none",void t.appendChild(a())}document.querySelector("#evenbetter-settings-tab")?.setAttribute("data-is-active","false"),t.children[0].style.display="block",document.querySelector("#evenbetter-settings-content")?.remove()},w=e=>{"true"!==e.getAttribute("data-is-active")&&e.setAttribute("data-is-active","true"),Array.from(document.querySelector(".c-settings__navigation .c-underline-nav").children).filter((t=>t!==e)).forEach((e=>e.setAttribute("data-is-active","false")))},S=()=>{const e=document.querySelector(".c-settings__navigation .c-underline-nav");e.childNodes.forEach((e=>{e.addEventListener("click",(()=>{document.querySelector(".c-settings__content").children[0].style.display="block",w(e)}))}));const t=e.children[0].cloneNode(!0);t.querySelector(".c-button__label").textContent=t.textContent.replace("General","EvenBetter"),t.setAttribute("data-is-active","false"),t.id="evenbetter-settings-tab",t.addEventListener("click",(()=>{w(t)})),e.appendChild(t)};let k;const E=()=>{if("true"!==o("ssrfInstanceFunctionality"))return;const e=document.querySelector(".c-replay-entry .cm-content");e&&(k&&(k.disconnect(),k=null),k=new MutationObserver((e=>{e.forEach((e=>{const t=e.target.textContent;t.includes(o("ssrfInstancePlaceholder"))&&l(e,t)}))})),k.observe(e,{characterData:!0,subtree:!0}))};let x;const q=()=>{A(),e(o("theme")),t(),c(),(()=>{m&&(m.disconnect(),m=null);const e=document.querySelector(".c-content");m=new MutationObserver((e=>{e.forEach((e=>{if(e.removedNodes.length>0)return;if(0===e.addedNodes.length)return;const{target:t}=e;if(t.classList.contains("c-content")){const t=e.addedNodes[0];if(!t.classList)return;if(1===t.classList.length){const e=t.classList[0];if(!e.startsWith("c-"))return;b(e)}}}))})),m.observe(e,{subtree:!0,childList:!0})})(),x&&(x.disconnect(),x=null),x=new MutationObserver((e=>{e.forEach((e=>{"true"===e.target.getAttribute("data-is-collapsed")||(t(),c(),r(),i())}))})),x.observe(document.querySelector(".c-sidebar__toggle"),{attributes:!0,subtree:!0}),r(),i(),"true"===o("showOutdatedVersionWarning")&&s().then((e=>{e.includes("New EvenBetter version available")&&v("Update available!","You are using an outdated version of EvenBetter. Please update to the latest version at https://github.com/bebiksior/EvenBetter. This popup can be disabled in the EvenBetter settings.")}));const n=document.querySelector(".c-content")?.children[0]?.classList[0];n&&setTimeout((()=>b(n)),100),"c-settings"===n&&L(),T()};let C;const T=()=>{const e=document.querySelectorAll(".c-popover__floating"),t=e[e.length-1];t&&(C&&(C.disconnect(),C=null),C=new MutationObserver((e=>{e.forEach((e=>{if(e.addedNodes.length>0){const t=e.addedNodes[0];if(8===t.nodeType)return;console.log("Popover panel added"),t.querySelectorAll(".c-item")[1].addEventListener("click",(()=>{setTimeout((()=>{console.log("Settings tab clicked"),L()}),10)}))}}))})),C.observe(t,{childList:!0}))},L=()=>{const e=document.querySelector(".c-settings__content")?.children[0]?.classList[0],t=e.charAt(2).toUpperCase()+e.slice(3);document.querySelectorAll(".c-settings__navigation .c-underline-nav-item").forEach((e=>{e.textContent===t&&(w(e),y(t))}))},I=setInterval((()=>{document.querySelector(".c-sidebar__body")&&(clearInterval(I),q())}),100),A=()=>{const e=document.querySelector("#evenbetter-update-status");e&&(e.remove(),console.log("Update status removed"));const t=document.querySelector("#evenbetter-settings-content");t&&(t.remove(),console.log("Settings content removed"));const n=document.querySelector("#evenbetter-settings-tab");n&&(n.remove(),console.log("Settings tab removed"))}})()})();