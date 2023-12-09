function day8Solution1(data) {
    const instructions = data.split("\n");

    let accumulator = 0;
    let index = 0;
    let usedIndexes = [0];
    execution = [instructions[0]]
    while (execution.length > 0) {
        let currentLine = instructions[index];
        let parts = currentLine.split(" ")
        switch (parts[0]) {
            case "acc":
                accumulator += parseInt(parts[1]);
                index++;
                if (usedIndexes.indexOf(index) >= 0) return accumulator
                usedIndexes.push(index)
                execution.push(instructions[index])
                break;
            case "jmp":
                index += parseInt(parts[1]);
                if (usedIndexes.indexOf(index) >= 0) return accumulator
                usedIndexes.push(index)
                execution.push(instructions[index])
                break;
            case "nop":
                index++;
                if (usedIndexes.indexOf(index) >= 0) return accumulator
                usedIndexes.push(index)
                execution.push(instructions[index])
                break;
            default:
                break;
        }
    }
}