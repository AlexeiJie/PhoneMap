/*
 * @author Jie
 */

function onBodyLoad()
{	
    document.addEventListener("deviceready", onDeviceReady, false);  
    geolocalizar();
}

function onDeviceReady()
{
	document.addEventListener("backbutton", onBackKeyDown, false);
	document.addEventListener("menubutton", onMenuKeyDown, false);
	geolocalizar();
}    
function onBackKeyDown()
{
	window.history.back();
}
function onMenuKeyDown()
{
	window.location.href='menu.html';
}

function geolocalizar(){
	console.log("Entro en pagina");
	var defaultPos = new google.maps.LatLng(19.289168, -99.653440);
	if (navigator.geolocation) {
		function exito(pos) {
       	MuestraMapa(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
		}
		function falla(error) {
			//si falla mostrar mpara en posicion por defecto
			alert('Error en servicio Geolocalizador');
			MuestraMapa(defaultPos); 
		}
				
		//maximumAge- Guarda la posicion por 5 minutos 
		//enableHighAccuracy: Se tratan de obtener los mejores resultados posible del GPS
		//timeout: el tiempo maximo que se espera para obtener la posicion en este caso 5 segundos
		var options = {maximumAge: 500000, enableHighAccuracy:true, timeout: 5000};
		navigator.geolocation.getCurrentPosition(exito, falla, options );
	}//FIN IF
	else {
		MuestraMapa(defaultPos);  // No soporta geolocalizacion y dibuja el mapa en posicion Default
	}
}

function MuestraMapa(latlng) {
	console.log("Entro en mapa");
	var myOptions = {
	zoom: 16,
	center: latlng,
	disableDefaultUI: true,
	mapTypeId: google.maps.MapTypeId.ROADMAP};
	
	var map = new google.maps.Map(document.getElementById("mapa"), myOptions);
	var infowindow = new google.maps.InfoWindow({
		position: latlng,
		content: '<p>Tu posición actual</p>'+latlng
	});
			
	var marker = new google.maps.Marker({
		position: latlng,
		map: map,
		title: "Mi posición",
		animation: google.maps.Animation.DROP
	});
	google.maps.event.addListener(marker, 'click', function() {infowindow.open(map,marker);});
}// Fin muestra mapa