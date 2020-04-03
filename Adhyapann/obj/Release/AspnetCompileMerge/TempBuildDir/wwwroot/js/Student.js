$(document).ready(function () {
    $('.hover_bkgr_fricc').hide();

    
  

    $('#btnResumeTest').click(function (event) {

        var input = new Object();
       
        input.referenceID = $.trim($('#referenceID').val());
        input.password1_resume = $.trim($('#password1_resume').val());
        var password2_resume = $.trim($("#password2_resume").val());

        if (input.referenceID == '') {
            $('#ValidationMessage').html("ReferenceID cannot be blank");
            $('.hover_bkgr_fricc').show();
            return false;
        }
        else if (input.password1_resume == '') {
            $('#ValidationMessage').html("Password cannot be empty");
            $('.hover_bkgr_fricc').show();
            return false;
        }
        else if (input.password1_resume != password2_resume) {
            $('#ValidationMessage').html("Password entered to resume test is Invalid");
            $('.hover_bkgr_fricc').show();
            return false;
        }
        else {

            $.ajax({
                type: 'POST',
                url: '../Student/ResumeTest',
                data: JSON.stringify(input),
                contentType: 'application/json; charset=utf-8',
                //data: JSON.stringify({ PackageName: 1, PackageCode: 1 }),
                dataType: 'json',
                async: true,
                processData: false,
                success: function (result) {

                    //var trHTML = '';
                    if (result.RefIDExists == '0') {
                        $('#ValidationMessage').html("ReferenceID provided is not valid");
                        $('.hover_bkgr_fricc').show();
                    }
                    else if (result.RefIDExists == '1') {
                        window.location.href = '../Test/LoadVerbalnformationTestInstruction'
                    }
                    else if (result.RefIDExists == '2') {
                        window.location.href = '../Test/LoadComprehensionTestInstruction'
                    }
                    else if (result.RefIDExists == '3') {
                        window.location.href = '../Test/LoadArithmeticTestInstruction'
                    }
                    else if (result.RefIDExists == '4') {
                        window.location.href = '../Test/LoadSimilaritiesTestInstruction'
                    }
                    else if (result.RefIDExists == '5') {
                        window.location.href = '../Test/LoadVocabularyTestInstruction'
                    }
                    else if (result.RefIDExists == '6') {
                        window.location.href = '../Test/LoadDigitalSymbolTestInstruction'
                    }
                    else if (result.RefIDExists == '7') {
                        window.location.href = '../Test/LoadPictureCompletionTestInstruction'
                    }
                    else if (result.RefIDExists == '8') {
                        window.location.href = '../Test/LoadSpatialTestInstruction'
                    }
                    else if (result.RefIDExists == '9') {
                        window.location.href = '../Test/LoadPictureArrangementTestInstruction'
                    }
                    else if (result.RefIDExists == '10') {
                        window.location.href = '../Test/LoadPictureAssemblyTestInstruction'
                    }
                    else if (result.RefIDExists == '11') {
                        window.location.href = '../Test/LoadEmotionalRegulationTestInstruction'
                    }
                   
                },

                error: function (msg) {

                    alert(msg.responseText);
                }
            });
        }
          });

    $('#btnRegisterStudent').click(function (event) {

        
        var Name = $.trim($('#Name').val());
        var Email_ID = $.trim($('#Email_ID').val());
        var Gender = $.trim($('#Gender').val());
        var password1 = $.trim($('#password1').val());
        var school_Name = $.trim($('#school_Name').val());
        var DOB = $.trim($('#DOB').val());
        var Class = $.trim($('#Class').val());       
      
        var password2 = $.trim($("#password2").val());

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



