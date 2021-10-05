function invokeAfterDelay(ms) {
    
  return new Promise(resolve => setTimeout(resolve(Math.random()), ms));
}

invokeAfterDelay(3000).then((r) => console.log(r));