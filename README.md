# weather

# Takeaways:

 - Geolocated API
 - jQuery AJAX
 - Using jsonp, not http GET for inter-domain communication.
```
  $.ajax({
          url : "http://api.wunderground.com/api/eff03e7c66c8636b/conditions/q/autoip.json",
          dataType : "jsonp",
          success : function(parsed_json) {
              the_good_stuff = parsed_json['current_observation'];
```
 - Regexp to get Hours off of Time data. Used to change background.

```
    - document.querySelector("body").style.backgroundImage = "url('http://orig03.deviantart.net/3263/f/2009/257/b/9/sunflower_field_by_mxmbulat.jpg')";break;
```
