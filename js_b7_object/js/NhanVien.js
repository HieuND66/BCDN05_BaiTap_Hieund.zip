
function NhanVien(tk, ten, email, pass, ngay, luong, chuc, gio){
  this.taiKhoanNV = tk;
  this.tenNV = ten;
  this.email = email;
  this.matKhau = pass;
  this.ngaySinh = ngay;
  this.luong = luong;
  this.chucVu = chuc;
  this.gioLam = gio;
  this.tongLuong = 0;
  this.loai = '';

  //Phuong thuc
  this.tinhTongLuong = function(){
    if(this.chucVu == "Giám đốc"){
      this.tongLuong = this.luong*3;
    }else if(this.chucVu == "Trưởng phòng"){
      this.tongLuong = this.luong*2;
    }else{
      this.tongLuong = this.luong*1;
    }
  }
  this.xepLoai = function(){
    if(this.gioLam >= 192){
      this.loai = "Nhân viên xuất sắc"
    }else if(this.gioLam >= 179){
      this.loai = "Nhân viên giỏi"
    }else if(this.gioLam >= 160){
      this.loai = "Nhân viên khá"
    }else{
      this.loai = 'Nhân viên trung bình'
    }
  }

}


