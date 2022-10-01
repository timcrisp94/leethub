/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
   const hash = {}
   const result = []
   
   for (let s of strs) {
       let letters = s.split('').sort().join('')
       hash[letters] = hash[letters] || []
       hash[letters].push(s)      
   }
    for (let value in hash) {
        result.push(hash[value])
    }
    return result    
};

