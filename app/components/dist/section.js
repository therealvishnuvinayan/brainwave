"use strict";
exports.__esModule = true;
var SectionSvg_1 = require("../assets/svg/SectionSvg");
var Section = function (_a) {
    var className = _a.className, id = _a.id, crosses = _a.crosses, crossesOffset = _a.crossesOffset, customPaddings = _a.customPaddings, children = _a.children;
    return (React.createElement("div", { id: id, className: "relative " + (customPaddings || "py-10 lg:py-16 xl:py-20") + " " + (crosses ? "lg:py-32 xl:py-40" : "") },
        children,
        React.createElement("div", { className: "hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" }),
        React.createElement("div", { className: "hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" }),
        crosses && (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 " + (crossesOffset && crossesOffset) + " pointer-events-none lg:block xl:left-10 right-10" }),
            React.createElement(SectionSvg_1["default"], { crossesOffset: crossesOffset })))));
};
exports["default"] = Section;
