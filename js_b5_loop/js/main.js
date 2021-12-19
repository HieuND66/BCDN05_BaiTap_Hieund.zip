document.getElementById("btnBai1").onclick = function () {
  var soChan = '';
  var soLe = '';
  for (var i = 0; i < 100; i++)
    if (i % 2 == 0) {
      soChan += ', ' + i;

    } else {
      soLe += i + ', ';

    }
  document.getElementById("txtBai1_soChan").innerHTML = 'Số Chẵn: ' + soChan;
  document.getElementById("txtBai1_soLe").innerHTML = 'Số lẽ: ' + soLe;
}


document.getElementById("btnBai1_while").onclick = function () {
  var soChan = '';
  var soLe = '';
  var count = 0
  while (count < 100) {
    if (count % 2 == 0) {
      soChan += ', ' + count;

    } else {
      soLe += count + ', ';

    }
    count++;
  }
  console.log(soChan);
  console.log(soLe);
  document.getElementById("txtBai1_soChan_while").innerHTML = 'Số Chẵn: ' + soChan;
  document.getElementById("txtBai1_soLe_while").innerHTML = 'Số lẽ: ' + soLe;
}

document.getElementById("btnBai2").onclick = function () {

  var count = 0;
  for (var i = 0; i < 1000; i++) {

    if (i % 3 == 0) {
      count++
    }
  }
  document.getElementById("txtBai2").innerHTML = 'Số chia hết cho 3 nhỏ hơn 1000: ' + count + " số";

}

document.getElementById("btnBai2_while").onclick = function () {

  var count = 0;
  var n = 0
  while (n < 1000) {
    if (n % 3 == 0) {
      count++
    }
    n++
  }
  document.getElementById("txtBai2_while").innerHTML = 'Số chia hết cho 3 nhỏ hơn 1000: ' + count + " số";

}

document.getElementById("btnBai3").onclick = function () {

  // var sum;
  var n = 0
  for (var sum = 0; sum < 10000;) {
    n++;
    sum += n;
    // if(sum > 10000){
    //   break;
    // }
  }
  document.getElementById("txtBai3").innerHTML = 'Số nguyên dương nhỏ nhất: ' + n;

}
document.getElementById("btnBai3_while").onclick = function () {

  var count = 0;
  var n = 0
  while (count < 10000) {
    n++;
    count += n
  }
  document.getElementById("txtBai3_while").innerHTML = 'Số nguyên dương nhỏ nhất: ' + n;

}



document.getElementById("btnBai4").onclick = function () {
  var x = Number(document.getElementById("x").value);
  var n = Number(document.getElementById("n").value);

  var sum = 0

  for (var i = 1; i <= n; i++) {


    sum += Math.pow(x, i)


  }

  document.getElementById("txtBai4").innerHTML = 'Tổng: ' + sum;

}

document.getElementById("btnBai5").onclick = function () {
  var x = Number(document.getElementById("x_b5").value);
  var f = 1
  for (var i = 1; i <= x; i++) {
    f *= i

  }
  document.getElementById("txtBai5").innerHTML = 'Giai thừa: ' + f;
}

document.getElementById("btnBai6").onclick = function () {
  // var content = document.getElementById("content");
  var content = ''

  for (var i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      content += '<div class="alert alert-danger" role="alert">Div chẵn</div>'
    } else {
      content += '<div class="alert alert-success" role="alert">Div lẻ</div>'
    }
  }

  document.getElementById("content").innerHTML = content

}



document.getElementById("btnBai7").onclick = function () {
  var num = Number(document.getElementById("x_b7").value);
  var content = "";
  for (var i = 1; i <= num; i++) {
    var isPrime = kiem_tra_snt(i);
    if (isPrime) {
      content += " " + i
    }
  }
  document.getElementById("txtBai7").innerHTML = '👉 ' + content;
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
