class List {
    
    constructor(){
        this.listOfNumbers = [];
        this.size = this.sizeGetter()
    }

    add(element) {
        this.listOfNumbers.push(element);
        this.listOfNumbers.sort((a,b) => b-a)
        return this;
    }
    remove(index) {
        if (index < 0 || index >= this.listOfNumbers.length){
            return
        }
        this.listOfNumbers.splice(index, 1);
        return this
    }
    get(index) {
        if (index < 0 || index >= this.listOfNumbers.length){
            return
        }
        return this.listOfNumbers[index];
    }
    sizeGetter() {
        return this.listOfNumbers.length;
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);
