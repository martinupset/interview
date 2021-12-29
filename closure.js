//实现一个可以加一的闭包函数，使用他并使内部的数加一

function addOne() {
    let number = 0
    function add() {
        number++
        return number
    }
    return add
}

let res = addOne()
let result = res()
console.log(result)

var name = "The Window";

var object = {
    name: "My Object",

    getNameFunc: function () {
        return function () {
            return this.name;
        };

    }

};

console.log(object.getNameFunc()());

var object1 = {
    name: "My Object",

    getNameFunc: function () {
        var that = this;
        return function () {
            return that.name;
        };

    }

};

console.log(object1.getNameFunc()());
