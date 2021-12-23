// how to create an object #1
const car = new Object();

// add property to existing object
car.merk = "BMW";
car.color = "red";
car.price = 10000;
console.log(car);

// how to create an object #2
const cup = {
	colors: ["yellow", "red"],
	weight: 10,
	height: 10,
	user: {
		name: "Udin",
		age: 19,
	},
};
console.log(cup);

// access specific data in object
console.log(cup.height);
