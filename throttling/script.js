// Write a program to throttle a button onClick elements, or a search bar
/**
 * Throttling or sometimes is also called throttle function is a practice used in
 *  websites. Throttling is used to call a function after every
 *  millisecond or a particular interval of time only the first click is executed immediately
 */

//example code
// throttling(getData,1000)
let flag;
function throttling(fn, delay) {
  flag = true;
  if (flag == true) {
    fn();
    flag == false;

    setTimeout(() => {
      flag == true;
    }, delay);
  }
}
let count = 0;
function getData() {
  console.log("Button clicked", count++);
}
//button.addEventListener("click",throttler(callback,delay))

/**What is throttling and Debouncing in JavaScript?
The major difference between debouncing and throttling is that
 ---debounce calls a function when a user hasn't carried out an event
  in a specific amount of time,
  -- while throttle calls a function at 
intervals of a specified amount of time while the user is carrying out an event. */
