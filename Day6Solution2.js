function day6Solution2(data) {
    const groups = data.split("\n\n");
    total = 0;
    for (let group of groups) {
        let yeses = "";
        let uniqueYeses = ""
        const personAnswers = group.split("\n");
        for (let answers of personAnswers) {
            for (let char of answers) {
                yeses += char;
                if (uniqueYeses.indexOf(char) < 0) uniqueYeses+=char
            }
        }
        for (let char of uniqueYeses) {
            if (yeses.split(char).length - 1 === personAnswers.length) total++
        }
    }
    return total;
}