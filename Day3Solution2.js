function day3Solution2(data) {
    data = data.split("\n");
    const rightOffsets = [1,3,5,7,1];
    const downOffsets = [1,1,1,1,2]
    let total = 1;
    for (let t = 0; t < rightOffsets.length; t++) {
        let treeCount = 0;
        let currentX = 0;
        for (let i = 0; i < data.length; i += downOffsets[t]) {
            let current = data[i][currentX % data[i].length]
            if (current === "#") treeCount++
            currentX += rightOffsets[t];
        }
        total *= treeCount;
    }
    return total
}