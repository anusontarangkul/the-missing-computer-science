function hash(key, arrayLen) {
    let total = 0;
    for (let char of key) {
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLen
    }
    return total
}

// console.log(hash('be', 10))

function hash2(key, arrayLen) {
    let total = 0;
    let PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i]
        let value = char.charCodeAt(0) - 96
        total = (total * PRIME + value) % arrayLen
    }
    return total
}


// console.log(hash2('be', 10))

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let total = 0;
        let PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * PRIME + value) % this.keyMap.length
        }
        return total
    }
    set(key, value) {
        let hashedKey = this._hash(key)
        if (!this.keyMap[hashedKey]) {
            this.keyMap[hashedKey] = []
        }
        this.keyMap[hashedKey].push([key, value])


    }
    get(key) {
        let index = this._hash(key)
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1]
                }
            }
        }
        return undefined
    }
    keys() {
        let data = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {

                for (let j = 0; j < this.keyMap[i].length; j++) {
                    console.log(this.keyMap[i][j][0])
                    data.push(this.keyMap[i][j][0])
                }
            }

        }
        return data
    }
    values() {
        let data = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {

                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!data.includes(this.keyMap[i][j][1])) {
                        data.push(this.keyMap[i][j][1])
                    }

                }
            }

        }
        return data
    }
}


let hashClass = new HashTable(1)
hashClass.set("black", "00")
hashClass.set("green", "01")
console.log(hashClass.values())