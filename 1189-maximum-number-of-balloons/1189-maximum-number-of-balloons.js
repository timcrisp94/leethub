/**
 * @param {string} text
 * @return {number}
 */

const balloon = {
    b: 1,
    a: 1,
    l: 2,
    o: 2,
    n: 1  
}

var maxNumberOfBalloons = function(text) {
    const n = text.length
    const map = new Map()
    
    for (let i = 0; i < n; i++) {
        if (map.has(text[i])) {
            map.set(text[i], map.get(text[i]) + 1)
        } else {
            map.set(text[i], 1)
        }
    }
    
    let result = Infinity
    const arr = Object.keys(balloon)
    for (let i = 0; i < arr.length; i++) {
        const letter = arr[i]
        if (!map.has(letter)) return 0
        
        result = Math.min(Math.floor(map.get(letter)/(balloon[letter])), result)
    }
    return result
};