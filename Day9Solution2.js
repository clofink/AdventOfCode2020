function day9Solution2(data) {
    const lines = data.split("\n");
    const preambleSize = 25;
    let result;
    let resultIndex = 0;
    for (let i = preambleSize; i<lines.length; i++) {
        let previousItems = lines.slice(i - preambleSize, i);
        const current = parseInt(lines[i], 10);
        let isMatched = false;
        for (let t = 0; t < previousItems.length; t++) {
            const first = parseInt(previousItems[t], 10);
            for (let j = t+1; j < previousItems.length; j++) {
                const second = parseInt(previousItems[j], 10);
                if (first + second === current) {
                    isMatched = true;
                    break;
                }
            }
            if (isMatched) break;
        }
        if (!isMatched) {
            result = current;
            resultIndex = i;
            break;
        }
    }
    const remaining = lines.slice(0, resultIndex);
    let lowest;
    let highest;
    for (let i = 0; i < remaining.length; i++) {
        let startNum = parseInt(remaining[i], 10);
        lowest = startNum;
        highest = startNum;
        let currentTotal = startNum;
        // current i, keep adding until it is greater than, equal to, or run out of numbers
        for (let t = i+1; t<remaining.length; t++) {
            let currentNum = parseInt(remaining[t], 10)
            currentTotal += currentNum;
            if (currentNum < lowest) lowest = currentNum;
            if (currentNum > highest) highest = currentNum;
            if (currentTotal === result) {
                endNum = currentNum;
                return lowest + highest;
            }
        }
    }
}