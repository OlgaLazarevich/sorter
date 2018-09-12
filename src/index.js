class Sorter {

    constructor() {

        this.arr = [];

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

    bubbleSort(a) {

        for (let i = 0, len = a.length; i < len; i++) {

            for (let i = 1, len = a.length; i < len; i++) {

                let current = i,
                    prev = i - 1;

                if (a[prev] > a[current]) {

                    let copyPrev = a[prev];

                    a.splice(prev, 2, a[current]);

                    a.splice(current, 0, copyPrev);
                }
            }
        }
    }

    sort(indices) {

        let cut = [];

        for (let i = 0; i < indices.length; i++) {

            cut.push(this.arr[indices[i]]);
        }

        this.bubbleSort(cut);
        
        this.bubbleSort(indices);

        for (let i = 0; i < indices.length; i++) {

            this.arr[indices[i]] = cut[i];
        }
    }

    setComparator(compareFunction) {
        // your implementation
    }
}

module.exports = Sorter;