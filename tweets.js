"use strict";
exports.__esModule = true;
var head_1 = require("next/head");
var reactstrap_1 = require("reactstrap");
var Tweets = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "BLINK | Recent Tweets"),
            React.createElement("meta", { name: "description", content: "Blackpink Official Fan page" }),
            React.createElement("link", { rel: "icon", href: "/logos/blink-logo.jpg" })),
        React.createElement(reactstrap_1.Container, { fluid: true, className: 'section d-flex flex-column min-vh-100' },
            React.createElement(reactstrap_1.Row, { className: 'text-center section-title' },
                React.createElement("h1", { className: "text-secondary" }, "Recent Tweets")))));
};
exports["default"] = Tweets;
