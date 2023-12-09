function day2Solution2(data) {
    data = data.split("\n");
    let validPasswordCount = 0;
    for (let line of data) {
        const password = line.split(": ")[1];
        const parts = line.split(": ")[0].split(" ");
        const letter = parts[1]
        const posOne = parseInt(parts[0].split("-")[0], 10) - 1;
        const posTwo = parseInt(parts[0].split("-")[1], 10) - 1;
        if (password[posOne] === password[posTwo]) continue;
        if (password[posOne] === letter || password[posTwo] === letter) {
            validPasswordCount++;
        }
    }
    return validPasswordCount;
}