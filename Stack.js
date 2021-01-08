class Stack {
    constructor () {
        this.dataStore = []
    }
    push (element) {
        this.dataStore.push(element)
    }
    pop () {
        this.dataStore.pop()
    }
    get top () {
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
