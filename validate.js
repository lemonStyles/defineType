// main.js

import * as validasi from "definetype"

const data = [
  {
    id: 1,
    name: "afdalna",
    umur: 20,
  },
  {
    id: 2,
    name: "fais",
    umur: 20,
  },
];

const chek = validasi.fwyn(data, {
  name: "fais",
  umur: 20,
});

if (chek) {
  console.log(chek.id);
} else {
  console.log("no");
}
