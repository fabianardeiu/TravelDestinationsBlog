//SIDE-NAV-BAR

function openNav() {
    if(document.getElementById("mySidenav").style.width === "88px"){
        document.getElementById("mySidenav").style.width = "0px";
    }
    else{
        document.getElementById("mySidenav").style.width = "88px";
        document.getElementById("mySidenav").style.display = "block";
    }
}

$('#menu-btn').click(openNav);

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });

  function initMap() {
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  };

function seeImage(modalId, imgId, modalImgId,closeId){
  var modal = document.getElementById(modalId);
  var img = document.getElementById(imgId);
  var modalImg = document.getElementById(modalImgId);
  modal.style.display = "block";
  modalImg.src = img.src;

  var span = document.getElementById(closeId);

    span.onclick = function() {
    modal.style.display = "none";
  }
}

