"use strict";
exports.__esModule = true;
exports.RightLine = exports.LeftLine = void 0;
var assets_1 = require("../../../public/assets");
exports.LeftLine = function () {
    return (React.createElement("div", { className: "hidden lg:block absolute top-1/2 right-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 pointer-events-none" },
        React.createElement("img", { className: "w-full", src: assets_1.lines, width: 1480, height: 177, alt: "Lines" })));
};
exports.RightLine = function () {
    return (React.createElement("div", { className: "hidden lg:block absolute top-1/2 left-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 -scale-x-100 pointer-events-none" },
        React.createElement("img", { className: "w-full", src: assets_1.lines, width: 1480, height: 177, alt: "Lines" })));
};
