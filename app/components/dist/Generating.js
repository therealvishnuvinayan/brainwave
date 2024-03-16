"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var assets_1 = require("../assets");
var Generating = function (_a) {
    var className = _a.className;
    return (React.createElement("div", { className: (className || "") + " flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem]" },
        React.createElement(image_1["default"], { src: assets_1.loading, className: 'w-5 h-5 mr-4', alt: 'loader' }),
        "AI is generating"));
};
exports["default"] = Generating;
