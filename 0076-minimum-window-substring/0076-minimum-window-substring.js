/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function(s, t) {
  let arr = new Array(128).fill(0)
  let result = [-Infinity, Infinity]
  let missing = t.length
  let n = s.length

  for (let i = 0; i < missing; i++) {
    arr[t.charCodeAt(i)]++
  }

  let start = 0
  for (let end = 0; end < n; end++) {
    if(arr[s.charCodeAt(end)] > 0) {
      missing--
    }
    arr[s.charCodeAt(end)]--

    while (missing === 0) {
      if (result[1] - result[0] > end - start){
        result[1] = end
        result[0] = start
      }
      arr[s.charCodeAt(start)]++

      if (arr[s.charCodeAt(start)] > 0) {
        missing++
      }
      start++
    }
  }
  return result[1] == Infinity ? "" : s.slice(result[0], result[1]+1)
}