function DanhSachNhanVien() {
  this.mangNV = [];
  //Phương thức
  this.them = function (nv) {
    this.mangNV.push(nv);
  }

  this.timViTri = function (id) {
    var viTri = -1
    this.mangNV.map(function (nv, index) {
      if (nv.taiKhoanNV == id) {
        viTri = index
      }
    })
    return viTri
  }

  this.xoa = function (id) {
    var viTri = this.timViTri(id);
    if (viTri != -1) {
      this.mangNV.splice(viTri, 1)
    } else {
      console.log("kot thay");
    }
  }

  this.capNhat = function (nv) {
    var viTri = this.timViTri(nv.taiKhoanNV)
    if (viTri != -1) {
      this.mangNV[viTri] = nv
    } else {
      console.log("Ko thay nv de cap nhat");
    }
  }
  this.searchLoai = function (keyword) {
    var mangTK = [];
    var keywordLower = keyword.toLowerCase();
    this.mangNV.map(function (nv) {
      var loaiLower = nv.loai.toLowerCase();
      var indexLoai = loaiLower.indexOf(keywordLower);
      if (indexLoai >= 0) {
        mangTK.push(nv)
      }
    });
    return mangTK;
  }
}