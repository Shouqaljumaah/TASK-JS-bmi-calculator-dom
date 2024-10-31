function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  const covertHeight = height / 100;
  const bmi = weight / covertHeight ** 2;
  alert(`bmi ${bmi}`);

  if (bmi < 18.5) {
    alert("Underweight");
  } else if (bmi >= 18.25 && bmi < 25) {
    alert("Healthy Weight");
  } else if (bmi >= 25 && bmi < 30) {
    alert("Overweight");
  } else if (bmi >= 30) {
    alert("Obesity");
  }

  if (age >= 19 && age < 25 && bmi >= 19 && bmi < 25) {
    alert("Healthy");
  } else if (age >= 25 && age < 35 && bmi >= 20 && bmi < 26) {
    alert("Healthy");
  } else if (age >= 35 && age < 45 && bmi >= 21 && bmi < 27) {
    alert("Healthy");
  } else if (age >= 45 && age < 44 && bmi >= 22 && bmi < 28) {
    alert("Healthy");
  } else if (age >= 55 && age < 65 && bmi >= 23 && bmi < 29) {
    alert("Healthy");
  } else if (age >= 65 && bmi >= 24 && bmi < 30) {
    alert("Healthy");
  } else {
    alert("Not Healthy");
  }
}
