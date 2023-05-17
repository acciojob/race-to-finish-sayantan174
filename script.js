let promise1 = new Promise(resolve=>{
	setTimeout(()=>{
		resolve();
	},1000)
});
let promise2 = new Promise(resolve=>{
	setTimeout(()=>{
		resolve();
	},2000)
});
let promise3 = new Promise(resolve=>{
	setTimeout(()=>{
		resolve();
	},3000)
});
let promise4 = new Promise(resolve=>{
	setTimeout(()=>{
		resolve();
	},4000)
});
let promise5 = new Promise(resolve=>{
	setTimeout(()=>{
		resolve();
	},5000)
});
window.promises = [promise1,promise2,promise3,promise4,promise5];
const output = document.getElementById("output");
output.innerText=Promise.any(promises);

// Do not change the code above this
// add your promises to the array `promises`
