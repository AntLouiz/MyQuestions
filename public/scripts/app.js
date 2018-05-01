"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Message = function (_React$Component) {
    _inherits(Message, _React$Component);

    function Message(props) {
        _classCallCheck(this, Message);

        var _this = _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).call(this, props));

        _this.state = {
            desc: _this.props.desc,
            display: 'block',
            visible: true
        };
        return _this;
    }

    _createClass(Message, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "span",
                    { style: { color: "green", display: this.state.display } },
                    this.props.desc
                )
            );
        }
    }]);

    return Message;
}(React.Component);

var Option = function (_React$Component2) {
    _inherits(Option, _React$Component2);

    function Option(props) {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));
    }

    _createClass(Option, [{
        key: "removeItself",
        value: function removeItself() {
            this.props.removeOption(this.props.name);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "li",
                    null,
                    this.props.name,
                    React.createElement(
                        "span",
                        null,
                        React.createElement(
                            "button",
                            { onClick: this.removeItself.bind(this) },
                            "remove"
                        )
                    )
                )
            );
        }
    }]);

    return Option;
}(React.Component);

var Options = function (_React$Component3) {
    _inherits(Options, _React$Component3);

    function Options(props) {
        _classCallCheck(this, Options);

        var _this3 = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

        _this3.state = { options: ["Default option"] };
        return _this3;
    }

    _createClass(Options, [{
        key: "addOption",
        value: function addOption(e) {
            var _this4 = this;

            var input_new_option = document.getElementById('input_new_option');
            var new_option = document.getElementById('input_new_option').value;

            if (!new_option.length) {
                this.props.addMessage('Insert a valid option.');
            } else if (this.state.options.indexOf(new_option) > -1) {
                this.props.addMessage('This option already exists.');
            } else {
                input_new_option.value = '';
                this.setState(function () {
                    _this4.state.options.push(new_option);
                });

                this.props.addMessage("Option " + new_option + " added successfully !");
            }
        }
    }, {
        key: "removeOption",
        value: function removeOption(option_target) {
            var _this5 = this;

            this.setState(function (prev) {
                return {
                    options: _this5.state.options.filter(function (option) {
                        return option !== option_target;
                    })
                };
            });
        }
    }, {
        key: "removeAll",
        value: function removeAll(e) {
            this.setState({ options: [] });
        }
    }, {
        key: "pickOption",
        value: function pickOption() {
            var random_index = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[random_index];
            alert(option);
        }
    }, {
        key: "render",
        value: function render() {
            var _this6 = this;

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { disabled: !this.state.options.length ? true : false, onClick: this.pickOption.bind(this) },
                    "What should i do?"
                ),
                React.createElement(
                    "button",
                    { onClick: this.removeAll.bind(this) },
                    "Remove all"
                ),
                React.createElement(
                    "ul",
                    null,
                    this.state.options.map(function (option) {
                        return React.createElement(Option, { name: option, key: option, removeOption: _this6.removeOption.bind(_this6) });
                    })
                ),
                React.createElement("input", { id: "input_new_option", type: "text" }),
                React.createElement(
                    "button",
                    { onClick: this.addOption.bind(this) },
                    "Add Option"
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var AppRoot = function (_React$Component4) {
    _inherits(AppRoot, _React$Component4);

    function AppRoot(props) {
        _classCallCheck(this, AppRoot);

        var _this7 = _possibleConstructorReturn(this, (AppRoot.__proto__ || Object.getPrototypeOf(AppRoot)).call(this, props));

        _this7.state = {
            messages: []
        };
        return _this7;
    }

    _createClass(AppRoot, [{
        key: "addMessage",
        value: function addMessage(desc) {
            var _this8 = this;

            this.setState(function () {
                {
                    messages: _this8.state.messages.push(React.createElement(Message, { key: Math.random(), desc: desc }));
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Indecision App"
                ),
                React.createElement(
                    "h2",
                    null,
                    "Put your life in the hands of indecision"
                ),
                React.createElement(Options, { addMessage: this.addMessage.bind(this) }),
                this.state.messages
            );
        }
    }]);

    return AppRoot;
}(React.Component);

var appRoot = document.getElementById("app");

ReactDOM.render(React.createElement(AppRoot, null), appRoot);
