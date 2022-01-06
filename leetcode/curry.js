// function sum (x) {
//     console.log(arguments)
//     if (arguments.length == 2) {
//         return arguments[0] + arguments[1];
//     }
    
//     return function(y) {
//         return x + y;
//     }
// }

// console.log(sum(2, 3)); // Outputs 5
// console.log(sum(2)(3)); // Outputs 5

function add() {
    let args = Array.prototype.slice.call(arguments)

    let inner = function () {
        args.push(...arguments)
        return inner
    }

    inner.toString = () => {
        return args.reduce( (pre, cur) => {
            return pre + cur
        })
    }

    return inner
}

console.log(add(1)(2), add(1)(2,3))