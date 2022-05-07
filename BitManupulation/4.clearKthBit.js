function clearKthBit(n,k) {
    let i=1;
    i=i<<k;//shifting 3 times become 8 ----1000 
    //console.log(i);
    let j = ~i;  //bitwise NOT (one's complement) (unary)
    let res = j&n;

    console.log(i,j,res);

}
//make kth bit zero
clearKthBit(27,3)

/**
 * 1000
 * 
 * 11011  ---27
 * 11101 -----this one is complement op on   you know shift i=== > j=~i
 * -------
 * 11001
 */