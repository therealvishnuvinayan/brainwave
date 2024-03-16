"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var constants_1 = require("../constants");
var assets_1 = require("../assets");
var Notification = function (_a) {
    var className = _a.className, title = _a.title;
    return (React.createElement("div", { className: (className || "") + " flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5" },
        React.createElement(image_1["default"], { src: assets_1.notification1, height: 62, width: 62, alt: "generated image", className: "rounded-xl" }),
        React.createElement("div", { className: "flex-1" },
            React.createElement("h6", { className: "mb-1 font-semibold text-base" }, title),
            React.createElement("div", { className: "flex items-center justify-between" },
                React.createElement("ul", { className: "flex -m-0.5" }, constants_1.notificationImages.map(function (item, index) { return (React.createElement("li", { key: index, className: "flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden" },
                    React.createElement(image_1["default"], { src: item, height: 20, width: 20, alt: item.src }))); })),
                React.createElement("div", { className: "body-2 text-n-13" }, "1 min ago")))));
};
exports["default"] = Notification;
