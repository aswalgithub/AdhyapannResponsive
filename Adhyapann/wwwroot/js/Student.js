$(document).ready(function () {
    $('.hover_bkgr_fricc').hide();

    $('#btnRegisterStudent').click(function (event) {

        
        var Name = $.trim($('#Name').val());
        var Email_ID = $.trim($('#Email_ID').val());
        var Gender = $.trim($('#Gender').val());
        var password1 = $.trim($('#password1').val());
        var school_Name = $.trim($('#school_Name').val());
        var DOB = $.trim($('#DOB').val());
        var Class = $.trim($('#Class').val());       
      
        var password2 = $("#password2").val();

        var Age = myCustomAge(DOB);
        if (Name =='') {
            $('#ValidationMessage').html("Student Name cannot be empty");
            $('.hover_bkgr_fricc').show();
            return false;
        }
        else if (Email_ID == '') {
            $('#ValidationMessage').html("Email cannot be empty");
            $('.hover_bkgr_fricc').show();
            return false;
        }
        else if (Gender == '') {
            $('#ValidationMessage').html("Gender cannot be empty");
            $('.hover_bkgr_fricc').show();
            return false;
        }
        else if (school_Name == '') {
            $('#ValidationMessage').html("School Name cannot be empty");
            $('.hover_bkgr_fricc').show();
            return false;
        }
        else if (DOB == '') {
            $('#ValidationMessage').html("Date of Birth cannot be empty");
            $('.hover_bkgr_fricc').show();
            return false;
        }
        else if (Age<13 || Age>19) {
            $('#ValidationMessage').html("Age should be between 13 and 19");
            $('.hover_bkgr_fricc').show();
            return false;
        }
        else if (Class == '') {
            $('#ValidationMessage').html("Student Class cannot be empty");
            $('.hover_bkgr_fricc').show();
            return false;
        }
        else if (password1 == '') {
            $('#ValidationMessage').html("Password cannot be empty");
            $('.hover_bkgr_fricc').show();
            return false;
        }
        else if (password1 != password2) {
            $('#ValidationMessage').html("Password is Invalid");
            $('.hover_bkgr_fricc').show();
            return false;
        }
        
        
        $("#frmRegister").submit()

    });

   
    $('.hover_bkgr_fricc').click(function () {
        $('.hover_bkgr_fricc').hide();
    });
    $('.popupCloseButton').click(function () {
        $('.hover_bkgr_fricc').hide();
    });

    //$("#password1").focusout(validate);
    //$("#password1").blur(validate);

    function validatePassword() {
        var password1 = $("#password1").val();
        var password2 = $("#password2").val();

        if (password1 == '') {
            $('#ValidationMessage').html("Password cannot be empty");
            $('.hover_bkgr_fricc').show();
            return false;
        }
        else {
            if (password1!= password2) {
                $('#ValidationMessage').html("Password is Invalid");
                $('.hover_bkgr_fricc').show();
                return false;
            }
           
        }

    }
    function myCustomAge(dob) {


        if (typeof dob == "string") {
            var dateparts = dob.split("/");
            var userday = dateparts[0];
            var usermonth = dateparts[1];
            var useryear = dateparts[2];
        }
        else {
            var userday = dob.getDate();
            var usermonth = dob.getMonth() + 1; // getMonth returns 0 - 11, January is 0, etc, so need to add 1!
            var useryear = dob.getFullYear();
        }


        var d = new Date();
        var curday = d.getDate();
        var curmonth = d.getMonth() + 1; // getMonth returns 0 - 11, January is 0, etc, so need to add 1!
        var curyear = d.getFullYear();

        if ((curmonth < usermonth) || ((curmonth == usermonth) && (curday < userday))) {
            var age = curyear - useryear - 1;
        }
        else {
            var age = curyear - useryear;
        }

        return age;
    }
   
});



