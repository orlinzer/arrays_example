
let list = [9, 5, 1, 7, 6, 2, 0, 8, 4, 3];
// list=[5, 9, 4, 1]; i=0, j=1 => list[i]=5; list[j]=9
// list=[5, 9, 4, 1]; i=0, j=2 => list[i]=5; list[j]=4
// list=[4, 9, 5, 1]; i=0, j=3 => list[i]=4; list[j]=1
// list=[1, 9, 5, 4]; i=1, j=2 => list[i]=9; list[j]=5
// list=[1, 5, 9, 4]; i=1, j=3 => list[i]=5; list[j]=4
// list=[1, 4, 9, 5]; i=2, j=3 => list[i]=9; list[j]=5
// list=[1, 4, 5, 9];

console.log(list);

function sort(list) {
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = i + 1; j < list.length; j++) {
      // TODO
      if (list[j] < list[i]) {
        let tmp = list[i];
        list[i] = list[j];
        list[j] = tmp;
      }
    }
  }
}

function print(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
}

// print(list);

sort(list);
console.log(list);
