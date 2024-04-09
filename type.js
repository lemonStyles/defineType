// main.js

import * as validasi from "definetype"

const nama = "addd";
const umur = 0;
const alamat = "sagoe";
const cod = true;

const result = validasi.Interface(
  { nama, umur, alamat, cod },
  {
    nama: validasi.string({ max: 10 }),
    umur: validasi.number({ min: 2 }),
    alamat: validasi.string(),
    cod: validasi.boolean(),
  }
);

if (result.error) {
  console.log(result.error);
} else {
  console.log(`
      nama ${result.nama}
      umur ${result.umur}
      alamat ${result.alamat}
      cod ${result.cod}
    `);
}
