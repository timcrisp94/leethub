/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
//    map = letter, code
//    words = [concat Morse]
//    concatWordAsCode = transformation
//     return transformation
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
                      "P","Q","R","S","T","U","V","W","X","Y","Z"];
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    const n = alphabet.length
    const map = {}

    for (let i = 0; i < n; i++) {
        let letter = alphabet[i].toLowerCase()
        map[letter] = morse[i]
    }    
    
    const transformationSet = new Set()
    for (let word of words) {
        transformation = ''
        for (let letter of word){
            transformation += map[letter]
        }
        transformationSet.add(transformation)
    }
    return transformationSet.size
};