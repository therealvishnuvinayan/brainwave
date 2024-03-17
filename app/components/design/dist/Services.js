"use strict";
exports.__esModule = true;
exports.VideoBar = exports.VideoChatMessage = exports.PhotChatMessage = exports.Gradient = void 0;
var image_1 = require("next/image");
var assets_1 = require("../../../public/assets");
var ChatBubbleWing_1 = require("../../../public/assets/svg/ChatBubbleWing");
exports.Gradient = function () {
    return (React.createElement("div", { className: "absolute top-0 -left-[10rem] w-[56.625rem] h-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none" },
        React.createElement(image_1["default"], { className: "absolute top-1/2 left-1/2 w-[79.5625rem] max-w-[79.5625rem] h-[88.5625rem] -translate-x-1/2 -translate-y-1/2", src: assets_1.gradient, width: 1417, height: 1417, alt: "Gradient" })));
};
exports.PhotChatMessage = function () {
    return (React.createElement("div", { className: "absolute top-8 right-8 max-w-[17.5rem] py-6 px-8 bg-black rounded-t-xl rounded-bl-xl font-code text-base lg:top-16 lg:right-[8.75rem] lg:max-w-[17.5rem]" },
        "Hey Brainwave, enhance this photo",
        React.createElement(ChatBubbleWing_1["default"], { className: "absolute left-full bottom-0" })));
};
exports.VideoChatMessage = function () {
    return (React.createElement("div", { className: "absolute top-8 left-[3.125rem] w-full max-w-[14rem] pt-2.5 pr-2.5 pb-7 pl-5 bg-n-6 rounded-t-xl rounded-br-xl font-code text-base md:max-w-[17.5rem]" },
        "Video generated!",
        React.createElement("div", { className: "absolute left-5 -bottom-[1.125rem] flex items-center justify-center w-[2.25rem] h-[2.25rem] bg-color-1 rounded-[0.75rem]" },
            React.createElement("img", { src: assets_1.brainwaveWhiteSymbol, width: 26, height: 26, alt: "Brainwave" })),
        React.createElement("p", { className: "tagline absolute right-2.5 bottom-1 text-[0.625rem] text-n-3 uppercase" }, "just now"),
        React.createElement(ChatBubbleWing_1["default"], { className: "absolute right-full bottom-0 -scale-x-100", pathClassName: "fill-n-6" })));
};
exports.VideoBar = function () {
    return (React.createElement("div", { className: "absolute left-0 bottom-0 w-full flex items-center p-6" },
        React.createElement("img", { src: assets_1.play, width: 24, height: 24, alt: "Play", className: "object-contain mr-3" }),
        React.createElement("div", { className: "flex-1 bg-[#D9D9D9]" },
            React.createElement("div", { className: "w-1/2 h-0.5 bg-color-1" }))));
};
