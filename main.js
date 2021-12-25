// array destructuring
const students = ["Udin", "Kosasih", "Jhon"];

const [student1, , student3] = students;
console.log(student1);
// console.log(student2);
console.log(student3);

// object destructuring
const user = {
	name: "Udin",
	age: 19,
	address: "Jakarta",
};

// alias
const { address: alamat, age: umur } = user;
// console.log(name);
// console.log(age);
console.log(alamat);
console.log(umur);

// function destructuring
function getUser() {
	return {
		name: "Udin",
		age: 19,
		address: "Jakarta",
	};
}

const { name, age: umur } = getUser();
// console.log(name, umur);

function getStudents() {
	return ["Udin", "Kosasih", "Jhon"];
}

const [student1, siswa2] = getStudents();
console.log(student1, siswa2);
