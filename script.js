// 1. How to compare two JSON have the same properties without order?


let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

let str1 = JSON.stringify(obj1);
let str2 = JSON.stringify(obj2);

let sortedStr1 = str1.split('').sort().join('');
let sortedStr2 = str2.split('').sort().join('');

if (sortedStr1 === sortedStr2) {
  console.log("The JSON objects have the same properties without considering order.");
} else {
  console.log("The JSON objects do not have the same properties without considering order.");
}

// 2. Use the rest countries' API URL -> https://restcountries.com/v3.1/all and display all the country flags in the console
fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      console.log(country.flags.svg);
    });
  })
  .catch(error => {
    console.log("An error occurred while fetching the data:", error);
  });


// 3. Use the same rest countries and print all countries names, regions, sub-region and populations
fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      console.log("Name:", country.name.common);
      console.log("Region:", country.region);
      console.log("Subregion:", country.subregion);
      console.log("Population:", country.population);
      console.log("---------------------------------------");
    });
  })
  .catch(error => {
    console.log("An error occurred while fetching the data:", error);
  });



