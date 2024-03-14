"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var scroll_lock_1 = require("scroll-lock");
var assets_1 = require("../assets");
var constants_1 = require("../constants");
var image_1 = require("next/image");
var Button_1 = require("./Button");
var MenuSvg_1 = require("../assets/svg/MenuSvg");
var Header_1 = require("./design/Header");
var Header = function () {
    var _a = react_1.useState(""), hash = _a[0], setHash = _a[1];
    var _b = react_1.useState(false), openNavigation = _b[0], setOpenNavigation = _b[1];
    var src = assets_1.brainwave.src, width = assets_1.brainwave.width, height = assets_1.brainwave.height;
    react_1.useEffect(function () {
        setHash(window.location.hash);
        var handleHashChange = function () {
            setHash(window.location.hash);
        };
        window.addEventListener("hashchange", handleHashChange);
        return function () {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);
    var toggleNavigation = function () {
        if (openNavigation) {
            setOpenNavigation(false);
            scroll_lock_1.enablePageScroll();
        }
        else {
            setOpenNavigation(true);
            scroll_lock_1.disablePageScroll();
        }
    };
    var handleCloseNavigation = function () {
        if (!openNavigation)
            return;
        scroll_lock_1.enablePageScroll();
        setOpenNavigation(false);
    };
    return (react_1["default"].createElement("div", { className: "fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm " + (openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm") },
        react_1["default"].createElement("div", { className: "flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4" },
            react_1["default"].createElement("a", { href: "#hero", className: "block w-[12rem] xl:mr-8" },
                react_1["default"].createElement(image_1["default"], { src: src, alt: "brainwave-logo", width: width, height: height })),
            react_1["default"].createElement("nav", { className: (openNavigation ? "flex" : "hidden") + " fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparant" },
                react_1["default"].createElement("div", { className: "relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row" }, constants_1.navigation.map(function (item) { return (react_1["default"].createElement("a", { href: item.url, id: item.id, key: item.id, onClick: handleCloseNavigation, className: "block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 " + (item.onlyMobile ? "lg:hidden" : "") + " px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold " + (item.url === hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50") + " lg:leading-5 lg:hover:text-n-1 xl:px-12" }, item.title)); })),
                react_1["default"].createElement(Header_1.HamburgerMenu, null)),
            react_1["default"].createElement("a", { href: "##signup", className: "button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block" }, "New Account"),
            react_1["default"].createElement(Button_1["default"], { className: "hidden lg:flex", href: "#login" }, "Sign in"),
            react_1["default"].createElement(Button_1["default"], { className: "ml-auto lg:hidden", px: "px-3", onClick: toggleNavigation },
                react_1["default"].createElement(MenuSvg_1["default"], { openNavigation: openNavigation })))));
};
exports["default"] = Header;
