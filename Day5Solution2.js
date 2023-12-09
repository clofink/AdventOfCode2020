function day5Solution2(data) {
    data = data.split("\n");
    let allIds = [];
    for (let line of data) {
        let rowStart = 0;
        let rowEnd = 127;
        let colStart = 0;
        let colEnd = 7;
        for (let char of line) {
            switch (char) {
                case "F":
                    rowEnd = Math.floor((rowStart + rowEnd) / 2)
                    break;
                case "B":
                    rowStart = rowStart + Math.ceil((rowEnd - rowStart) / 2)
                    break;
                case "L":
                    colEnd = Math.floor((colStart + colEnd) / 2)
                    break;
                case "R":
                    colStart = colStart + Math.ceil((colEnd - colStart) / 2)
                    break;
                default:
                    console.log(`invalid char "${char}"`)
                    break;
            }
        }
        const seatID = rowStart * 8 + colStart
        allIds.push(seatID)
    }
    allIds.sort(function(a,b) {if (a > b) return 1; else return -1})
    for (let i = 1; i < allIds.length; i++) {
        let current = allIds[i];
        let previous = allIds[i-1];
        if (current - previous > 1) {
            return current - 1;
        }
    }
}