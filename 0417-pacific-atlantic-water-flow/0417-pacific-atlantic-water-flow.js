/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
const pacificAtlantic = function(matrix) {
  const [m,n] = [matrix.length, matrix[0].length]
  if (m === 0) return []

  const pacVisited = new Set()
  const atlVisited = new Set()
  const directions = [[1,0],[-1,0],[0,1],[0,-1]]

  const intersection = (setA, setB) => {
    let result = new Set()
    for (let el of setB) {
      if (setA.has(el)) {
        result.add(el)
      }
    }
    return result
  }
  const dfs = (i, j, visited) => {
    const pair = `${i}-${j}`
    if (visited.has(pair)) return
    visited.add(pair)
    
    for (const direction of directions) {
      const [nextI, nextJ] = [i + direction[0], j + direction[1]]
      if (
        0 <= nextI &&
        nextI < m &&
        0 <= nextJ &&
        nextJ < n &&
        matrix[nextI][nextJ] >= matrix[i][j]
      ) {
        dfs(nextI, nextJ, visited)
      }
    }
  }
  for (let row = 0; row < m; row++) {
    dfs(row, 0, pacVisited)
    dfs(row, n-1, atlVisited)
  }
  for (let col = 0; col < n; col++) {
    dfs(0, col, pacVisited)
    dfs(m-1, col, atlVisited)
  }
  return [...intersection(atlVisited, pacVisited)].map(pair => pair.split('-').map(Number))
}

