function day6Solution1(data) {
    const groups = data.split("\n\n");
    total = 0;
    for (let group of groups) {
        let yeses = "";
        const yesAnswers = group.split("\n");
        for (let answers of yesAnswers) {
            for (let char of answers) {
                if (yeses.indexOf(char) < 0) yeses+=char
            }
        }
        total += yeses.length;
    }
    return total;
}