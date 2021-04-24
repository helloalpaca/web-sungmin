function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function initMap() {
    var company = {
        lat: 35.14110284784037,
        lng: 128.94609152636053
    };
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 12,
            center: company
        });
    new google.maps.Marker({
        position: company,
        map: map
    });
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

/* menu2.html */
$(document).ready(function () {
    var listID = getParameterByName('list');

    $.getJSON('text.json', function (data) {
        if (listID == "") {
            listID = 1;
        }

        var title = data[listID - 1].title;
        var subtitle = data[listID - 1].subtitle;
        var imgsrc = data[listID - 1].imgsrc;
        var detail = data[listID - 1].detail;

        // p라는 태그안에 text값을 지정 후
        // p의 html내용을 <br>태그로 replace 해준다.
        var p = $(document.createElement("p")).text(detail);
        p.html(p.html().replace(/\n/g, '<br/>'));

        $("#maintext").text(title);
        $("#subtext").text(subtitle);
        $("#machineimg").attr("src", imgsrc);
        $("#description").html(p);
    });
});