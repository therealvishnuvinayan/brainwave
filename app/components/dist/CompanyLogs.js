"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var constants_1 = require("../constants");
var CompanyLogs = function (_a) {
    var className = _a.className;
    return (React.createElement("div", { className: className },
        React.createElement("h5", { className: "tagline mb-6 text-center text-n-1/50" }, "Helping people create beautiful content at"),
        React.createElement("ul", { className: "flex" },
            constants_1.companyLogos.map(function (logo, index) { return (React.createElement("li", { className: "flex items-center justify-center flex-1 h-[8.5rem]", key: index },
                React.createElement(image_1["default"], { src: logo, width: 134, height: 28, alt: logo }))); }),
            React.createElement("li", null))));
};
exports["default"] = CompanyLogs;
