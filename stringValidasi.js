// main.js

import * as validasi from "definetype"

const data = [
  {
    id: 1,
    gmail: "afdalna@gmail.com",
    telepon: "+628322",
  },
  {
    id: 2,
    gmail: "fais@gmail.com",
    telepon: "+628322",
  },
];

const chek = validasi.sv(data, "@gmail.com", "last", "gmail");

if (chek) {
  console.log("All have the suffix @gmail.com ");
} else {
  console.log("Some don't have the @gmail.com suffix");
}

const chek2 = validasi.sv(data, "+62", "first", "telepon");
if (chek2) {
  console.log("All have +62 in the first place");
} else {
  console.log("Some don't have +62 at first");
}
