function createSortedList() {
  let list = [];
  return {
    add(element) {
      list.push(element);
      list.sort((a, b) => a - b);
    },
    remove(index) {
      if (index >= 0 && index < list.length) {
        list.splice(index, 1);
      }
    },
    get(index) {
      if (index >= 0 && index < list.length) {
        return list[index];
      }
    },
    size() {
      return list.length;
    },
  };
}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
