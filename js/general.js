/*
 * @author Jie
 */

function onBodyLoad()
{	
    document.addEventListener("deviceready", onDeviceReady, false);  
    
}

function onDeviceReady()
{
	document.addEventListener("backbutton", onBackKeyDown, false);
	document.addEventListener("menubutton", onMenuKeyDown, false);
}    
function onBackKeyDown()
{
	window.history.back();
}
function onMenuKeyDown()
{
	window.location.href='menu.html';
}