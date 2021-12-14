
/**
 * Khối 1:
 * diemChuan
 * mon1
 * mon2
 * mon3
 * area(khu vực)
 * doiTuong
 * Khối 2:
 * b1: Lấy giá trị
 * b2: Kiểm tra có môn nào bị điểm không
 * b3: so sanh total(tổng điểm) > diemChuan
 * b4: Xuất kết quả và gán giá trị
 *Khối 3:
 *total và kết quả đậu hay rớt
*/


function tuyenSinh() {
  var diemChuan = Number(document.getElementById('inpScores').value);
  var mon1 = Number(document.getElementById('inpScores1').value);
  var mon2 = Number(document.getElementById('inpScores2').value);
  var mon3 = Number(document.getElementById('inpScores3').value);
  var area = Number(document.getElementById('area').value);
  var doiTuong = Number(document.getElementById('object').value);
  var text = document.getElementById("txtResult")

  var total = mon1 + mon2 + mon3 + area + doiTuong;
  if (diemChuan <= 0) {
    alert("vui lòng nhập điểm chuẩn")
  } else if (mon1 <= 0 || mon2 <= 0 || mon3 <= 0) {
    text.classList.add("alert-danger");
    document.getElementById('txtResult').innerHTML = ' Bạn đã rớt. do có môn bằng 0. tổng điểm : ' + total;
  } else {
    if (total >= diemChuan) {
      text.classList.remove("alert-danger");
      document.getElementById('txtResult').innerHTML = ' Bạn đã đậu. tổng điểm : ' + total;
    } else {
      text.classList.add("alert-danger");
      document.getElementById('txtResult').innerHTML = ' Bạn đã rớt. tổng điểm : ' + total;
    }
  }
}

/**
 * Khối 1:
 * giá tiền theo Kw
 * soKw
 * Khối 2:
 *  b1:Tạo bảng giá
 * b2: Lấy giá trị
 * b3: Tính tiền điện theo số kw
 * b4: Xuất kết quả và gán giá trị
 *Khối 3:
 *total
*/

const giaDau = 500;
 const gia50kw = 650;
 const gia100kw = 850;
 const gia150kw = 1100;
 const giaBinhThuong = 1300;



function tinhTien(soKw, giaDau, gia50, gia100, gia150, giaBinhThuong) {
  if (0 < soKw && soKw <= 50) {
    return soKw * giaDau;

  } else if (50 < soKw && soKw <= 100) {
    return (50 * giaDau) + (soKw - 50) * gia50;

  } else if (100 < soKw && soKw <= 200) {
    return (50 * giaDau) + (50 * gia50) + (soKw - 100) * gia100;

  } else if (200 < soKw && soKw <= 350) {
    return (50 * giaDau) + (50 * gia50) + (100 * gia100) + (soKw - 200) * gia150;

  } else if (soKw > 350) {
    return (50 * giaDau) + (50 * gia50) + (100 * gia100) + (150 * gia150) + (soKw - 350) * giaBinhThuong;

  } else 
    alert('Vui long nhập lại số KW');
    return 0;
  
}




function tienDien(){
  var name = document.getElementById('inpname').value;
  var soKw = Number(document.getElementById('inpKw').value);

   var total = tinhTien(soKw, giaDau, gia50kw, gia100kw, gia150kw, giaBinhThuong);
   var fomatTotal =  new Intl.NumberFormat("vn-VN").format(total);
  document.getElementById('txtTienDien').innerHTML = 'Họ và Tên: '+ name +'<br>'+ 'Tiền Điện: '+ fomatTotal;

}
document.getElementById('btntienDien').onclick = tienDien;