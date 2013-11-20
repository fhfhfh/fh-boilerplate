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
		alert ("go");
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
                alert("webview opened");
              }
              if (res === "closed") {
                //webview window is now closed
                alert("webview closed");
              }
            }, function(msg, err) {
              alert('error from webview ',msg,err);
            });
	});


	// var htmlLink,
	// localLink = ValueRetail.app.getController('Downloader').convertRemoteUrlToLocalPath(opts.link);
	// ValueRetail.app.getController('Stats').incrementStats(opts.link);
	// if (opts.linktype == 'image') {
	//   htmlLink = '<img width="100%" src="' + localLink + '" />';
	// } else {
	//   htmlLink = '<embed type="application/pdf" width="100%" height="100%" src="' + localLink + '" />';
	//   console.log('opts.link', opts.link);
	//   if (location.hostname != '127.0.0.1') {
	//     $fh.webview({
	//       'act': 'open',
	//       'url': localLink,
	//       'showControls': false,
	//       'title': ''
	//     }, function(res) {
	//       if (res === "opened") {
	//         //webview window is now open
	//       }
	//       if (res === "closed") {
	//         //webview window is now closed
	//       }
	//     }, function(msg, err) {
	//       console.log(msg);
	//     });
	//     break;
	//   }
	// }


	//TODO: Decide on best practice for init UI, without prescribing
	// any single UI framework
}