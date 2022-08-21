/* Mô hình:
Đầu vào:
- so_1 = 45

Xử lý:
- hangChuc = Math.floor(so_1 / 10);
- hangDV = so_1 % 10;
- tongSo = hangChuc + hangDV

Đầu ra:
- tongSo = ?
*/

// Đầu vào:
var so_1 = 45;

//Xử lý:
var hangChuc = Math.floor (so_1 / 10);
var hangDV = so_1 % 10;
var tongSo = hangChuc + hangDV;

//Đầu ra:
console.log("Tổng 2 ký số là: " + tongSo );
