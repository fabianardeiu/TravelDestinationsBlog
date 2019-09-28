//SIDE-NAV-BAR

function openNav() {
    if(document.getElementById("mySidenav").style.width === "88px"){
        document.getElementById("mySidenav").style.width = "0px";
    }
    else{
        document.getElementById("mySidenav").style.width = "88px";
        document.getElementById("mySidenav").style.display = "block";
    }
    // document.getElementById("mySidenav").style.width = "88px";

    // document.getElementById("mySidenav").style.display = "block";
}

$('#menu-btn').click(openNav);

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });
