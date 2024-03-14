"use client";
"use strict";
exports.__esModule = true;
var ButtonSvg_1 = require("../assets/svg/ButtonSvg");
var Button = function (_a) {
    var className = _a.className, href = _a.href, onClick = _a.onClick, children = _a.children, px = _a.px, white = _a.white;
    var classes = "button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 " + (px || "px-7") + " " + (white ? "text-n-8" : "text-n-1") + " " + (className || "");
    var spanClasses = "relative z-10";
    var renderButton = function () { return (React.createElement("button", { className: classes, onClick: onClick },
        React.createElement("span", { className: spanClasses }, children),
        ButtonSvg_1["default"](white))); };
    var renderLink = function () { return (React.createElement("a", { href: href, className: classes },
        React.createElement("span", { className: spanClasses }, children),
        ButtonSvg_1["default"](white))); };
    return href ? renderLink() : renderButton();
};
exports["default"] = Button;
