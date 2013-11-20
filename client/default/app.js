/*
 * App Initialization
 */
initConFSM();
$(document).ready(function(){
	if(g_debug){
		log('App Initializing...');
	}
    //Attempt to go online via Connectivity FSM
    httpConnectivity.handle('go.online');
	uiInit();
	initOriHandler(); // setup orientation handler if needed
	overRide(); // run iOS or Android overrides
});


/*
 * Load, user defined pages to the DOM at app start up
 * @param - pagesArray
 */
function uiInit(pagesArray){
	if(g_debug){
		log('UI Initializing...');
	}

	// TODO: move this to Login View file
	$('#start').unbind().bind('click', function(){
		var link = "https://www.google.ie";
             $fh.webview({
              'act': 'open',
              'url': link,
              'title': 'Addleshaw Goddard',
              'x': '20px',
              'y': '20px',
              'width': '900px',
              'height': '700px',
              'showTitleBar': 'true',
              'showTitleControls': 'true'
            }, function(res) {
              if (res === "opened") {
                //webview window is now open
                console.log("webview opened");
              }
              if (res === "closed") {
                //webview window is now closed
                console.log("webview closed");
              }
            }, function(msg, err) {
              console.log('error from webview ',msg,err);
            });
	});

	//TODO: Decide on best practice for init UI, without prescribing
	// any single UI framework
}