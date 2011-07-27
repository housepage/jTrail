/*  jTrail jquery plugin 
	version 1.0, July 22 2011
	Licensed under the BSD New License
	Developed by Andrew Gall. For any bugs or questions, you can email me at housepage@gmail.com.
	Info on the plugin is located on http://six.mar.cx/jTrail and http://github.com/housepage/jTrail
	
	List of options 
	
	maxCrumbs : 4, 				// Number : Sets how many crumbs are displayed on the page
	maxMemory : 15, 			// Number : How many breadcrumbs will be stored for the user to follow
	defaultClass : 'jCrumb', 	// String: Controls how the breadcrumbs look
	jqUI : false,				// Bool : Attached jqui styles
	seperator : "&gt;" 			// False or HTML : Sets a seperator inbetween  the breadbcrumbs
	
	Default Usage :
	$('#element').jCrumb();
	
	-or-
	
	$('#element').jCrumb(options);
*/

(function($){
	$.fn.jTrail = function(options) {
		var settings = {
        data_field:'title',
        trail_class: 'trail',
        max_landmarks: 5
			};
    
    if (options) { 
      settings = $.extend(settings, options);
    }

    var log = function(logmsg) {
      console.log("jTrail: "+logmsg);
    },
		getLandmarks = function(){
        log("Fetching History"); 

				// Establish Variables
				var History = window.History; // Note: We are using a capital H instead of a lower h
        var states = History.savedStates;

        if (states == 'undefined' || states.length <= 0) {
          return new Array();
        }

        var titles = new Array();
				for(var i=0;i < states.length;i++) {
          titles.push(states[i][settings.data_field]);
        }

        log("Assembling deduplicated array of visited sites");
        var landmarks = new Array(); 

        var start = jQuery.inArray(settings.trailhead,titles);

        if(start == -1) {
          start = 0;
        }

				for(var i=start; i < titles.length;i++) {
          log("Mile marker: "+i+" "+titles.length);
          log(titles);
          

					var title = titles[i];
          if(title.length != 0) {
            log("Title: "+title);
            landmarks.push(title);
           
            var find_next = i;

            do {
              var search = jQuery.inArray(title,titles.slice(find_next+1));

              if(search < 0 || (search % 2 == 0)) {
                break;
              }

              find_next = search + find_next;


              if(find_next > -1) {
                if(title == titles[find_next]) {
                  i = find_next + 1;
                }
              }
            } while(find_next > -1);
          }
				}

        log("Treasure map found!");

        return landmarks.slice(1);
			},

      // Utility Functions 
      createTrail = function(container) {
        var trail_table = $('<table>');
        trail_table.addClass(settings.trail_class);
        var trail = $('<tr>');
        trail.addClass(settings.trail_class);

        trail_table.appendTo(container); 
        trail.appendTo(trail_table);
      
        return (trail);
      },

      createLandmark = function(text) {
        var landmark_container = $('<td>');
        var landmark = $('<div>');
        
        landmark.appendTo(landmark_container);
        
        landmark.addClass('landmark');

        if(text) {
          landmark.text(text);
        } else {
          landmark.addClass('landmark-unknown'); 
        }  

        return landmark_container;
      },

      createTrailhead = function(text) {
        var trailhead = createLandmark(text);
        $(trailhead.children()[0]).addClass('landmark-trailhead');

        return trailhead;
      },

      createPeak = function(text) {
        var peak = createLandmark(text);
        $(peak.children()[0]).addClass('landmark-peak');
        
        return peak;
      };

		return this.each(function() {
			
	
      log("Starting Trail");
 
      $(this).html('');
		  	
      var landmarks = getLandmarks();

      log("Landmarks");
      log(landmarks);

      log("Got Landmarks");
			
      log("Creating Trail");
      trail = createTrail($(this)); 


      log("Creating Trailhead");
      // Create Trailhead
      var trailhead = createTrailhead(settings.trailhead);
      trailhead.appendTo(trail);
      var i = 0;
    
      if(landmarks){
        log("Filling In The Map With What We Know");
        // Landmarks Spotted
        for(i = 0; i < landmarks.length && i < settings.max_landmarks; i++){
          createLandmark(landmarks[i]).appendTo(trail);
        }
			}

      log("Confronting the Unknown");
      // Create Unknown Landmarks
      for(; i < settings.max_landmarks; i++) {
        createLandmark().appendTo(trail);
      }

      log("Eyeing the Peak");
      // Create Peak
      var peak = createPeak(options.peak);
      peak.appendTo(trail);
		});
	};
})(jQuery);
