function Validation(){
  this.checkEmpty = function(value, spanID, message){
    if(value.trim() != ""){
      document.getElementById(spanID).innerHTML = "";
      document.getElementById(spanID).style.display = "none"
      return true
    }else{
      document.getElementById(spanID).innerHTML =message;
      document.getElementById(spanID).style.display = "block"
      return false
    }
  }
  this.checkID = function (value, spanID, message, mangNV) {
    var isExist = false;
    isExist = mangNV.some(function (nv) {
      return nv.taiKhoanNV === value.trim();
    });
    // console.log(isExist);
    if (isExist) {
      document.getElementById(spanID).innerHTML = message;
      document.getElementById(spanID).style.display = ' block';
      return false;
    }
    document.getElementById(spanID).innerHTML = "";
    document.getElementById(spanID).style.display = 'none';
    return true;
  }
  this.checkName = function (value, spanID, message) {
    var patternString = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$";
    var pattern = new RegExp(patternString);


    if (pattern.test(value)) {
      // console.log(letters.test(value));
      document.getElementById(spanID).innerHTML = "";
      document.getElementById(spanID).style.display = 'none';
      return true;
    }
    // console.log(pattern.test(value));
    document.getElementById(spanID).innerHTML = message;
    document.getElementById(spanID).style.display = ' block';
    return false;

  }
  this.checkEmail = function(value, spanID, message){
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(value.match(pattern)){
      document.getElementById(spanID).innerHTML = "";
      document.getElementById(spanID).style.display = 'none';
      return true;
    }else{
      document.getElementById(spanID).innerHTML = message;
      document.getElementById(spanID).style.display = ' block';
      return false;
    }
  }
  this.checkPass = function(value, spanID, message){
    var pattern= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
    if(value.match(pattern)){
      document.getElementById(spanID).innerHTML = "";
      document.getElementById(spanID).style.display = 'none';
      return true;
    }else{
      document.getElementById(spanID).innerHTML = message;
      document.getElementById(spanID).style.display = ' block';
      return false;
    }
  }
  this.checkFormatDay = function(value, spanID, message){
    var pattern = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/
    if(value.match(pattern)){
      
      document.getElementById(spanID).innerHTML = "";
      document.getElementById(spanID).style.display = 'none';
      return true;
    
    }else{
      
      document.getElementById(spanID).innerHTML = message;
      document.getElementById(spanID).style.display = ' block';
      return false;
    }
  }
  this.checkLuong = function(value, spanID, message){
    var pattern =  /^(\d{2,40}(\.\d{1,2})?)$/;
    value = value.trim()
    if(value.match(pattern) && value >= 1000000 && value <= 20000000 ){
      // console.log(typeof(value));
      document.getElementById(spanID).innerHTML = "";
      document.getElementById(spanID).style.display = 'none';
      return true;
    }else{
      document.getElementById(spanID).innerHTML = message;
      document.getElementById(spanID).style.display = ' block';
      return false;
    }
  }
  this.checkSelect = function(selectID, spanID, message){
    if(document.getElementById(selectID).selectedIndex !=0){
      document.getElementById(spanID).innerHTML = "";
      document.getElementById(spanID).style.display = 'none';
      return true;
    }else{
      document.getElementById(spanID).innerHTML = message;
      document.getElementById(spanID).style.display = ' block';
      return false;
    }
  }
  this.checkTime = function(value, spanID, message){
    var pattern =  /^(\d{2,40}(\.\d{1,2})?)$/;
     value = value.trim()
    if(value.match(pattern) && value >=80 && value <=300){
      // console.log(typeof(value));
      document.getElementById(spanID).innerHTML = "";
      document.getElementById(spanID).style.display = 'none';
      return true;
   
    }else{
      document.getElementById(spanID).innerHTML = message;
      document.getElementById(spanID).style.display = ' block';
      return false;
    }
  }
  


}