"use strict";
exports.__esModule = true;
var ButtonGradient_1 = require("./assets/svg/ButtonGradient");
var Header_1 = require("./components/Header");
var Hero_1 = require("./components/Hero");
function Home() {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden" },
            React.createElement(Header_1["default"], null),
            React.createElement(Hero_1["default"], null)),
        React.createElement(ButtonGradient_1["default"], null)));
}
exports["default"] = Home;
