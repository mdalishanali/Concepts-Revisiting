let waiting;
const debounceFn = (fn, delay) => {
  if (waiting) {
    /*if some one is alreADING WAITING SO AT THAT POINT WE HAVE TO CLAEAR THE INTERVAL*/
    clearTimeout(waiting);
  }
  waiting = setTimeout(() => {
    fn();
  }, delay);
};

let counter = 0;
function searchMovie() {
  console.log(`Making fetch request count...${counter++}`);
}
//debounceFn(searchMovie,500)
/**Debouncing is a programming practice used to ensure that time-consuming
 *  tasks do not fire so often, that it stalls the performance of the web page.
 *  In other words, it limits the rate at which a function gets invoked. */

/**
 * Closures
A closure is the combination of a function bundled together (enclosed) with 
references to its surrounding state (the lexical environment). In other words,
 a closure gives you access to an outer function's scope from an inner function. 
 In JavaScript, 
closures are created every time a function is created, at function creation time.
 */
