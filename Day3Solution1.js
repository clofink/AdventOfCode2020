function day3Solution1(data) {
    data = data.split("\n");
    let treeCount = 0;
    let currentX = 0;
    for (let i = 0; i < data.length; i++) {
        let current = data[i][currentX % data[i].length]
        if (current === "#") treeCount++
        currentX += 3;
    }
    return treeCount
}