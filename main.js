
let list = [5, 9, 4, 1];
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
    }
  }
}

function print(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
}

print(list);