function day1Solution1(data) {
    data = data.split("\n");
    
    for (let i = 0; i < data.length; i++) {
        let firstNum = parseInt(data[i], 10);
        for (let t = i + 1; t < data.length; t++) {
            let secondNum = parseInt(data[t], 10);
            if (firstNum + secondNum === 2020) {
                return firstNum * secondNum
            }
        }
    }
}