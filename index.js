$(document).ready(function () {

    $("#btn").click(function () {
        $("p").hide(); //How element selector works
    });

    $("#btnHide").click(function () {
        $(this).hide(); //Functionality of this keyword
    });

    $("#btnShow").on({
        mouseenter: function () {
            alert("Click me to show hidden paragraph");
        },
        click: function () {
            $("p.intro").show();
        }
    });
    //Above code is replacement for below code.

    /*$("#btnShow").mouseenter(function () {
    //$("p.intro").show(); //How class selector works
    alert("Click me to show hidden paragraph");
    });

    $("#btnShow").click(function () {
    $("p.intro").show(); //How class selector works
    //alert("Click me to show hidden paragraph");
    });*/

    $("tr:even").css("background-color", "yellow"); //Selects all even <tr> elements,use "odd" for odd elements

    $("#btnPsuedo").click(function () {
        $("ul li:first").hide(); /*Selects the first <li> element of the first <ul> 
    To Select the first <li> element of every <ul> use $("ul li:first-child")*/
    });

    $("p").dblclick(function () {
        $(this).hide();
    });

    $("input").focus(function () {
        $(this).css("background-color", "yellow");
    });
    $("input").blur(function () {
        $(this).css("background-color", "blue");
    });

    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
});