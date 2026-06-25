function afterTime(text, time) {
  setTimeout(function () {
    console.log(`${text}`);
  }, time);
}

afterTime("Hello", 3000);
