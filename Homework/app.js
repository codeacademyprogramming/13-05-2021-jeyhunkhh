function numberToWord(number) {
  number = number.toString();
  
  if (number < 0 || number > 999999) {
    return "0 və 999999 aralığı göndərin";
  }

  let singleDigit = [
    "sıfır",
    "bir",
    "iki",
    "üç",
    "dörd",
    "beş",
    "altı",
    "yeddi",
    "səkkiz",
    "doqquz",
  ];
  let twoDigit = [
    "",
    "on",
    "iyirmi",
    "otuz",
    "qirx",
    "əlli",
    "altımış",
    "yetmiş",
    "səksən",
    "doxsan",
  ];
  let hundred = "yüz";
  let thousand = "min";
  let num = number;
  let str = "";

  for (let i = 0; i < number.length; i++) {
    // singleDigit
    if (num.length == 1) {
      str += singleDigit[num[0]] + " ";
    }
    // twoDigit
    else if (num.length == 2) {
      str += twoDigit[num[0]] + " ";
      if (num % 10 != 0) {
        num = num % 10;
        num = num.toString();
      } else {
        return str;
      }
    }
    // hundred
    else if (num.length == 3) {
      if (singleDigit[num[0]] != "bir") {
        str += singleDigit[num[0]] + " " + hundred + " ";
      } else {
        str += hundred + " ";
      }
      num = num % 100;
      if ((num % 100) - 10 < 0) {
        i++;
        if ((num % 100) - 0 == 0) {
          i++;
        }
      }
      num = num.toString();
    }
    // thousand
    else if (num.length == 4) {
      if (singleDigit[num[0]] != "bir") {
        str += singleDigit[num[0]] + " " + thousand + " ";
      } else {
        str += thousand + " ";
      }
      num = num % 1000;
      if ((num % 1000) - 100 < 0) {
        i++;
        if ((num % 1000) - 10 < 0) {
          i++;
          if ((num % 100) - 0 == 0) {
            i++;
          }
        }
      }
      num = num.toString();
    }
    // ten thousand
    else if (num.length == 5) {
      str += twoDigit[num[0]] + " ";
      num = num % 10000;
      num = num.toString();
      if ((num % 10000) - 1000 < 0) {
        str += thousand + " ";
        i++;
        if ((num % 1000) - 100 < 0) {
          i++;
          if ((num % 1000) - 10 < 0) {
            i++;
            if ((num % 100) - 0 == 0) {
              i++;
            }
          }
        }
      }
      if (num.length == 4) {
        if (singleDigit[num[0]] != "bir") {
          str += singleDigit[num[0]] + " " + thousand + " ";
        }
        num = num % 1000;
        if ((num % 1000) - 100 < 0) {
          i++;
          if ((num % 1000) - 10 < 0) {
            i++;
            if ((num % 100) - 0 == 0) {
              i++;
            }
          }
        }
        num = num.toString();
        i++;
      }
    }
    //hundred thousand
    else if (num.length == 6) {
      if (singleDigit[num[0]] != "bir") {
        str += singleDigit[num[0]] + " " + hundred + " ";
      } else {
        str += hundred + " ";
      }
      num = num % 100000;
      num = num.toString();
      if ((num % 100000) - 10000 < 0) {
        i++;
        if ((num % 10000) - 1000 < 0) {
          str += thousand + " ";
          i++;
          if ((num % 1000) - 100 < 0) {
            i++;
            if ((num % 1000) - 10 < 0) {
              i++;
              if ((num % 100) - 0 == 0) {
                i++;
              }
            }
          }
        }
      }
      if (num.length == 5) {
        str += twoDigit[num[0]] + " ";
        num = num % 10000;
        num = num.toString();
        if ((num % 10000) - 1000 < 0) {
          str += thousand + " ";
          i++;
          if ((num % 1000) - 100 < 0) {
            i++;
            if ((num % 1000) - 10 < 0) {
              i++;
              if ((num % 100) - 0 == 0) {
                i++;
              }
            }
          }
        }
        i++
        if (num.length == 4) {
          if (singleDigit[num[0]] != "bir") {
            str += singleDigit[num[0]] + " " + thousand + " ";
          }
          num = num % 1000;
          if ((num % 1000) - 100 < 0) {
            i++;
            if ((num % 1000) - 10 < 0) {
              i++;
              if ((num % 100) - 0 == 0) {
                i++;
              }
            }
          }
          num = num.toString();
          i++;
        }
      }
    }
  }
  return str;
}

exports.numberToWord = numberToWord
