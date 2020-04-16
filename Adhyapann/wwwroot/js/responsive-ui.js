
function ApplyHomePageSettings(x) {
    if (x.matches) {
        jQuery("#homeSection").css("background-size", "100% 100%");
    }
    else {
        jQuery("#homeSection").css("background-size", "50% 100%");
    }
}

function ApplyRegisterPageSettings(x) {
    if (x.matches) {
        jQuery(".input--style-1").width("100%")
    }
    else {
        jQuery(".input--style-1").width("50%")
    }
}

function ApplyDigitialSymbolSettings(x) {
    if (x.matches) {
        jQuery(".imgDigSymRef").width("100%")
    }
    else {
        jQuery(".imgDigSymRef").css("width", "");
    }
}

function ApplyLoadDigitialSymbolSettings(x) {
    if (x.matches) {
        jQuery("#imgLoadDigSymRef, #imgLoadDigSymRef1, #imgLoadDigSymRef2, #imgLoadDigSymRef3, #imgLoadDigSymRef4, .img-load-digital-symbol-generic").width("90%")

    }
    else {
        jQuery("#imgLoadDigSymRef, #imgLoadDigSymRef1, #imgLoadDigSymRef2, #imgLoadDigSymRef3, #imgLoadDigSymRef4, .img-load-digital-symbol-generic").css("width", "");
    }
}

function ApplyPictureCompletionSettings(x) {
    if (x.matches) {
        jQuery("#imgPASpatial0").width("95%")
        jQuery("#imgPASpatial0").height("40%")

        jQuery("#imgPASpatial1").width("95%")
        jQuery("#imgPASpatial1").height("40%")
    }
    else {
        jQuery("#imgPASpatial0").css("width", "");
        jQuery("#imgPASpatial0").height("200px")

        jQuery("#imgPASpatial1").css("width", "");
        jQuery("#imgPASpatial1").height("400px")
    }
}

function IsMobileBrowser() {
    return (/Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
}

function ApplyScreenwiseResolution() {
   
    if (IsMobileBrowser()) {
        jQuery(".mobile-ui-css, .ipad-ui-css").hide();
    }
    else if (navigator.userAgent.indexOf("iPad") > 0) {
        jQuery(".ipad-ui-css").hide();
        jQuery(".mobile-ui-css").show();
    }
    else {
        jQuery(".mobile-ui-css, .ipad-ui-css").show();
    }
}