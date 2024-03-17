"use strict";
exports.__esModule = true;
exports.BackgroundCircles = exports.BottomLine = exports.Gradient = void 0;
var react_1 = require("react");
var react_just_parallax_1 = require("react-just-parallax");
var PlusSvg_1 = require("../../../public/assets/svg/PlusSvg");
exports.Gradient = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "relative z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" }),
        React.createElement("div", { className: "relative z-1 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" })));
};
exports.BottomLine = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" }),
        React.createElement(PlusSvg_1["default"], { className: "hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block" }),
        React.createElement(PlusSvg_1["default"], { className: "hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block" })));
};
var Rings = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" }),
        React.createElement("div", { className: "absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" }),
        React.createElement("div", { className: "absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" }),
        React.createElement("div", { className: "absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" })));
};
exports.BackgroundCircles = function (_a) {
    var parallaxRef = _a.parallaxRef;
    var _b = react_1.useState(false), mounted = _b[0], setMounted = _b[1];
    react_1.useEffect(function () {
        setMounted(true);
    }, []);
    return (React.createElement("div", { className: "absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]" },
        React.createElement(Rings, null),
        React.createElement(react_just_parallax_1.MouseParallax, { strength: 0.07, parallaxContainerRef: parallaxRef },
            React.createElement("div", { className: "absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]" },
                React.createElement("div", { className: "w-2 h-2 -ml-1 -mt-36 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out " + (mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0") })),
            React.createElement("div", { className: "absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]" },
                React.createElement("div", { className: "w-4 h-4 -ml-1 -mt-32 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out " + (mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0") })),
            React.createElement("div", { className: "absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]" },
                React.createElement("div", { className: "hidden w-4 h-4 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full xl:block transit transition-transform duration-500 ease-out " + (mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0") })),
            React.createElement("div", { className: "absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]" },
                React.createElement("div", { className: "w-3 h-3 -ml-1.5 mt-52 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out " + (mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0") })),
            React.createElement("div", { className: "absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]" },
                React.createElement("div", { className: "w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out " + (mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0") })),
            React.createElement("div", { className: "absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]" },
                React.createElement("div", { className: "w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out " + (mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0") })))));
};
