function average(...numbers) {
  
  return numbers.reduce((previous, current) => {
    return previous + current / numbers.length;
  });
}

console.log(average(1, 4, 9, 16, 20));