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

 
// function modal(e)
// {
//     var img = document.getElementById(e);
//     var modalImg = document.getElementById("img01");
//     img.onclick = function(){
//         this.style.display = "block";
//         this.src = this.src;
//         // captionText.innerHTML = this.alt;
//       }
// }

  // Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("img1");
var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}





// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}