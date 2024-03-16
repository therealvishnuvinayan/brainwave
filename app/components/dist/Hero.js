"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var react_1 = require("react");
var Section_1 = require("./Section");
var assets_1 = require("../assets");
var Button_1 = require("./Button");
var Hero_1 = require("./design/Hero");
var constants_1 = require("../constants");
var react_just_parallax_1 = require("react-just-parallax");
var Generating_1 = require("./Generating");
var Notification_1 = require("./Notification");
var CompanyLogs_1 = require("./CompanyLogs");
var Hero = function () {
    var parallaxRef = react_1.useRef(null);
    return (React.createElement(Section_1["default"], { className: "pt-[12rem] -mt-[5.25rem]", crosses: true, crossesOffset: "lg:translate-y-[5.25rem]", customPaddings: true, id: "hero" },
        React.createElement("div", { className: "container relative", ref: parallaxRef },
            React.createElement("div", { className: "relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]" },
                React.createElement("h1", { className: "h1 mb-6" },
                    "Explore the Possibilities of\u00A0AI\u00A0 Chatting with",
                    " ",
                    React.createElement("span", { className: "inline-block relative" },
                        "Brainwave",
                        " ",
                        React.createElement(image_1["default"], { src: assets_1.curve, className: "absolute top-full left-0 w-full xl:-mt-2", width: 624, height: 28, alt: "Curve" }))),
                React.createElement("p", { className: "body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8" }, "Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app."),
                React.createElement(Button_1["default"], { href: "#pricing", white: true }, "Get Started")),
            React.createElement("div", { className: "relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24" },
                React.createElement("div", { className: "relative z-1 p-0.5 rounded-2xl bg-conic-gradient" },
                    React.createElement("div", { className: "relative bg-n-8 rounded-[1rem]" },
                        React.createElement("div", { className: "h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" }),
                        React.createElement("div", { className: "aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]" },
                            React.createElement(image_1["default"], { src: assets_1.robot, className: "w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]", width: 1024, height: 490, alt: "AI" }),
                            React.createElement(Generating_1["default"], { className: "absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" }),
                            React.createElement(react_just_parallax_1.ScrollParallax, { isAbsolutelyPositioned: true },
                                React.createElement("ul", { className: "hidden xl:flex absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl" }, constants_1.heroIcons.map(function (icon, index) { return (React.createElement("li", { className: "p-5", key: index },
                                    React.createElement(image_1["default"], { src: icon, width: 24, height: 24, alt: icon }))); }))),
                            React.createElement(react_just_parallax_1.ScrollParallax, { isAbsolutelyPositioned: true },
                                React.createElement(Notification_1["default"], { className: "hidden xl:flex absolute -right-[5.5rem] bottom-[11rem] w-[18rem]", title: "Code Generation" })))),
                    React.createElement(Hero_1.Gradient, null)),
                React.createElement("div", { className: "absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]" },
                    React.createElement(image_1["default"], { src: assets_1.heroBackground, className: "w-full", width: 1440, height: 1800, alt: "hero" })),
                React.createElement(Hero_1.BackgroundCircles, { parallaxRef: parallaxRef })),
            React.createElement(CompanyLogs_1["default"], { className: "hidden lg:block relative z-10 mt-20" })),
        React.createElement(Hero_1.BottomLine, null)));
};
exports["default"] = Hero;
