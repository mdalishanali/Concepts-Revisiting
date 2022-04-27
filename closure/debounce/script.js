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

function searchMovie() {
  console.log("Making fetch request");
}

/**Debouncing is a programming practice used to ensure that time-consuming
 *  tasks do not fire so often, that it stalls the performance of the web page.
 *  In other words, it limits the rate at which a function gets invoked. */
