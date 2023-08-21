const challenge = "30 Days Of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLocaleLowerCase());
console.log(challenge.substring(0, 2));
console.log(challenge.slice(3, 10));
console.log(challenge.includes("Script"));

const expArray = [0, 1, 2, "Haluk", true, "Tütüncü", 24];
console.log(expArray.slice(1, 4));
console.log(challenge.slice(0, 15));

const companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(","));

const aaa = challenge.replace("JavaScript", "Phyton");
console.log(aaa);
console.log(challenge.charAt(3));
console.log(challenge.charCodeAt("J"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
console.log(
  "You cannot end a sentence with because because because is a conjunction".indexOf(
    "because"
  )
);
console.log(
  "You cannot end a sentence with because because because is a conjunction".lastIndexOf(
    "because"
  )
);
console.log(
  "You cannot end a sentence with because because because is a conjunction".search(
    "because"
  )
);

console.log("   30 Days Of JavaScript ".trim());
console.log("30 Days Of JavaScript".startsWith(3));
console.log("30 Days Of JavaScript".endsWith("t"));
console.log("30 Days Of JavaScript".match("a"));
console.log("30 Days Of ".concat("Javascript"));
console.log(challenge.repeat(2));

//Exercise 2
console.log(
  "There is no exercise better for the heart than reaching down and lifting people up."
);

console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);

let num = "10";
num = 10;

console.log(typeof num);

let num2 = Number(parseFloat("9.8"));
console.log(Math.round(num2));

console.log("phyton".includes("on"));
console.log("jargon".includes("on"));
console.log("I hope this course is not full of jargon".includes("jargon"));

console.log(Math.floor(Math.random() * 51) + 50);

console.log(Math.floor(Math.random() * 255));

console.log("Javascript"[Math.floor(Math.random() * "Javascript".length)]);

console.log("1 1 1 1 1");
console.log("2 1 2 4 8");
console.log("3 1 3 9 27");
console.log("4 1 4 16 64");
console.log("5 1 5 25 125");

//

console.log(
  "Love is the best thing in this world. Some found their love and some are still looking for their love.".match(
    /love/gi
  ).length
);

console.log(
  "You cannot end a sentence with because because because is a conjunction".match(
    /because/g
  ).length
);

const sentenceLevel3 =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

console.log(sentenceLevel3.replace(/[^\w\s]/gi, ""));
