var main = function($) {
  

  var the_good_stuff = {};


  $.ajax({
          url : "http://api.wunderground.com/api/eff03e7c66c8636b/conditions/q/autoip.json",
          dataType : "jsonp",
          success : function(parsed_json) {
              the_good_stuff = parsed_json['current_observation'];
              var location = parsed_json['current_observation']['display_location']['full'];
              var temp_f = parsed_json['current_observation']['temp_f'];
              var temp_c = parsed_json['current_observation']['temp_c'];
              var weather = parsed_json['current_observation']['weather'];
              var icon = parsed_json['current_observation']['icon_url'];
              var wind_spd = parsed_json['current_observation']['wind_mph'];
              var wind_dir = parsed_json['current_observation']['wind_dir'];
              var time = parsed_json['current_observation']['observation_time_rfc822'];
              var Regexp = /\s(\d+):/g;
              var hours = Regexp.exec(time)
              $("#location").html(location);
              $("#temperature").html(temp_f + "&deg;F");
              $("#weather").html(weather);
              $("#weatherimg").attr("src",icon);
              $("#wind_spd").html(wind_spd + "mph");
              $("#wind_dir").html(wind_dir);
              if(6 < hours[1] && hours[1] < 18){
                  switch(weather){
                      case "Clear":document.querySelector("body").style.backgroundImage = "url('http://7-themes.com/data_images/out/13/6812493-sunflower-field-wallpaper.jpg')";break;
                      case "Rain":document.querySelector("body").style.backgroundImage = "url('http://images4.alphacoders.com/831/83196.jpg')";break;
                      case "Snow":document.querySelector("body").style.backgroundImage = "url('http://www.pageresource.com/wallpapers/wallpaper/comments-for-cousy-house-in-snowy-mountains.jpg')";break;
                      case "Thunderstorms":document.querySelector("body").style.backgroundImage = "url('http://www.mrwallpaper.com/wallpapers/thunderstorm.jpg')";break;
                      default: return false;
                  };
              }
              else {
                  switch(weather){
                      case "Clear":document.querySelector("body").style.backgroundImage = "url('https://snapshotsbykats.files.wordpress.com/2011/11/020.jpg')";break;
                      case "Rain":document.querySelector("body").style.backgroundImage = "url('http://newtopwallpapers.com/wp-content/uploads/2013/04/A-Rainy-Night-Background-For-Desktop.jpg')";break;
                      case "Snow":document.querySelector("body").style.backgroundImage = "url('http://www.free-desktop-backgrounds.net/free-desktop-wallpapers-backgrounds/free-hd-desktop-wallpapers-backgrounds/565804859.jpg')";break;
                      case "Thunderstorms":document.querySelector("body").style.backgroundImage = "url('http://www.pix123.com/freespins/NewsImages/587783_Thunder-Blue-Storm-at-Night.jpg')";break;
                      default: return false;
                  };
              }
          }
  });



    $('.swap').click(function(){
        var current = $("#temperature").html();
        if(current.includes("F") == true){
            console.log("switch to C");
            $("#temperature").html(the_good_stuff.temp_c + "&deg;C");
        }
        else{
            $("#temperature").html(the_good_stuff.temp_f + "&deg;F");
        }
    }

)};
                          
                          
$(document).ready(main);