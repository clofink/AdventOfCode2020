function day7Solution2(data) {
    const rules = data.split("\n");
    const bags = {};
    for (let rule of rules) {
        const ruleParts = rule.split(" contain ")
        bagColor = ruleParts[0];
        let bag = []
        const contains = ruleParts[1].split(", ");
        for (let contain of contains) {
            const info = {}
            info.color = contain.substring(contain.indexOf(" ") + 1)
            if (info.color.indexOf(".") >= 0) info.color = info.color.substring(0, info.color.length - 1)
            info.count = parseInt(contain.split(" ", 1), 10);
            if (info.color !== "other bags") bag.push(info);
        }
        bags[bagColor] = bag;
    }
    const myBag = "shiny gold bags";
    let total = 0;
    let bagsToCheck = [{count: 1, color: myBag, multiplier: 1}];
    while (bagsToCheck.length > 0) {
        let currentBag = bagsToCheck.shift();
        if (currentBag.color[currentBag.color.length - 1] !== "s") currentBag.color+= "s";
        for (let subBag of bags[currentBag.color]) {
            total += subBag.count * currentBag.multiplier;
            const bagCopy = structuredClone(subBag)
            bagCopy.multiplier = currentBag.multiplier * subBag.count;
            bagsToCheck.push(bagCopy);
        }
    }
    return total;
}