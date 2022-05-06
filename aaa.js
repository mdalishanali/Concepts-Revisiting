function throttling(func, delay) {
  let flag = true;
  return function () {
    if (flag) {
      func();
      flag = false;
      setTimeout(function () {
        flag = true;
      }, delay);
    }
  };
}
throttling