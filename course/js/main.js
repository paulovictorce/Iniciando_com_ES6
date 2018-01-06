"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pessoa = function () {
    function Pessoa(name, email, phone) {
        _classCallCheck(this, Pessoa);

        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    _createClass(Pessoa, [{
        key: "toString",
        value: function toString() {
            return "\n            name: " + this.name + "\n            email: " + this.email + "\n            phone: " + this.phone + "\n        ";
        }
    }]);

    return Pessoa;
}();

var Client = function (_Pessoa) {
    _inherits(Client, _Pessoa);

    function Client(id, name, email, phone) {
        _classCallCheck(this, Client);

        var _this = _possibleConstructorReturn(this, (Client.__proto__ || Object.getPrototypeOf(Client)).call(this, name, email, phone));

        _this.id = id;
        return _this;
    }

    _createClass(Client, [{
        key: "toString",
        value: function toString() {
            return "\n            id:" + this.id + "\n            " + _get(Client.prototype.__proto__ || Object.getPrototypeOf(Client.prototype), "toString", this).call(this) + "\n        ";
        }
    }]);

    return Client;
}(Pessoa);

var client = new Client(1, "Paulo Victor", "bd.paulovictor@gmail.com", "(85)9999-9999");

console.log(client.toString());
