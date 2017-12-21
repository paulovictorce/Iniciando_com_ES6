var color = () => console.log("red");
color();

var bob = {
    _name:"Bob",
    _friends:["Guilherme","Fábio", "Cássio"],
    printFriends: function printFriends() {
        this._friends.forEach(f => console.log(this._name+" Knows "+f));
    }
}

bob.printFriends();