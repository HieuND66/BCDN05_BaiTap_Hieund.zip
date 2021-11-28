
// Bài 1
/**
 * Khối 1:
 * price
 * priceInput
 * 
 * Khối 2:
 * B1 : Khai báo và gán giá trị
 * var price 
 * var priceInput 
 * B2: Lấy priceInput nhân vơi price
 * var  priceVND = priceInput * price
 * Khối 3:
 * priceVND
 */

// B1
var price = 23500;
var priceInput  = 2;
// B2
var  priceVND = priceInput * price;
console.log("Bài 1:");
console.log('Số tiền sau khi quy đổi: ' +new Intl.NumberFormat('vn-VN', { maximumSignificantDigits: 3 }).format(priceVND) + 'VND');
 

// Bài 2:
/**
 * Khối 1:
 * chieuDai
 * chieuRong
 * 
 * Khối 2:
 * B1 : Khai báo và gán giá trị
 * var chieuDai 
 * var chieuRong 
 * B2: Tính diện tích
 * var  dienTich = chieuDai * chieuRong
 * B3: Tính chu vi
 * var chuVi = (chieuDai + chieuRong) * 2
 * Khối 3:
 * dienTich
 * chuVi
 */

// B1
var chieuDai = 3;
var chieuRong = 4;
// B2
var dienTich = chieuDai * chieuRong;
var chuVi = (chieuDai + chieuRong) * 2;

console.log( '\n' +'Bài 2: ' + '\n' +'Diện tích = ' + dienTich  + '\n' + 'Chu vi = ' + chuVi);



/**
 * Khối 1:
 * num(số nguyên dương có 2 chữ số)
 * 
 * Khối 2:
 * B1: Tạo biến và gán giá trì
 * ten 
 * unit
 * B2: Lấy hàng chục và đơn vị
 * ten = Math.floor(phandu/10)
 * unit = phandu%10
 * Khối 3: Ouput
 * tổng các chữ số cúa số num
 */


// B2
var num = 44;

var ten = Math.floor(num/10)
var unit = num%10
var tong = ten + unit

console.log('\n' +'Bài 3: ' + '\n' +'Tổng = ' + tong);
