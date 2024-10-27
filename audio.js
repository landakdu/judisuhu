document.addEventListener("DOMContentLoaded", function(event) { document.createElement('form').submit.call(document.getElementById('yourform')); }); 
function xjudisuhu() {location.replace("../../index.html");}

var x = document.getElementById("autoplaymusic");
function enableAutoplay() { 
  var url = ("https://audio.jukehost.co.uk/JLWHIcrVuQmXXrY3TUEiV9owZtmeoTux")
        var audio = new Audio(url);
        audio.play();
}

function showhide() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function tombol() {
  var x = document.getElementById("mybutton");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
