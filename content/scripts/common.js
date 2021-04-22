function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

/* common */
$(document).ready(function () {
    $("#footers").load("content/common/footer.html");
    $("#header").load("content/common/header.html");
});

/* menu1.html */
$(document).ready(function () {
    var id = getParameterByName('id');

    if (id == 2) {
        $("#main1").hide();
        $("#main2").show();
        $("#main3").hide();
        $("#main4").hide();

        $('#list1').removeClass('active');
        $('#list2').addClass('active');
        $('#list3').removeClass('active');
        $('#list4').removeClass('active');
    } else if (id == 3) {
        $("#main1").hide();
        $("#main2").hide();
        $("#main3").show();
        $("#main4").hide();

        $('#list1').removeClass('active');
        $('#list2').removeClass('active');
        $('#list3').addClass('active');
        $('#list4').removeClass('active');
    } else if (id == 4) {
        $("#main1").hide();
        $("#main2").hide();
        $("#main3").hide();
        $("#main4").show();

        $('#list1').removeClass('active');
        $('#list2').removeClass('active');
        $('#list3').removeClass('active');
        $('#list4').addClass('active');
    } else {
        $("#main1").show();
        $("#main2").hide();
        $("#main3").hide();
        $("#main4").hide();

        $('#list1').addClass('active');
        $('#list2').removeClass('active');
        $('#list3').removeClass('active');
        $('#list4').removeClass('active');
    }
});