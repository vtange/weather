var main = function() {
  
jQuery(document).ready(function($) {
  $.ajax({
          url : "http://api.wunderground.com/api/eff03e7c66c8636b/conditions/q/autoip.json",
          dataType : "jsonp",
          success : function(parsed_json) {
              var location = parsed_json['current_observation']['display_location']['full'];
              var temp_f = parsed_json['current_observation']['temp_f'];
              var temp_c = parsed_json['current_observation']['temp_c'];
              var clouds = parsed_json['current_observation']['weather'];
              var icon = parsed_json['current_observation']['icon_url'];
              var wind_spd = parsed_json['current_observation']['wind_mph'];
              var wind_dir = parsed_json['current_observation']['wind_dir'];
              $("#location").html(location);
              $("#temperature").html(temp_f + "&deg;F");
              $("#cloudiness").html(clouds);
              $("#weatherimg").attr("src",icon);
              $("#wind_spd").html(wind_spd + "mph");
              $("#wind_dir").html(wind_dir);
          }
  });
})


    $('.swap').click(function(){
        var current = $("#temperature").html();
        if(current.includes("F") == true){
            console.log("switch to C");
            $("#temperature").html(temp_c + "&deg;C");
        }
        else{
            $("#temperature").html(temp_f + "&deg;F");
        }
    }

)};
                          
                          
$(document).ready(main);