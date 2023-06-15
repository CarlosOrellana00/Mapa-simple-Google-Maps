function iniciarMap(){
  var coordenadas = {lat:, lng};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom:10,
    center: coordenadas
  });
}