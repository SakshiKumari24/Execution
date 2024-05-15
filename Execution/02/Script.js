try {
    console.log(multiplyNumbers(3, 4));
  } catch (error) {
    console.error("Error:", error.message);
  }
  const multiplyNumbers = function(a, b) {
    return a * b;
  };
  console.log(multiplyNumbers(3, 4));
  