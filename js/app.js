$(function () {

    $(".bar").click(function (e) {
        e.preventDefault();
        $(".navbar").addClass("active");
    })
    $(".close").click(function (e) {
        e.preventDefault();
        $(".navbar").removeClass("active");
    })

    $(".item-row").click(function (event) {
        window.location.href="sproduct.html";
    })
})