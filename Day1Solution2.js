function day1Solution2(data) {
    data = data.split("\n");

    for (let i = 0; i < data.length; i++) {
        let firstNum = parseInt(data[i], 10);
        for (let t = i + 1; t < data.length; t++) {
            let secondNum = parseInt(data[t], 10);
            for (let j = t + 1; j < data.length; j++) {
                let thirdNum = parseInt(data[j], 10);
                if (firstNum + secondNum + thirdNum === 2020) {
                    return firstNum * secondNum * thirdNum
                }
            }
        }
    }

}