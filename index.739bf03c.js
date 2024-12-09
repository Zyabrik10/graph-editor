// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8G2QE":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "ba60c367739bf03c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"ebWYT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _classes = require("./classes");
var _config = require("./config");
var _addVertexEvent = require("./events/addVertexEvent");
var _addVertexEventDefault = parcelHelpers.interopDefault(_addVertexEvent);
var _moveVerteciesEvent = require("./events/moveVerteciesEvent");
var _moveVerteciesEventDefault = parcelHelpers.interopDefault(_moveVerteciesEvent);
var _update = require("./update");
var _updateDefault = parcelHelpers.interopDefault(_update);
window.addEventListener("load", function() {
    (0, _config.conf).canvas = document.querySelector("canvas");
    (0, _config.conf).ctx = (0, _config.conf).canvas.getContext("2d");
    (0, _config.conf).canvas.width = (0, _config.conf).convasConfig.size.width;
    (0, _config.conf).canvas.height = (0, _config.conf).convasConfig.size.height;
    (0, _config.conf).graph = new (0, _classes.Graph)();
    (0, _updateDefault.default)();
    (0, _addVertexEventDefault.default)();
    (0, _moveVerteciesEventDefault.default)();
});

},{"./classes":"flIX4","./config":"k5Hzs","./events/addVertexEvent":"dy1BO","./events/moveVerteciesEvent":"5gM5M","./update":"18sDr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"flIX4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Vertex", ()=>(0, _vertexJsDefault.default));
parcelHelpers.export(exports, "Graph", ()=>(0, _graphJsDefault.default));
parcelHelpers.export(exports, "Edge", ()=>(0, _edgeJsDefault.default));
var _vertexJs = require("./Vertex.js");
var _vertexJsDefault = parcelHelpers.interopDefault(_vertexJs);
var _graphJs = require("./Graph.js");
var _graphJsDefault = parcelHelpers.interopDefault(_graphJs);
var _edgeJs = require("./Edge.js");
var _edgeJsDefault = parcelHelpers.interopDefault(_edgeJs);

},{"./Vertex.js":"8S5jM","./Graph.js":"gJkS8","./Edge.js":"dilpi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8S5jM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _config = require("../config");
class Vertex {
    constructor({ size, color, id, coor, label }){
        this.size = size;
        this.color = color;
        this.id = id;
        this.coor = coor;
        this.label = label;
    }
    draw() {
        (0, _config.conf).ctx.strokeStyle = this.color;
        (0, _config.conf).ctx.beginPath();
        (0, _config.conf).ctx.arc(this.coor.x, this.coor.y, this.size, 0, 2 * Math.PI);
        (0, _config.conf).ctx.stroke();
        (0, _config.conf).ctx.fillStyle = "white";
        (0, _config.conf).ctx.beginPath();
        (0, _config.conf).ctx.arc(this.coor.x, this.coor.y, this.size, 0, 2 * Math.PI);
        (0, _config.conf).ctx.fill();
        const contentSize = this.size / (this.label.length * 0.8);
        (0, _config.conf).ctx.fillStyle = "black";
        (0, _config.conf).ctx.textAlign = "center";
        (0, _config.conf).ctx.font = `${contentSize}px Arial`;
        (0, _config.conf).ctx.fillText(this.label, this.coor.x, this.coor.y + contentSize / 2);
    }
}
exports.default = Vertex;

},{"../config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "conf", ()=>conf);
parcelHelpers.export(exports, "math", ()=>math);
const conf = {
    canvas: undefined,
    ctx: undefined,
    graph: undefined,
    convasConfig: {
        size: {
            width: 600,
            height: 400
        }
    }
};
const math = {
    getRandomInt: (min, max)=>Math.floor(Math.random() * (max - min + 1) + min),
    getDistance: (a, b)=>Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2))
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"gJkS8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Graph {
    constructor(vertices = [], edges = []){
        this.vertices = vertices;
        this.edges = edges;
    }
    addVertex(vertex) {
        this.vertices.push(vertex);
    }
    getVertex(vertexId) {
        return this.vertices.filter((vertex)=>vertex.id === vertexId)[0];
    }
    getVertexByLabel(vertexLabel) {
        return this.vertices.filter((vertex)=>vertex.label === vertexLabel)[0];
    }
    removeVertex(vertexId) {
        this.vertices = this.vertices.filter((vertex)=>vertex.id !== vertexId);
    }
    removeEdges(vertexId) {
        this.edges = this.edges.filter((edge)=>edge.start.id !== vertexId && edge.end.id !== vertexId);
    }
    removeEdge(edgeId) {
        this.edges = this.edges.filter((edge)=>edge.id !== edgeId);
    }
    addEdge(edge) {
        this.edges.push(edge);
    }
    drawVertices() {
        this.vertices.forEach((vertex)=>vertex.draw());
    }
    drawEdges() {
        this.edges.forEach((edge)=>edge.draw());
    }
    draw() {
        this.drawEdges();
        this.drawVertices();
    }
}
exports.default = Graph;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dilpi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _config = require("../config");
class Edge {
    constructor({ weight, start, end, id }){
        this.weight = weight;
        this.start = start;
        this.end = end;
        this.id = id;
    }
    draw() {
        (0, _config.conf).ctx.strokeStyle = "black";
        (0, _config.conf).ctx.lineWidth = 1;
        (0, _config.conf).ctx.beginPath();
        (0, _config.conf).ctx.moveTo(this.start.coor.x, this.start.coor.y);
        (0, _config.conf).ctx.lineTo(this.end.coor.x, this.end.coor.y);
        (0, _config.conf).ctx.stroke();
    }
}
exports.default = Edge;

},{"../config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dy1BO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>addVertexEvent);
var _classes = require("../classes");
var _config = require("../config");
var _addVertex = require("../utils/addVertex");
var _addVertexDefault = parcelHelpers.interopDefault(_addVertex);
var _addVertexUI = require("../utils/addVertexUI");
var _addVertexUIDefault = parcelHelpers.interopDefault(_addVertexUI);
var _updateGraphInfo = require("../utils/updateGraphInfo");
var _updateGraphInfoDefault = parcelHelpers.interopDefault(_updateGraphInfo);
function addVertexEvent() {
    const button = document.querySelector(".add-vertex");
    let c = 0;
    const size = 20;
    button.addEventListener("click", ()=>{
        if ((0, _config.conf).graph.vertices.length === 0) c = 0;
        (0, _addVertexDefault.default)({
            id: c,
            color: 'blue',
            size,
            coor: {
                x: (0, _config.math).getRandomInt(size, (0, _config.conf).canvas.width - size),
                y: (0, _config.math).getRandomInt(size, (0, _config.conf).canvas.height - size)
            },
            label: (c++).toString()
        });
    });
}

},{"../classes":"flIX4","../config":"k5Hzs","../utils/addVertex":"8j2z8","../utils/addVertexUI":"lWnJk","../utils/updateGraphInfo":"1KRlt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8j2z8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>addVertex);
var _classes = require("../classes");
var _config = require("../config");
var _addVertexUI = require("./addVertexUI");
var _addVertexUIDefault = parcelHelpers.interopDefault(_addVertexUI);
var _updateGraphInfo = require("./updateGraphInfo");
var _updateGraphInfoDefault = parcelHelpers.interopDefault(_updateGraphInfo);
function addVertex({ id, color, size, coor, label }) {
    const vertex = new (0, _classes.Vertex)({
        id,
        color,
        size,
        coor,
        label
    });
    (0, _config.conf).graph.addVertex(vertex);
    (0, _config.conf).graph.draw();
    (0, _addVertexUIDefault.default)(vertex);
    (0, _updateGraphInfoDefault.default)();
}

},{"../classes":"flIX4","../config":"k5Hzs","./addVertexUI":"lWnJk","./updateGraphInfo":"1KRlt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lWnJk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>addVertexUI);
var _vertexUI = require("../components/VertexUI");
var _vertexUIDefault = parcelHelpers.interopDefault(_vertexUI);
var _addEdge = require("./addEdge");
var _addEdgeDefault = parcelHelpers.interopDefault(_addEdge);
var _editVertexLabel = require("./editVertexLabel");
var _editVertexLabelDefault = parcelHelpers.interopDefault(_editVertexLabel);
var _removeVertex = require("./removeVertex");
var _removeVertexDefault = parcelHelpers.interopDefault(_removeVertex);
const vertecies = document.querySelector(".vertecies");
function addVertexUI(vertex) {
    vertecies.insertAdjacentHTML("beforeend", (0, _vertexUIDefault.default)(vertex)); // inserting ui
    const vertexEditorBlock = document.querySelector(`.vertex-editor-item[data-id="${vertex.id}"]`);
    const vertexInputLabel = vertexEditorBlock.querySelector(".vertex-label-input");
    const removeVertexButton = vertexEditorBlock.querySelector(".remove-vertex");
    const addEdgeButton = vertexEditorBlock.querySelector(".add-edge");
    const edgeList = vertexEditorBlock.querySelector(".edge-list");
    removeVertexButton.addEventListener("click", (0, _removeVertexDefault.default).bind(null, vertex.id, vertexEditorBlock));
    vertexInputLabel.addEventListener("input", ()=>(0, _editVertexLabelDefault.default)(vertex.id, vertexInputLabel.value));
    addEdgeButton.addEventListener("click", (0, _addEdgeDefault.default).bind(null, vertex, edgeList));
}

},{"../components/VertexUI":"cQVP1","./addEdge":"eVQA3","./editVertexLabel":"hcd0s","./removeVertex":"hXkMh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cQVP1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>VertexUI);
function VertexUI(vertex) {
    return `
        <li class="vertex-editor-item" data-id="${vertex.id}">
            <div>
                <input class="vertex-label-input" type="text" value="${vertex.label}"/>
                <button class="remove-vertex remove-button" class="remove-button">Delete</button>
            </div>
            <ul class="edge-list"></ul>
            <button class="add-edge">Add Edge</button>
        </li>`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eVQA3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>addEdge);
var _classes = require("../classes");
var _config = require("../config");
var _addEdgeUI = require("./addEdgeUI");
var _addEdgeUIDefault = parcelHelpers.interopDefault(_addEdgeUI);
var _updateGraphInfo = require("./updateGraphInfo");
var _updateGraphInfoDefault = parcelHelpers.interopDefault(_updateGraphInfo);
function addEdge(vertex, edgeList) {
    if ((0, _config.conf).graph.vertices.length < 2) {
        console.log("Too few vertices");
        return;
    }
    const weight = 0;
    const start = vertex;
    let end;
    const id = (0, _config.conf).graph.edges.length + 1;
    let hasAllEdges = true;
    for(let i = 0; i < (0, _config.conf).graph.vertices.length; i++){
        if ((0, _config.conf).graph.vertices[i].id === start.id) continue;
        let isEsdge = false;
        for(let j = 0; j < (0, _config.conf).graph.edges.length; j++)if ((0, _config.conf).graph.edges[j].start.id === start.id && (0, _config.conf).graph.edges[j].end.id === (0, _config.conf).graph.vertices[i].id || (0, _config.conf).graph.edges[j].end.id === start.id && (0, _config.conf).graph.edges[j].start.id === (0, _config.conf).graph.vertices[i].id) {
            isEsdge = true;
            break;
        }
        if (!isEsdge) {
            end = (0, _config.conf).graph.vertices[i];
            hasAllEdges = false;
            break;
        }
    }
    if (hasAllEdges) {
        console.log("No other vertices to connect");
        return;
    }
    const edge = new (0, _classes.Edge)({
        weight,
        start,
        end,
        id
    });
    (0, _config.conf).graph.addEdge(edge);
    (0, _addEdgeUIDefault.default)(edge, edgeList);
    (0, _updateGraphInfoDefault.default)();
}

},{"../classes":"flIX4","../config":"k5Hzs","./addEdgeUI":"gMhVN","./updateGraphInfo":"1KRlt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gMhVN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>addEdgeUI);
var _edgeUI = require("../components/EdgeUI");
var _edgeUIDefault = parcelHelpers.interopDefault(_edgeUI);
var _config = require("../config");
function addEdgeUI(edge, edgeList) {
    const edgeEditorComponent = (0, _edgeUIDefault.default)(edge);
    edgeList.insertAdjacentHTML("beforeend", edgeEditorComponent);
    const input = document.querySelector(`.edge-editor-item[data-id="${edge.id}"] .to-vertex`);
    const remove = document.querySelector(`.edge-editor-item[data-id="${edge.id}"] .remove-edge`);
    input.addEventListener("input", ()=>{
        const vertex = (0, _config.conf).graph.getVertexByLabel(input.value);
        if (!vertex) {
            console.log(`No such vertex as ${input.value}`);
            return;
        }
        edge.end = vertex;
    });
    remove.addEventListener("click", ()=>{
        (0, _config.conf).graph.removeEdge(edge.id);
        edgeList.removeChild(document.querySelector(`.edge-editor-item[data-id="${edge.id}"]`));
    });
}

},{"../components/EdgeUI":"23USS","../config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"23USS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EdgeUI);
function EdgeUI(edge) {
    return `
    <li class="edge-editor-item" data-id="${edge.id}">
        <div>
            <span class="current-vertex">${edge.start.label}</span>
            <span> &rarr; </span>    
            <input class="to-vertex" type="text" value="${edge.end.label}"/>
        </div>
        <button class="remove-edge remove-button">Remove</button>
    </li>`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1KRlt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>updateGraphInfo);
var _config = require("../config");
const v = document.querySelector("#num-vertices");
const e = document.querySelector("#num-edges");
function updateGraphInfo() {
    v.innerText = (0, _config.conf).graph.vertices.length;
    e.innerText = (0, _config.conf).graph.edges.length;
}

},{"../config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hcd0s":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>editVertexLabel);
var _config = require("../config");
function editVertexLabel(vertexId, newLabel) {
    (0, _config.conf).graph.getVertex(vertexId).label = newLabel;
}

},{"../config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hXkMh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>removeVertex);
var _config = require("../config");
function removeVertex(vertexId, vertexEditor) {
    (0, _config.conf).graph.removeVertex(vertexId);
    (0, _config.conf).graph.removeEdges(vertexId);
    vertexEditor.remove();
}

},{"../config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5gM5M":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>moveVerteciesEvent);
var _config = require("../config");
function moveVerteciesEvent() {
    let index;
    let isDragging = false;
    let offset = {
        x: 0,
        y: 0
    };
    (0, _config.conf).canvas.addEventListener("mousemove", ({ offsetX: x, offsetY: y })=>{
        if (!isDragging && index === undefined) {
            (0, _config.conf).canvas.style.cursor = "auto";
            for (const element of (0, _config.conf).graph.vertices){
                const vertex = element;
                const distance = (0, _config.math).getDistance(vertex.coor, {
                    x,
                    y
                });
                if (distance < vertex.size) {
                    (0, _config.conf).canvas.style.cursor = "grab";
                    break;
                }
            }
            return;
        }
        (0, _config.conf).canvas.style.cursor = "grabbing";
        (0, _config.conf).graph.vertices[index].coor.x = x + offset.x;
        (0, _config.conf).graph.vertices[index].coor.y = y + offset.y;
    });
    (0, _config.conf).canvas.addEventListener("mousedown", ({ offsetX: x, offsetY: y })=>{
        for(let i = 0; i < (0, _config.conf).graph.vertices.length; i++){
            const vertex = (0, _config.conf).graph.vertices[i];
            const distance = (0, _config.math).getDistance(vertex.coor, {
                x,
                y
            });
            if (distance < vertex.size) {
                (0, _config.conf).canvas.style.cursor = "grabbing";
                index = i;
                isDragging = true;
                offset.x = vertex.coor.x - x;
                offset.y = vertex.coor.y - y;
                break;
            }
        }
    });
    (0, _config.conf).canvas.addEventListener("mouseup", ()=>{
        (0, _config.conf).canvas.style.cursor = "auto";
        index = undefined;
        isDragging = false;
        offset.x = 0;
        offset.y = 0;
    });
}

},{"../config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"18sDr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>update);
var _config = require("./config");
function update() {
    (0, _config.conf).ctx.clearRect(0, 0, (0, _config.conf).canvas.width, (0, _config.conf).canvas.height);
    (0, _config.conf).graph.draw();
    requestAnimationFrame(update);
}

},{"./config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["8G2QE","ebWYT"], "ebWYT", "parcelRequire94c2")

//# sourceMappingURL=index.739bf03c.js.map
