$(document).ready(function (e) {
  function KiemTraHo() {
    var re = /^([A-Z][a-zA-Z]*[ ]*)+$/;
    if ($("#txtHo").val() == "") {
      $("#regexHo").html("* Không được bỏ trống");
      return false;
    }
    if (!re.test($("#txtHo").val())) {
      $("#regexHo").html("* Kí tự đầu phải viết hoa");
      return false;
    }
    $("#regexHo").html("");
    return true;
  }
  $("#txtHo").blur(KiemTraHo);

  function KiemTraTen() {
    var re = /^([A-Z][a-zA-Z]*[ ]*)+$/;
    if ($("#txtTen").val() == "") {
      $("#regexTen").html("* Không được bỏ trống");
      return false;
    }
    if (!re.test($("#txtHo").val())) {
      $("#regexTen").html("* Kí tự đầu phải viết hoa");
      return false;
    }
    $("#regexTen").html("");
    return true;
  }
  $("#txtTen").blur(KiemTraTen);

  function KiemTraSDT() {
    var re = /^[0][0-9]{9}$/;
    if ($("#txtSDT").val() == "") {
      $("#regexSDT").html("* Không được bỏ trống");
      return false;
    }
    if (!re.test($("#txtSDT").val())) {
      $("#regexSDT").html("* Phải nhập số và nhập đủ 10 số VD(0912345678)");
      return false;
    }
    $("#regexSDT").html("");
    return true;
  }
  $("#txtSDT").blur(KiemTraSDT);

  function KiemTraEmail() {
    var re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if ($("#txtEmail").val() == "") {
      $("#regexEmail").html("* Không được bỏ trống");
      return false;
    }
    if (!re.test($("#txtSDT").val())) {
      $("#regexEmail").html("* Phải nhập đúng Email VD(mai@gmail.com)");
      return false;
    }
    $("#regexEmail").html("");
    return true;
  }
  $("#txtEmail").blur(KiemTraEmail);

  function KiemTrapass() {
    if ($("#txtPass").val() == "") {
      $("#regexPass").html("* Không được bỏ trống");
      return false;
    }
    $("#regexPass").html("");
    return true;
  }
  $("#txtPass").blur(KiemTrapass);

  function KiemTrapassConfirm() {
    if ($("#txtPassConfirm").val() == "") {
      $("#regexPassConfirm").html("* Không được bỏ trống");
      return false;
    }
    if ($("#txtPassConfirm").val() != $("#txtPass").val()) {
      $("#regexPassConfirm").html("* Mật khẩu nhập lại không đúng");
      return false;
    }
    $("#regexPassConfirm").html("");
    return true;
  }
  $("#txtPassConfirm").blur(KiemTrapassConfirm);

  $("#btnDangKy").click(function () {
    if (
      KiemTraTen() == true &&
      KiemTraHo() == true &&
      KiemTraSDT() == true &&
      KiemTrapass() == true &&
      KiemTrapassConfirm() == true
    ) {
      
      return true;
    }
    alert("Hãy nhập đúng thông tin để đăng ký")
    return false;
  });
});
