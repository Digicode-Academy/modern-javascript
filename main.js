console.log("hello world 2");

// var
// 1.tidak harus ada nilai initial
// 2. bisa di reassign
// 3. function scope dan global scope

// let
// 1. tidak harus ada nilai initial
// 2. bisa di reassign
// 3. block scope

// const
// 1. harus ada nilai initial
// 2. tidak bisa di reassign
// 3. block scope

const x = 1;

if (x === 1) {
	const x = 2;
	console.log(x, "<<<< pertama");
}

console.log(x, "<<<< kedua");
