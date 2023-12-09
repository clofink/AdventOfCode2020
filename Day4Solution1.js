function day4Solution1(data) {
    data = data.split("\n\n");
    const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'].sort().join(" ");
    let validPassports = 0;
    for (let passport of data) {
        let foundFields = [];
        for (let line of passport.split("\n")) {
            let lineParts = line.split(" ");
            for (let part of lineParts) {
                let fieldName = part.split(":")[0];
                if (fieldName !== "cid") foundFields.push(fieldName)
            }
        }
        if (foundFields.sort().join(' ') === requiredFields) validPassports++
    }
    return validPassports;
}