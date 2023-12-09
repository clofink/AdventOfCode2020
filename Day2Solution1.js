function day2Solution1(data) {
    data = data.split("\n");
    let validPasswordCount = 0;
    for (let line of data) {
        const password = line.split(": ")[1];
        const parts = line.split(": ")[0].split(" ");
        const letter = parts[1]
        const rangeLow = parseInt(parts[0].split("-")[0], 10)
        const rangeHigh = parseInt(parts[0].split("-")[1], 10)
        let letterCount = 0;
        for (let char of password) {
            if (char === letter) letterCount++
        }
        if (letterCount >= rangeLow && letterCount <= rangeHigh) validPasswordCount++
    }
    return validPasswordCount;
}