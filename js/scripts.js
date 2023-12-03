/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

    

});

$(".btn-group > .btn").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    $(this).addClass("active");
});

$("#today").on("click", function(){ 
    $("#fridge").html("1.27 Kwh");
    $("#air-b").html("0.92 Kwh");
    $("#air-l").html("0.03 Kwh");
    $("#comp").html("0.34 Kwh");
    $("#stove").html("1.21 Kwh");
    $("#oven").html("0.03 Kwh");
    $("#boiler").html("1.31 Kwh");
    $("#freezer").html("2.27 Kwh");
});


$("#this-month").on("click", function(){ 
    $("#fridge").html("25.62 Kwh");
    $('#fridge').removeClass('text-seccondary');
    $('#fridge').addClass('text-success');
    $("#fridge").append(" <i class='fa-solid fa-down-long' style='color: #198754;'></i>");

    $("#air-b").html("32.13 Kwh");
    $('#air-b').removeClass('text-seccondary');
    $('#air-b').addClass('text-success');
    $("#air-b").append(" <i class='fa-solid fa-down-long' style='color: #198754;'></i>");

    $("#air-l").html("19.93 Kwh");
    $('#air-l').removeClass('text-seccondary');
    $('#air-l').addClass('text-success');
    $("#air-l").append(" <i class='fa-solid fa-down-long' style='color: #198754;'></i>");

    $("#comp").html("5.38 Kwh");
    $('#comp').removeClass('text-seccondary');
    $('#comp').addClass('text-success');
    $("#comp").append(" <i class='fa-solid fa-down-long' style='color: #198754;'></i>");

    $("#stove").html("12.15 Kwh");
    $('#stove').removeClass('text-seccondary');
    $('#stove').addClass('text-success');
    $("#stove").append(" <i class='fa-solid fa-down-long' style='color: #198754;'></i>");

    $("#oven").html("8.09 Kwh");
    $('#oven').removeClass('text-seccondary');
    $('#oven').addClass('text-success');
    $("#oven").append(" <i class='fa-solid fa-down-long' style='color: #198754;'></i>");

    $("#boiler").html("12.52 Kwh");
    $('#boiler').removeClass('text-seccondary');
    $('#boiler').addClass('text-danger');
    $("#boiler").append(" <i class='fa-solid fa-up-long' style='color: #dc3545;'></i>");

    $("#freezer").html("14.16 Kwh");
    $('#freezer').removeClass('text-seccondary');
    $('#freezer').addClass('text-danger');
    $("#freezer").append(" <i class='fa-solid fa-up-long' style='color: #dc3545;'></i>");

});

$("#total-use").on("click", function(){ 
    $("#fridge").html("352.92 Kwh");
    $("#air-b").html("912.83 Kwh");
    $("#air-l").html("389.32 Kwh");
    $("#comp").html("112.16 Kwh");
    $("#stove").html("891.12 Kwh");
    $("#oven").html("602.15 Kwh");
    $("#boiler").html("756.78 Kwh");
    $("#freezer").html("1023.55 Kwh");
});


