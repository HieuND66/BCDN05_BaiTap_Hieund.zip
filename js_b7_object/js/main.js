var dsnv = new DanhSachNhanVien()
var validation = new Validation();

getLocalStorage()

// Hàm rút gọn 
function getELE(id) {
  return document.getElementById(id)
}

function themNhanVien() {
  var tk = getELE("tknv").value;
  var ten = getELE("name").value;
  var email = getELE("email").value;
  var pass = getELE("password").value;
  var ngay = getELE("datepicker").value;
  var luong = getELE("luongCB").value;
  var chuc = getELE("chucvu").value;
  var gio = getELE("gioLam").value;
  // console.log(tk, ten, email, pass, ngay, luong, chuc, gio);
  // Validation
  var isValid = true;
  // check tài khoản
  isValid &= validation.checkEmpty(tk, "tbTKNV", "Tài khoản Không được để trống") && validation.checkID(tk, "tbTKNV", "Tài khoản Không được trùng nhau", dsnv.mangNV)
  // check Tên
  isValid &= validation.checkEmpty(ten, "tbTen","Tên Không được để trống") && validation.checkName(ten, "tbTen", "Tên chứa ký tự không hợp lệ")
  //  check email
  isValid &= validation.checkEmpty(email, "tbEmail","Email Không được để trống") && validation.checkEmail(email, "tbEmail", "email không đúng định dạng");
  // check password
  isValid &= validation.checkEmpty(pass, "tbMatKhau","Mật khẩu Không được để trống") && validation.checkPass(pass, "tbMatKhau", "Mật khẩu có 6-10, 1 ký tự số, 1 ký tự chữ, 1 ký tự đặc biệt, 1 ký tự in hoa");
  // check ngày làm
  isValid &= validation.checkEmpty(ngay, "tbNgay","Ngày làm Không được để trống") && validation.checkFormatDay(ngay, "tbNgay","Ngày làm phải đúng định dạng dd/mm/yyyy");
  // check lương cơ bản
  isValid &= validation.checkEmpty(luong, "tbLuongCB","Lương cơ bản Không được để trống") && validation.checkLuong(luong, "tbLuongCB","Lương cơ bản phải từ 1.000.000 đến 20.000.000");
  // Chức vụ
  isValid &= validation.checkSelect("chucvu", "tbChucVu", "Bạn chưa chọn chức vụ")
  // Check giờ làm
  isValid &= validation.checkEmpty(gio, "tbGiolam","Giờ làm Không được để trống") &&  validation.checkTime(gio, "tbGiolam","Giờ làm phải từ 80 giờ đến 300 giờ");
  // Nếu isValid true thì lưu
  if (isValid) {
    // Tạo thể hiện
    var nv = new NhanVien(tk, ten, email, pass, ngay, Number(luong), chuc, Number(gio))
    nv.tinhTongLuong()
    nv.xepLoai()
    dsnv.them(nv)
    //  console.log(dsnv.mangNV);
    hienThiTable(dsnv.mangNV)
    // console.log(ngay);
    setLocalStorage(dsnv.mangNV)

  }

}
//Hiển thị table
function hienThiTable(mang) {
  var content = "";
  mang.map(function (nv, index) {
    var tr = `<tr>
    <td>${nv.taiKhoanNV}</td>
    <td>${nv.tenNV}</td>
    <td>${nv.email}</td>
    <td>${nv.ngaySinh}</td>
    <td>${nv.chucVu}</td>
    <td>${nv.tongLuong}</td>
    <td>${nv.loai}</td>
    <td class="td-set">
    <button class = "btn btn-danger btn-set" onclick="xoaNV('${nv.taiKhoanNV}')">Xóa</button>
    <button class = "btn btn-info" onclick="xemNV('${nv.taiKhoanNV}')" data-toggle="modal" data-target="#myModal" >Xem</button>
   </td>
    </tr>`
    content += tr;
  })
  getELE("tableDanhSach").innerHTML = content
}
// data-toggle="modal"
//     data-target="#myModal"

// set LocalStorage

function setLocalStorage(mang) {
  localStorage.setItem("DSNV", JSON.stringify(mang))
}
// get LocalStorage
function getLocalStorage() {
  if (localStorage.getItem("DSNV") != null) {
    dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"))
    hienThiTable(dsnv.mangNV)
  }
}
// xóa nhân viên
function xoaNV(id) {
  console.log(id);
  dsnv.xoa(id)
  setLocalStorage(dsnv.mangNV)
  hienThiTable(dsnv.mangNV)
}

// Xem nhân viên

function xemNV(id) {
  getELE("btnThemNV").disabled = true
  var viTri = dsnv.timViTri(id)
  console.log(viTri);
  if (viTri != -1) {
    // console.log(dsnv.mangNV[viTri]);
    var nv = dsnv.mangNV[viTri];
    // console.log(nv);
    getELE("tknv").value = nv.taiKhoanNV;
    getELE("tknv").disabled = true;
    getELE("name").value = nv.tenNV;
    getELE("email").value = nv.email;
    getELE("password").value = nv.matKhau;
    getELE("datepicker").value = nv.ngaySinh;
    getELE("luongCB").value = nv.luong;
    getELE("chucvu").value = nv.chucVu;
    getELE("gioLam").value = nv.gioLam;
  } else {
    console.log("Ko thay");
  }
}

// Cập nhật NV
function capNhatNV() {
  tk = getELE("tknv").value;
  ten = getELE("name").value;
  email = getELE("email").value;
  pass = getELE("password").value;
  ngay = getELE("datepicker").value;
  luong = getELE("luongCB").value;
  chuc = getELE("chucvu").value;
  gio = getELE("gioLam").value;
   // Validation
   var isValid = true;
   // check tài khoản
   // check Tên
   isValid &= validation.checkEmpty(ten, "tbTen","Tên Không được để trống") && validation.checkName(ten, "tbTen", "Tên chứa ký tự không hợp lệ")
   //  check email
   isValid &= validation.checkEmpty(email, "tbEmail","Email Không được để trống") && validation.checkEmail(email, "tbEmail", "email không đúng định dạng");
   // check password
   isValid &= validation.checkEmpty(pass, "tbMatKhau","Mật khẩu Không được để trống") && validation.checkPass(pass, "tbMatKhau", "Mật khẩu có 6-10, 1 ký tự số, 1 ký tự chữ, 1 ký tự đặc biệt, 1 ký tự in hoa");
   // check ngày làm
   isValid &= validation.checkEmpty(ngay, "tbNgay","Ngày làm Không được để trống") && validation.checkFormatDay(ngay, "tbNgay","Ngày làm phải đúng định dạng dd/mm/yyyy");
   // check lương cơ bản
   isValid &= validation.checkEmpty(luong, "tbLuongCB","Lương cơ bản Không được để trống") && validation.checkLuong(luong, "tbLuongCB","Lương cơ bản phải từ 1.000.000 đến 20.000.000");
   // Chức vụ
   isValid &= validation.checkSelect("chucvu", "tbChucVu", "Bạn chưa chọn khóa học")
   // Check giờ làm
   isValid &= validation.checkEmpty(gio, "tbGiolam","Giờ làm Không được để trống") &&  validation.checkTime(gio, "tbGiolam","Giờ làm phải từ 80 giờ đến 300 giờ");
   // Nếu isValid true thì lưu
   if (isValid) {

     var nv = new NhanVien(tk, ten, email, pass, ngay, Number(luong), chuc, Number(gio));
     nv.tinhTongLuong()
     nv.xepLoai()
     dsnv.capNhat(nv)
     //  console.log(dsnv.mangNV);
     setLocalStorage(dsnv.mangNV)
     hienThiTable(dsnv.mangNV)
    //  getELE("btnCapNhat").setAttribute("data-dismiss", "modal");
   }

}


function resetForm() {
  getELE("formQLNV").reset()
  getELE("btnThemNV").disabled = false
  getELE("tknv").disabled = false;

}
function searchXepLoai(){
  var keyword = getELE("searchName").value.trim();
  mangTK = [];
  mangTK =  dsnv.searchLoai(keyword);
  hienThiTable(mangTK)
}
getELE("btnTimNV").addEventListener("click", searchXepLoai)
getELE("searchName").addEventListener("keyup", searchXepLoai);