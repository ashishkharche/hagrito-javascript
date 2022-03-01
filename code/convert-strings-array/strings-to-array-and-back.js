const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";

const cities = data.split(",");
console.log(cities);
console.log(typeof cities);

const commaSeparated = cities.join(",");
console.log(commaSeparated);
console.log(typeof commaSeparated);

const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
console.log(dogNames.toString()); // Rocket,Flash,Bella,Slugger
console.log(typeof dogNames.toString());

