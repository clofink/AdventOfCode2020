function day8Solution2(data) {
    const instructions = data.split("\n");

    for (let i = 0; i < instructions.length; i++) {
        let instruction = instructions[i].split(' ');
        if (instruction[0] === "acc") continue;
        let tempInstructions = structuredClone(instructions);
        tempInstructions[i] = `${instruction[0] === "nop" ? "jmp" : "nop"} ${instruction[1]}`
        let accumulator = 0;
        let panic = false;
        let index = 0;
        let usedIndexes = [0];
        execution = [tempInstructions[0]]
        while (execution.length > 0 && !panic) {
            let currentLine = tempInstructions[index];
            let parts = currentLine.split(" ")
            switch (parts[0]) {
                case "acc":
                    accumulator += parseInt(parts[1]);
                    index++;
                    if (usedIndexes.indexOf(index) >= 0) panic = true;
                    usedIndexes.push(index)
                    if (!tempInstructions[index]) return accumulator;
                    execution.push(tempInstructions[index])
                    break;
                case "jmp":
                    index += parseInt(parts[1]);
                    if (usedIndexes.indexOf(index) >= 0) panic = true;
                    usedIndexes.push(index)
                    if (!tempInstructions[index]) return accumulator;
                    execution.push(tempInstructions[index])
                    break;
                case "nop":
                    index++;
                    if (usedIndexes.indexOf(index) >= 0) panic = true;
                    usedIndexes.push(index)
                    if (!tempInstructions[index]) return accumulator;
                    execution.push(tempInstructions[index])
                    break;
                default:
                    break;
            }
        }   
        if (!panic) return accumulator; 
    }
}