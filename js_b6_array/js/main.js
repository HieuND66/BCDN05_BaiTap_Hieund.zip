var numArray = [];

document.getElementById("btnSub").onclick = function () {
  var num = Number(document.getElementById("inpArray").value);
  numArray.push(num)
  // console.log(numArray);
  document.getElementById("txtArray").innerHTML = numArray

}

//Bài1
document.getElementById("btnSub1").onclick = function () {
  var tong = 0;
  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] >= 0) {
      tong += numArray[i]
    }
  }
  // console.log(tong);
  document.getElementById("txt1").innerHTML = tong
}

//Bài 2
document.getElementById("btnSub2").onclick = function () {
  var count = 0;
  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] >= 0 && numArray[i] != 0) {
      count++
    }
  }
  // console.log(count);
  document.getElementById("txt2").innerHTML = count
}

//Bài 3
document.getElementById("btnSub3").onclick = function () {
  var min = numArray[0];
  if (numArray.length > 0) {

    for (var i = 0; i < numArray.length; i++) {
      if (numArray[i] < min) {
        min = numArray[i]
      }
    }
  } else {
    min = " Mảng ko có phần tử"
  }
  document.getElementById("txt3").innerHTML = min
}
//Bài 4
document.getElementById("btnSub4").onclick = function () {
  var newArray = [];
  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] > 0) {
      newArray.push(numArray[i])
    }

  }
  var min = newArray[0];
  if (newArray.length > 0) {

    for (var i = 1; i < newArray.length; i++) {
      if (newArray[i] < min) {
        min = numArray[i]
      }
    }
  } else {
    min = "Không có số dương trong mảng"
  }

  // console.log(newArray.length);
  // console.log(newArray);
  document.getElementById("txt4").innerHTML = min
}

//Bài5
document.getElementById("btnSub5").onclick = function () {
  var soChan = -1;
  if (numArray.length > 0) {

    for (i = 0; i < numArray.length; i++) {
      if (numArray[i] % 2 == 0) {
        soChan = numArray[i];
      } else if (soChan == -1) {
        soChan = "Không có số chẵn nào trong mảng.";
      }
    }
  } else {
    soChan = 0
  }
  document.getElementById("txt5").innerHTML = "Số dương nhỏ nhất là: " + soChan;
}
//Bài 6
document.getElementById("btnSub6").onclick = function () {
  var newArray = [];
  for (var i = 0; i < numArray.length; i++) {
    newArray.push(numArray[i])
  }
  console.log(newArray);
  var num1 = document.getElementById("inp6_1").value;
  var num2 = document.getElementById("inp6_2").value;
  var temp = newArray[num1];
  newArray[num1] = newArray[num2];
  newArray[num2] = temp;

  console.log(newArray);
  document.getElementById("txt6").innerHTML = "Mảng sau khi đổi: " + newArray;

  console.log(numArray);
}

//Bài 7
document.getElementById("btnSub7").onclick = function () {
  var newArray = [];
  for (var i = 0; i < numArray.length; i++) {
    newArray.push(numArray[i])
  }
  for (var i = 0; i < newArray.length; i++) {
    for (var j = 0; j < newArray.length; j++) {
      if (newArray[j] > newArray[j + 1]) {
        var temp = newArray[j]
        newArray[j] = newArray[j + 1]
        newArray[j + 1] = temp

      }
    }
  }
  // console.log(numArray);
  // console.log(newArray);
  document.getElementById("txt7").innerHTML = "Mảng sau khi sắp xếp: " + newArray;
}

//Bài 8
document.getElementById("btnSub8").onclick = function () {
  // console.log(numArray.length);
  if(numArray.length > 0){

    for(i=0; i<numArray.length; i++) {
      var n = Math.sqrt(numArray[i]);
      var count = 0;
      for(j = 2; j <= n; j++) {
          if(numArray[i]%j == 0) {
              count++;
          }
      }
      if(count == 0 && numArray[i] > 1 && kiem_tra_snt(numArray[i]) == true) {
          document.getElementById("txt8").innerHTML = "Số nguyên tố đầu tiên: " + numArray[i];
          break;
      }else{
        document.getElementById("txt8").innerHTML = -1
      }
  }
  }else{
    document.getElementById("txt8").innerHTML = -1
  }
}

function kiem_tra_snt(n) {
  if (n < 2) {
    return false;
  } else {

    for (var i = 2; i < n - 1; i++) {
      if (n % i == 0) {
        return false;
        break;
      }
    }
  }
  return true
}


//Bài 9: 
var newArray = [];
document.getElementById("btnSub9_1").onclick = function() {
    var newNum = Number(document.getElementById("inp9_1").value);
    newArray.push(newNum);
    document.getElementById("txt9_1").innerHTML = newArray;
}
document.getElementById("btnSub9").onclick = function() {
    var count = 0;
    for(i = 0; i < newArray.length; i++) {
        if(Number.isInteger(newArray[i]) == true) {
            count++;
        }
    }
    document.getElementById("txt9_2").innerHTML = "Số nguyên trong mảng: " + count;
}

//Bài 10: 
document.getElementById("btnSub10").onclick = function() {
  var soAm = 0;
  var soDuong = 0;
  for(var i = 0; i<numArray.length; i++) {
      if(numArray[i] > 0) {
          soDuong++;
      } else if(numArray[i] < 0) {
          soAm++;
      }
  }
  if(soAm == soDuong) {
      document.getElementById("txt10").innerHTML = "Số âm = Số dương";
  } else if(soAm < soDuong) {
      document.getElementById("txt10").innerHTML = "Số âm < Số dương";
  } else {
      document.getElementById("txt10").innerHTML = "Số âm > Số dương";
  }

}