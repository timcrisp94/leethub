/**
 * @param {string[]} strs
 * @return {string[][]}
 */
groupAnagrams = function(strings) {
  const hash = {}
  let result = []

  for (let string of strings) {
    let splitString = string.split('').sort().join() 
    hash[splitString] = (hash[splitString] || [])
    hash[splitString].push(string)
  }    
  
  for (let value in hash) {
    result.push(hash[value])
  }
  return result
}
