/**
 * filterObjects filter
 *
 * Return array of zoomables from specified object, or if not specified, from
 * ui.zoomables master array
 */
angular.module( 'griot' ).filter( 'filterObjects', function() {

  return function( objects, ui, requestedID ) {

  	if( requestedID ) {
  		return ui.zoomables.grouped[ requestedID ];
  	} else {
  		return ui.zoomables.all;
  	}

  };

});