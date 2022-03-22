// Write a function

// tripledouble(num1,num2)
// which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

// If this isn't the case, return 0

// Examples
// tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
//                                           // num2 has straight double 99s

// tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

// tripledouble(12345, 12345) == 0

// tripledouble(666789, 12345667) == 1

function tripledouble(num1, num2) {
    num1 = ""+num1;
    num2 = ""+num2;
    for (var i = 0; i < 10; ++i) {
      if (num1.indexOf("" + i + i + i) != -1 && num2.indexOf("" + i + i) != -1) {
        return 1;
      }
    }
    
    return 0;
  }

  console.log(tripledouble(451999277,41177722899),1);
  console.log(tripledouble(1222345, 12345),0);
  console.log(tripledouble(12345, 12345),0);
  console.log(tripledouble(666789, 12345667),1);
  console.log(tripledouble(10560002, 100),1);
  console.log(tripledouble(1112, 122),0);