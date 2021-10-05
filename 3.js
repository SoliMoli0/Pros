//we start from 0 to 10

for (let i = 0; i <= 10 ; i++) {
  
  const invokeAfterDelay1 = new Promise (function(resolve, reject) {
    
      setTimeout(() => resolve(Math.random()), 1000);
  });

  const invokeAfterDelay2 = new Promise (function(resolve, reject) {
      
      setTimeout(() => resolve(Math.random()), 1000);
  });

  const produceRandomAfterDelay = Promise.all([invokeAfterDelay1, invokeAfterDelay2]).then ((values) => {
  
    let result = (previousValue, currentValue) => previousValue + currentValue;
  
    console.log(values.reduce(result));
  });
}