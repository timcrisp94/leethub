/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
const pacificAtlantic = (heights) => {
    const m = heights.length, n = heights[0].length  
    const atlanticQueue = []
    const pacificQueue = []
    
    for (let x = 0; x < m; x++) {
        for (let y = 0; y < n; y++) {
            if (x === m - 1 || y === n - 1) {
                atlanticQueue.push([x, y])
            }
            if (x === 0 || y === 0) {
                pacificQueue.push([x, y])
            }
        }
    } 
    const bfs = (queue) => {
        const isValid = (x, y) => x >= 0 && y >= 0 && x < m && y < n
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
        const visited = new Array(m).fill().map(() => new Array(n).fill(false))
        while (queue.length) {
            const [x, y] = queue.shift()
            visited[x][y] = true
            for (let dir of directions) {
                let nx = x + dir[0]
                let ny = y + dir[1]
                if (!isValid(nx, ny) || visited[nx][ny]) continue
                if (heights[nx][ny] >= heights[x][y]) {
                    queue.push([nx, ny])
                }
            }
        }
        return visited
    }
    const pacific = bfs(atlanticQueue)
    const atlantic = bfs(pacificQueue)
    const paths = []
    for (let x = 0; x < m; x++) {
        for (let y = 0; y < n; y++) {
            if (pacific[x][y] && atlantic[x][y]) {
                paths.push([x, y])
            }
        }
    }
    return paths
}