/** @format */

// 30-misol //
// 30. Frame sonini hisoblash
function frameSoni(minut, frame) {
  return minut * 60 * frame;
}

// 31. Matn ko'rinishidagi matematik amalni hisoblash
function calc(str) {
  return eval(str);
}

// 32. Sonlardan biri 10 bo'lsa yoki yig'indisi 10 bo'lsa
function teng10(a, b) {
  return a === 10 || b === 10 || a + b === 10;
}

// 33. Benzining umumiy sarfini hisoblash
function litrMasofa(km) {
  let litr = km * 10;
  return litr < 100 ? 100 : litr;
}

// 34. Argument manfiy bo'lsa 0, aks holda o'zini qaytarish
function fun(x, y) {
  return x <= 0 ? 0 : x;
}

// 35. Ikkita argumentni massiv shaklida qaytarish
function arr(x, y) {
  return [x, y];
}

// 36. Matnlar uzunligi teng bo'lsa true
function tengStrings(str1, str2) {
  return str1.length === str2.length;
}

// 37. Matn bo'sh bo'lsa true
function boshStr(str) {
  return str === "";
}

// 38. Son 5 ga bo'linsa true
function bolinsin5(son) {
  return son % 5 === 0;
}

// 39. Son 100 ga bo'linsa true
function bolinsin100(son) {
  return son % 100 === 0;
}

// 40. Matn uzunligini qaytarish
function uzunlik(str) {
  return str.length;
}

// 41. x soni y ga bo'linsa true
function bolinsin(x, y) {
  return x % y === 0;
}

// 42. Stringni int turiga o'tkazish
function raqam(str) {
  return Number(str);
}

// 43. To'g'ri to'rtburchak yuzi
function tortYuzi(a, b) {
  if (a <= 0 || b <= 0) return -1;
  return a * b;
}

// 44. Familiya va Ismni birlashtirish
function ismFam(ism, familiya) {
  return familiya + ", " + ism;
}

// 45. Bug funksiyasi (sad days / good day)
function bug(x) {
  return x ? "sad days" : "it's a good day";
}

// 46. Massiv boshidan n ta elementni tushirib qoldirish
function tushirMassiv(arr, n) {
  return arr.slice(n);
}

// 47. Ovozlar farqini hisoblash
function ovozlar(ovozObj) {
  return ovozObj.upvotes - ovozObj.downvotes;
}

// 48. Sonni negativ ko'rinishga keltirish
function negativ(son) {
  return -Math.abs(son);
}

// 49. Massiv tartibini teskarisiga o'girish
function almash(arr) {
  return arr.reverse();
}

// 50. Kinoga kirish huquqini tekshirish
function kinogaKirish(yosh, otaOna) {
  return yosh >= 15 || otaOna;
}
