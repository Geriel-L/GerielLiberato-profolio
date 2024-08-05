// console.log('hello world')

// var prompt = prompt('Whats your name?');

// console.log(prompt)

// if (8 > 9) {
//   console.log('yes 10 is greater than 9')
// } else {
//   console.log('This is false')
// }


var age = prompt('How old are you?');

if (age < 18 && typeof age === "string") {
  alert('You are a minor!')
} else if (age >= 18 && age <= 60) {
  alert('You are an adult!')
} else {
  alert('DAMN YOUR OLD ASF')
}