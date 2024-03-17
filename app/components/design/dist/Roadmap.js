"use strict";
exports.__esModule = true;
exports.Gradient = void 0;
var image_1 = require("next/image");
var assets_1 = require("../../../public/assets");
exports.Gradient = function () {
    return (React.createElement("div", { className: "absolute top-[18.25rem] -left-[30.375rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none" },
        React.createElement("div", { className: "absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2" },
            React.createElement(image_1["default"], { className: "w-full", src: assets_1.gradient, width: 942, height: 942, alt: "Gradient" }))));
};
