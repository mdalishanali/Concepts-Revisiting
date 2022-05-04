


function find(){
  let count=0;
  function generate(subset, index, arr) {
    let ans = [];
    let K=2;
    //let count=0;
    if (index==arr.length) {
  
      if (subset.length != 0) {
          let evenCount = 0;
          for (let i = 0; i < subset.length; i++) {
              if (subset[i] % 2 == 0) {
                  evenCount++;
              }
          }
          if (evenCount >= K) {
            console.log(subset);
              count++;
          }
      }
      return;
    }
    generate(subset, index + 1, arr);
    subset.push(arr[index]);
    generate(subset, index + 1, arr);
    subset.pop();
    return;
  }
  let arr = [1,2,3,4];
  arr.sort((a, b) => a - b);
  let a = generate([], 0, arr);
  console.log(count);
}
find()

