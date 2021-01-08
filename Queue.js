class Queue {
    constructor () {
        this.dataStore = []
    }
    enqueue (element) {
        this.dataStore.push(element)
    }
    dequeue () {
        this.dataStore.shift()
    }
    get front () {
        return this.dataStore[0]
    }
    get back () {
        return this.dataStore[this.dataStore.length - 1]
    }
    get empty () {
        if (this.dataStore.length === 0) {
            return true
        } else {
            return false
        }
    }
}
