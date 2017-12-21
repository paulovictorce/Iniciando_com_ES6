"use strict";

var color = function color() {
    return console.log("red");
};
color();

var bob = {
    _name: "Bob",
    _friends: ["Guilherme", "Fábio", "Cássio"],
    printFriends: function printFriends() {
        var _this = this;

        this._friends.forEach(function (f) {
            return console.log(_this._name + " Knows " + f);
        });
    }
};

bob.printFriends();
