const auction = a => {
  var hargaAwal = 10000;
  var minute = 0;
  do {
    minute++;
    if (minute % 4 == 0) {
      hargaAwal += Math.ceil(hargaAwal * 0.1);
    } else {
      hargaAwal += Math.ceil(hargaAwal * 0.2);
    }
    if (hargaAwal >= 30000000) {
      return `the items were sold`;
    }
  } while (minute < a);
  return hargaAwal;
};
console.log(auction(2));
console.log(auction(50));
console.log(auction(49));
