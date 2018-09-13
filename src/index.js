class Sorter {

    constructor() {

        this.arr = [];

        this.compareNumbers = function (a, b) {
            return a - b;
        }
        
        this.compare = function (a, b) {
            return a - b;
        }
    }

    add(element) {

        this.arr.push(element);

    }

    at(index) {

        return this.arr[index];
    }

    get length() {

        return this.arr.length;

    }

    toArray() {

        return this.arr;

    }

    sort(indices) {

        let cut = [];

        for (let i = 0; i < indices.length; i++) {

            cut.push(this.arr[indices[i]]);
        }

        cut.sort(this.compare);

        indices.sort(this.compareNumbers);

        for (let i = 0; i < indices.length; i++) {

            this.arr[indices[i]] = cut[i];
        }
    }

    setComparator(compareFunction) {

        this.compare = compareFunction;
    }
}

module.exports = Sorter;