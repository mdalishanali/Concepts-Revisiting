function setKthBit(n,k) {
    let i=1;
    i=i<<k;
    let res = n|i;
    console.log(res);
}
setKthBit(27,2)