function day5Solution1(data) {
    data = data.split("\n");
    let highest = 0;
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
        if (seatID > highest) highest = seatID;
    }
    return highest;
}