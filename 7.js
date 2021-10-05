function str(...code) {
  
  return code.reduce((previous, current) => {
    
    return previous != current ? true : false;
  });
}

console.log(str(9731, 9731));
console.log(str(9731, 9733));