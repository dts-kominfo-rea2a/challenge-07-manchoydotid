const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    //Gabung 2 array menjadi 1
    const arrFilmIXX = await promiseTheaterIXX();
    const arrFilmVGC = await promiseTheaterVGC();
    const arrFilm = arrFilmIXX.concat(arrFilmVGC);

    //Mengelompokkan hasil film sesuai emosi
    const arrFilmEmosi = arrFilm.filter((element) => element.hasil === emosi);
    console.log(arrFilmEmosi);

    //Hitung jumlah film sesuai emosi
    return arrFilmEmosi.length;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  promiseOutput,
};
