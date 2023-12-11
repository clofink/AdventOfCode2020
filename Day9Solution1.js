function day9Solution1(data) {
    const lines = data.split("\n");
    const preambleSize = 25;
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
        if (!isMatched) return current;
    }
}