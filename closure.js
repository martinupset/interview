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


//以下两段代码为闭包的理解
//this不是静态的，也并不是在编写的时候绑定的，而是在运行时绑定的。
//它的绑定和函数声明的位置没有关系，只取决于函数调用的方式。
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

var name = "The Window";
var object1 = {
    name: "My Object",
    getNameFunc: function () {
        var that = this;
        console.log(window.name)
        return function () {
            return that.name;
        };
    }
};

console.log(object1.getNameFunc()());
