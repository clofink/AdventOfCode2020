function day7Solution1(data) {
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
    let totalBags = [];
    for (let bag in bags) {
        if (bag === myBag) continue;
        let bagsToCheck = [bag];
        while (bagsToCheck.length > 0) {
            let currentBag = bagsToCheck.shift();
            if (currentBag[currentBag.length - 1] !== "s") currentBag+= "s";
            if (currentBag === myBag) {
                if (totalBags.indexOf(bag) < 0) totalBags.push(bag)
                break;
            }
            else {
                for (let subBag of bags[currentBag]) {
                    bagsToCheck.push(subBag.color);
                }
            }
        }
    }
    return totalBags.length;
}