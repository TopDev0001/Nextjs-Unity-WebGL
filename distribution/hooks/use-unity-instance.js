"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUnityInstance = void 0;
var react_1 = require("react");
var use_unity_loader_1 = require("./use-unity-loader");
/**
 * Creates a Unity Instance.
 * @param unityLoaderStatus The loader status
 * @param htmlCanvasElement A reference to the html canvas element
 * @param unityInstanceParameters The Unity instance parameters
 * @returns the Unity Instance among with the status of the Unity Instance.
 */
function useUnityInstance(unityLoaderStatus, htmlCanvasElement, unityInstanceParameters) {
    var _a = react_1.useState(0), progression = _a[0], setProgression = _a[1];
    var _b = react_1.useState(null), error = _b[0], setError = _b[1];
    var _c = react_1.useState(null), unityInstance = _c[0], setUnityInstance = _c[1];
    // Effect invoked when the Unity Loader status or canvas reference changes.
    react_1.useEffect(function () {
        (function () {
            return __awaiter(this, void 0, void 0, function () {
                var unityInstance_1, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (unityLoaderStatus !== use_unity_loader_1.Status.Loaded ||
                                htmlCanvasElement === null) {
                                // If the loader is not loaded, or the canvas is not available,
                                // we can't create the Unity instance yet.
                                setUnityInstance(null);
                                return [2 /*return*/];
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, window.createUnityInstance(htmlCanvasElement, unityInstanceParameters, setProgression)];
                        case 2:
                            unityInstance_1 = _a.sent();
                            // When the Unity Instance is created, its reference is stored in the
                            // state while the error state is cleared.
                            setUnityInstance(unityInstance_1);
                            setError(null);
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _a.sent();
                            // When the Unity Instance catches due to a fail during the creation,
                            // the Unity Instnace reference will be cleared while the error is
                            // placed into the state.
                            setUnityInstance(null);
                            setError(error_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        })();
    }, [unityLoaderStatus, htmlCanvasElement]);
    return { unityInstance: unityInstance, progression: progression, error: error };
}
exports.useUnityInstance = useUnityInstance;
//# sourceMappingURL=use-unity-instance.js.map