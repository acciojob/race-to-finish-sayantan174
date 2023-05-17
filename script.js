window.promises = [];

for (let i = 0; i < 5; i++) {
  const promise = new Promise((resolve) => {
    const randomTime = Math.floor(Math.random() * 5) + 1;
    setTimeout(() => {
      resolve(`Promise ${i + 1} resolved after ${randomTime} second(s).`);
    }, randomTime * 1000);
  });
  
  promises.push(promise);
}

Promise.any(promises)
  .then((result) => {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = result;
  })
  .catch((error) => {
    console.error('Error:', error);
  });




// Do not change the code above this
// add your promises to the array `promises`
