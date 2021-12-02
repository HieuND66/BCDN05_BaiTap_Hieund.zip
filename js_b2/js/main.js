
// Bài 1
/**
 * Khối 1:
 * price
 * priceInput
 * 
 * Khối 2:
 * B1: Tạo hàm
 * B2: Lấy giá trị 
 * B3: Lấy priceInput nhân vơi price
 * var  priceVND = priceInput * price
 * B4: điền kết quả cho thẻ thông báo
 * B5: gắn hàm vào onclick
 * Khối 3: Ouput
 * priceVND
 */

// B2
function changePrice(){
  var price = 23500;
  var priceInput = document.getElementById("input_1").value
  var priceVND =  priceInput * price;
  var priceVNDFormat = new Intl.NumberFormat('vn-VN', { maximumSignificantDigits: 3 }).format(priceVND) + 'VND'
  document.getElementById("content_output").innerHTML = priceVNDFormat
}


// Bài 2:
/**
 * Khối 1:
 * chieuDai
 * chieuRong
 * 
 * Khối 2:
 * B1: Tạo hàm
 * B2: Lấy giá trị 
 * B2: Tính diện tích
 * var  dienTich = chieuDai * chieuRong
 * B3: Tính chu vi
 * var chuVi = (chieuDai + chieuRong) * 2
 * B4: điền kết quả cho thẻ thông báo
 * B5: gắn hàm vào onclick
 * Khối 3: Ouput
 * dienTich
 * chuVi
 */

// B2
function getOutput(){
  var chieuDai = document.getElementById("input_dai").value;
  var chieuRong = document.getElementById("input_rong").value;
  var dienTich = chieuDai * chieuRong;
var chuVi = (parseInt(chieuDai) + parseInt(chieuRong)) *2 ;

document.getElementById("content_output-1").innerHTML = dienTich + "(m<span style=' vertical-align: super; font-size: 20px;'>2</span>)"
document.getElementById("content_output-2").innerHTML = chuVi + "(m)"
}





/**
 * Khối 1:
 * num(số nguyên dương có 2 chữ số)
 * 
 * Khối 2:
 * B1: Tạo hàm
 * B2: Lấy giá trị 
 * ten = Math.floor(phandu/10)
 * unit = phandu%10
 * B3: điền kết quả cho thẻ thông báo
 * B4: gắn hàm vào onclick
 * Khối 3: Ouput
 * tong
 */


// B2
function sum(){
  var num = document.getElementById("input_b3").value;
  var ten = Math.floor(num/10);
var unit = num%10;
var tong = ten + unit;
document.getElementById("content_output-3").innerHTML = tong 

}

