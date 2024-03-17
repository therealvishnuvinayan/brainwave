"use strict";
exports.__esModule = true;
exports.LeftCurve = exports.RightCurve = void 0;
var assets_1 = require("../../../public/assets");
exports.RightCurve = function () {
    return (React.createElement("div", { className: "hidden absolute top-1/2 left-full w-[10.125rem] -mt-1 ml-10 pointer-events-none xl:block" },
        React.createElement("img", { src: assets_1.curve2, width: 162, height: 76, alt: "Curve 2" })));
};
exports.LeftCurve = function () {
    return (React.createElement("div", { className: "hidden absolute top-1/2 right-full w-[32.625rem] -mt-1 mr-10 pointer-events-none xl:block" },
        React.createElement("img", { src: assets_1.curve1, width: 522, height: 182, alt: "Curve 1" })));
};
