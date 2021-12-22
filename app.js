const age = parseInt(prompt("How Old Are You?"));

function drinkAge(age) {
  if (isNaN(age) || age <= 0) {
    return "Plz Enter The Right Value";
  } else if (age < 18) {
    return "How Dare You?";
  } else if (age >= 18 && age < 50) {
    return "Enjoy Your Drink";
  } else {
    return "You Should Take Care Of Your Own Good";
  }
}

console.log(drinkAge(age));
