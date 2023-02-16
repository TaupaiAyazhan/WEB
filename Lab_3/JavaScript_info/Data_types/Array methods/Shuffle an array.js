function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  let arr = [1, 2, 3];
  shuffle(arr);
  alert(arr);




//   For instance, consider the code below. It runs shuffle 1000000 times and counts appearances of all possible results:
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  // counts of appearances for all possible permutations
  let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
  };
  
  for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
  }
  
  // show counts of all possible permutations
  for (let key in count) {
    alert(`${key}: ${count[key]}`);
  }


/*
  An example result (depends on JS engine):
123: 250706
132: 124425
213: 249618
231: 124880
312: 125148
321: 125223
*/