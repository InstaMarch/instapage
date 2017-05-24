// Here is an example of the use of Object.keys() with forEach()

let obj = {
	ref1: 1,
	ref2: 2,
	ref3: 3
};

Object.keys(obj);

// returns an arry of the keys as strings
// ["ref1", "ref2", "ref3"]

Object.keys(obj).forEach(function(ref) {
	console.log(ref);
	console.log(obj[ref])  
});

//ref1
//1
//ref2
//2
//ref3
//3