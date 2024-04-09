// main.js

import * as validasi from "definetype"

const email = "afdalna@gmail.com";
const password = "!Qs1abnk";

const chek = await validasi.form(
  { password },
  {
    password: {
      option: {
        item: ["Symbol", "Upper", "lower", "number", "notTrim"],
        require: ["a", "b", "n"],
        dont: ["c", "v", "m"],
        length: 8,
      },
    },
  }
);

if (chek.error) {
  console.log(chek.error);
} else {
  console.log(`Success with password ${password} and email ${email}`);
}
