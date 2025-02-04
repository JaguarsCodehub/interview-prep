function add (a) {
    return function (b) {
        return a + b;
    }
} 

const addTwo = add(5)
console.log(addTwo(4))