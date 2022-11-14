/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    if (!tokens) return null
    let stack = []
    let ops = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b >= 0 ? Math.floor(a/b) : Math.ceil(a /b)      
    }
    for (let t of tokens) {
        if (ops[t]) {
            let first = stack.pop()
            let second = stack.pop()
            stack.push(ops[t](second, first))
        } else {
            stack.push(Number(t))
        }
    }
    return stack.pop()

}