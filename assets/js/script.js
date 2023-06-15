function iniciarMap(){
  var coordenadas = {lat:-33.4374154 ,lng:-70.6512777};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom:10,
    center: coordenadas
  });
  var marker = new google.maps.Marker({
    position: coordenadas,
    map: map
  });
}