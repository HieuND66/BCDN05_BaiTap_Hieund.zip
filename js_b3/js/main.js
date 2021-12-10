/**
 *  bai 1 Xuất 3 số theo thứ tự tăng dần
 * 
 * khối 1: input
 * num1
 * num2
 * num3
 * 
 * khối 2:
  * B1: Tạo hàm
 * B2: Lấy giá trị 
 * B3: so sánh giá trị 
 * :B4: sắp xếp kết quả so sánh
 * B5: gắn hàm vào onclick
 * khôi 3:
 * xuất kết quả
 */

 function sortNumber(){
  num1 = Number(document.getElementById('inpNum1').value);
  num2 = Number(document.getElementById('inpNum2').value);
  num3 = Number(document.getElementById('inpNum3').value);
  
  if(num1 > num2 && num2 > num3){
    document.getElementById('txtMax').innerHTML = num3 + ' < ' + num2 + ' < ' + num1;
  }else if(num1 > num2 && num1 > num3){
    document.getElementById('txtMax').innerHTML = num2 + ' < ' + num3 + ' < ' + num1;
  }else if(num1 > num2 && num3 > num1){
    document.getElementById('txtMax').innerHTML = num2 + ' < ' + num1 + ' < ' + num3;
  }else if(num3 < num1 && num2 > num3 ){
    document.getElementById('txtMax').innerHTML  = num3 + ' < ' + num1 + ' < ' + num2;
  }else if(num2 > num3 && num3 > num1){
    document.getElementById('txtMax').innerHTML = num1 + ' < ' + num3 + ' < ' + num2;
  }else
    document.getElementById('txtMax').innerHTML = num1 + ' < ' + num2 + ' < ' + num3;
  
 }


/**
 * Bài 2:
* bài 2 Chào hỏi
* Mô hình 3 khối
* 
* khối 1: 
* khai bao biến chung cho các giá trị
* 
* khối 2:
* B1: Tạo hàm
* B2: Lấy giá trị 
* B3: so sánh giá trị 
* B4: gắn hàm vào onclick
* khối 3:
* xuất lời chào
*/

function sendMessage(){
  var name = document.getElementById('select').value;

  if (name == 'B') {
      document.getElementById('hello').innerHTML = 'Xin Chào Bố';
  }else if (name == 'M') {
      document.getElementById('hello').innerHTML = 'Xin Chào MẸ';
  }else if (name == 'AT') {
      document.getElementById('hello').innerHTML = 'Xin Chào Anh Trai';
  }else {
      document.getElementById('hello').innerHTML = 'Xin Chào Em Gái';
  };
  
};


/**
 * Bài 3
* Bài 3: Đếm Số Chẵn Lẻ
* mô hình 3 khối 
* 
* khối 1: 
* khai báo biến gắn giá trị;
* khối 2:
* B1: Tạo hàm
* B2: Lấy giá trị 
* B3: xác định số chắn lẻ (%2 = 0)
*  B4: gắn hàm vào onclick
* khối 3: 
* xuất số lượng số chẵn, lẻ
*/
  function timChanLe() {
      num1 = Number(document.getElementById('soThu1').value) % 2 ;
      num2 = Number(document.getElementById('soThu2').value) % 2;
      num3 = Number(document.getElementById('soThu3').value) % 2;
      soChan = 0;
      soLe   = 0;

      if (num1 == 0 ) {
          soChan++;
      }else{
          soLe++
      }
      if (num2 == 0 ) {
          soChan++;
      }else{
          soLe++
      }
      if (num3 == 0 ) {
          soChan++;
      }else{
          soLe++
      }
      document.getElementById('soLuongChanLe').
      innerHTML = 'có ' + soChan +' số chẵn, và '+soLe +' số lẻ'; 
  }

/**
 * Bài 4
 * Đoán hình tam giác
 * 
 * Mô hình khối 
 * khối 1 
 *    khai báo 3 cạnh tam giác.
 * 
 * khối 2
 *    so sánh 3 cạnh tam giác.
 *    xác định loại tam giác.
 * 
 * 
 * khối 3
 * xuất loại tam giác.
 */

function timTamGiac() {
    a = Number(document.getElementById('canh1').value);
    b = Number(document.getElementById('canh2').value);
    c = Number(document.getElementById('canh3').value);

    if (a == b && a == c){
        document.getElementById('txtText').innerHTML = 'Hình Tam Giác Đều';
    }else if(a == b || a == c || b == c){
      document.getElementById('txtText').innerHTML = 'Hình Tam Giác cân';
    } 
    else if (a*a == b*b + c*c || b*b == a*a + c*c ||c*c == a*a + b*b ){
      document.getElementById('txtText').innerHTML = 'Hình Tam Giác Vuông';
    }else {
      document.getElementById('txtText').innerHTML = 'Tam giác khác';
    }
}