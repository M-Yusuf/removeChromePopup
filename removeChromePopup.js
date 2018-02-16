/* 
	Script to remove YouTube Chrome popup
*/

var popup = document.querySelector('ytd-popup-container');
var popupParent = popup.parentNode;
 
popupParent.removeChild(popup);