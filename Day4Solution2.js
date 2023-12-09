function day4Solution2(data) {
    data = data.split("\n\n");
    const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'].sort().join(" ");
    let validPassports = 0;
    for (let passport of data) {
        let validFoundFields = [];
        for (let line of passport.split("\n")) {
            let lineParts = line.split(" ");
            for (let part of lineParts) {
                let fieldName = part.split(":")[0];
                let fieldValue = part.split(":")[1];
                switch(fieldName) {
                    // byr (Birth Year) - four digits; at least 1920 and at most 2002.
                    case "byr": {
                        if (fieldValue.length !== 4 || !/\d{4}/.test(fieldValue)) {
                            continue;
                        };
                        let yearNum = parseInt(fieldValue, 10);
                        if (yearNum < 1920 || yearNum > 2002) {
                            continue;
                        };
                        break;
                    }
                    // iyr (Issue Year) - four digits; at least 2010 and at most 2020.
                    case "iyr": {
                        if (fieldValue.length !== 4 || !/\d{4}/.test(fieldValue)) {
                            continue;
                        };
                        let yearNum = parseInt(fieldValue, 10);
                        if (yearNum < 2010 || yearNum > 2020) {
                            continue;
                        };
                        break;
                    }
                    // eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
                    case "eyr": {
                        if (fieldValue.length !== 4 || !/\d{4}/.test(fieldValue)) {
                            continue;
                        };
                        let yearNum = parseInt(fieldValue, 10);
                        if (yearNum < 2020 || yearNum > 2030) {
                            continue;
                        };
                        break;
                    }
                    // hgt (Height) - a number followed by either cm or in:
                    case "hgt": {
                        let unit = fieldValue.substring(fieldValue.length - 2)
                        switch (unit) {
                            // If cm, the number must be at least 150 and at most 193.
                            case "cm": {
                                let heightNum = parseInt(fieldValue.substring(0, fieldValue.length - 2), 10);
                                if (heightNum < 150 || heightNum > 193) {
                                    continue;
                                }
                                break;
                            }
                            // If in, the number must be at least 59 and at most 76.
                            case "in": {
                                let heightNum = parseInt(fieldValue.substring(0, fieldValue.length - 2), 10);
                                if (heightNum < 59 || heightNum > 76) {
                                    continue;
                                }
                                break;
                            }
                            default: {
                                continue;
                            }
                        }
                        break;
                    }
                    // hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
                    case "hcl": {
                        if (fieldValue.length !== 7 || !/#[0-9a-f]{6}/.test(fieldValue)) {
                            continue;
                        };
                        break;
                    }
                    // ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
                    case "ecl": {
                        if (['blu', 'amb', 'brn', 'gry', 'grn', 'hzl', 'oth'].indexOf(fieldValue) === -1) {
                            continue;
                        }
                        break;
                    }
                    // pid (Passport ID) - a nine-digit number, including leading zeroes.
                    case "pid": {
                        if (fieldValue.length !== 9 || !/[0-9]{9}/.test(fieldValue)) {
                            continue;
                        }
                        break;
                    }
                    // cid (Country ID) - ignored, missing or not.
                    default: {
                        break;
                    }
                }
                if (fieldName !== "cid") validFoundFields.push(fieldName)
            }
        }
        if (validFoundFields.sort().join(' ') === requiredFields) {
            validPassports++
        }
    }
    return validPassports;
}