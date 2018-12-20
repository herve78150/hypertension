"use strict";
function loadScript(src) {
  let script = document.createElement("script");
  script.src = src;
  script.type = "text/javascript";
  document.head.appendChild(script);
}

let js = "javascript/data.js";
loadScript(js);
js = "javascript/dataMod.js";
loadScript(js);
