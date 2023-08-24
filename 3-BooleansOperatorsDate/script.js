const firstName = "John ";
const lastName = "Williams";
const country = "USA";
const city = "Dallas";
const age = 25;
const isMarried = false;
const year = 2027;

const age1 = 10;

console.log(typeof 10 === 10);
console.log(parseInt("9.8") == 10);

//Truthy Values
10;
("Hello!");
true;

//Falsy values
null;
("");
undefined;
NaN;

console.log(4 === "4");
console.log(4 == "4");
console.log(4 === 4);

console.log("jargon".length !== "phyton".length);
console.log(!(4 > 3 && 10 < 12));

console.log(!("dragon".includes("on") && "phyton".includes("on")));

const date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.toDateString().slice(0, 3));
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log();

var unixTimestamp = date.getTime();
console.log(unixTimestamp);
var secondsElapsed = Math.floor(unixTimestamp / 1000);
console.log("Seconds elapsed since January 1, 1970:", secondsElapsed);

const triangle = function (base, height) {
  return (base * height) / 2;
};

console.log(triangle(10, 20));

const perimeterTriangle = function (side1, side2, side3) {
  return side1 + side2 + side3;
};

console.log(perimeterTriangle(10, 10, 10));

const areaTriangle = function (length, width) {
  return length + width * 2;
};

console.log(areaTriangle(20, 10));

const areaCircle = function (r) {
  const pi = 3.14;
  const area = pi * r * r;
  const perimeter = 2 * pi * r;
  return console.log(area, perimeter);
};

areaCircle(1);

const slope = function (x1, x2, y1, y2) {
  return (y2 - y1) * (x2 - x1);
};

console.log(slope(2, 2, 6, 10));

const xy = function (x) {
  let y = x * x + 6 * x + 9;
  return y;
};

console.log(xy(-3));

const salary = function (hourWeek, hourPaid) {
  return hourWeek * hourPaid;
};
console.log(salary(40, 28));

const nameType = function (name) {
  if (name.length > 7) {
    return "Your name is long";
  }
  return "Your name is short";
};

console.log(nameType("Fazıl"));

const nameComp = function (fname, lname) {
  if (fname.length > lname.length) {
    return "Your first name is longer than your last name" + " " + fname;
  } else return "Your first name is shorter than your last name" + " " + fname;
};

console.log(nameComp("Mahmut", "Abdulazizoğulları"));

const ageLimited = function (age) {
  return (100 - age) * 360 * 24 * 60;
};

console.log(ageLimited(24));

console.log(
  date.getFullYear() +
    "-" +
    date.getMonth().toString().padStart(2, "0") +
    "-" +
    date.getDay().toString().padStart(2, "0") +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes()
);

const nnn = "9".padStart(2, "0");
console.log(nnn);
