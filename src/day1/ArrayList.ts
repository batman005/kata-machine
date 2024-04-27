// This class represents a generic ArrayList data structure in TypeScript.
export default class ArrayList<T> {
    // The items array holds the elements of the ArrayList.
    private items: T[];
    // The length property tracks the number of elements in the ArrayList.
    public length: number;

    // The constructor initializes an empty ArrayList.
    constructor() {
        this.items = [];
        this.length = 0;
    }

    // The prepend method adds an item to the beginning of the ArrayList.
    prepend(item: T): void {
        this.items.unshift(item);
        this.length++;
    }

    // The insertAt method inserts an item at a specific index in the ArrayList.
    insertAt(item: T, idx: number): void {
        this.items.splice(idx, 0, item);
        this.length++;
    }

    // The append method adds an item to the end of the ArrayList.
    append(item: T): void {
        this.items.push(item);
        this.length++;
    }

    // The remove method removes the first occurrence of an item from the ArrayList.
    // It returns the removed item if it was found, or undefined otherwise.
    remove(item: T): T | undefined {
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.length--;
            return this.items.splice(index, 1)[0];
        }
        return undefined;
    }

    // The get method returns the item at a specific index in the ArrayList.
    // It returns undefined if the index is out of bounds.
    get(idx: number): T | undefined {
        return this.items[idx];
    }

    // The removeAt method removes the item at a specific index in the ArrayList.
    // It returns the removed item if the index was valid, or undefined otherwise.
    removeAt(idx: number): T | undefined {
        if (idx > -1 && idx < this.length) {
            this.length--;
            return this.items.splice(idx, 1)[0];
        }
        return undefined;
    }
}