function ToggleKthBit(n,k) {
    let i= 1;
    i=i<<k;
    let res = i^n;
    console.log(res);
}
ToggleKthBit(27,4)
/**
 * 27 ==  11011
 * -------10000
 * -------01011xor opera
 */