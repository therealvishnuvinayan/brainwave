"use strict";
exports.__esModule = true;
exports.HamburgerMenu = exports.BackgroundCircles = exports.SideLines = exports.Rings = void 0;
var image_1 = require("next/image");
var assets_1 = require("../../../public/assets");
exports.Rings = function () {
    return (React.createElement("div", { className: "absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" },
        React.createElement("div", { className: "absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" }),
        React.createElement("div", { className: "absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" })));
};
exports.SideLines = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "absolute top-0 left-5 w-0.25 h-full bg-n-6" }),
        React.createElement("div", { className: "absolute top-0 right-5 w-0.25 h-full bg-n-6" })));
};
exports.BackgroundCircles = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "absolute top-[4.4rem] left-16 w-3 h-3 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full" }),
        React.createElement("div", { className: "absolute top-[12.6rem] right-16 w-3 h-3 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full" }),
        React.createElement("div", { className: "absolute top-[26.8rem] left-12 w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full" })));
};
exports.HamburgerMenu = function () {
    return (React.createElement("div", { className: "absolute inset-0 pointer-events-none lg:hidden" },
        React.createElement("div", { className: "absolute inset-0 opacity-[.03]" },
            React.createElement(image_1["default"], { className: "w-full h-full object-cover", src: assets_1.background, width: 688, height: 953, alt: "Background" })),
        React.createElement(exports.Rings, null),
        React.createElement(exports.SideLines, null),
        React.createElement(exports.BackgroundCircles, null)));
};
