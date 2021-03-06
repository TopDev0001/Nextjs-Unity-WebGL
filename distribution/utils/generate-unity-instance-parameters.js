"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUnityInstanceParameters = void 0;
/**
 * Generates the parameters for the Unity Instance based on the Unity Context
 * and Unity Props passed to the component.
 * @param unityContext The Unity Context
 * @param unityProps The Unity Props passed to the component
 * @returns A Unity Instance Parameters object
 */
function generateUnityInstanceParameters(unityContext, unityProps) {
    // Creation of an object with the parameters for the Unity Instance.
    var unityInstanceParameters = __assign({}, unityContext.unityConfig);
    // Print and printErr event hooks will be intercepted in order to catch
    // messages to the Unity Context.
    unityInstanceParameters.print = function (message) {
        unityContext.dispatchEvent("debug", message);
    };
    unityInstanceParameters.printErr = function (error) {
        unityContext.dispatchEvent("error", error);
    };
    // Some preferences will be set based on props and context config.
    if (unityProps.devicePixelRatio !== undefined) {
        unityInstanceParameters.devicePixelRatio = unityProps.devicePixelRatio;
    }
    if (unityContext.unityConfig.webglContextAttributes !== undefined) {
        unityInstanceParameters.webglContextAttributes =
            unityContext.unityConfig.webglContextAttributes;
    }
    if (unityProps.matchWebGLToCanvasSize !== undefined) {
        unityInstanceParameters.matchWebGLToCanvasSize =
            unityProps.matchWebGLToCanvasSize;
    }
    return unityInstanceParameters;
}
exports.generateUnityInstanceParameters = generateUnityInstanceParameters;
//# sourceMappingURL=generate-unity-instance-parameters.js.map