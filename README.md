![alt tag](http://res.cloudinary.com/dmj8qtant/image/upload/c_limit,w_600/v1461829019/weather_r5dt8j.jpg)
# weather

## Tech
Jquery AJAX

## Niceties
Time & Weather background adjustment. 

### Details
#### CSS
 - none

#### JS
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
if(6 < hours[1] && hours[1] < 18){
...
     document.querySelector("body").style.backgroundImage = "url('http://orig03.deviantart.net/3263/f/2009/257/b/9/sunflower_field_by_mxmbulat.jpg')";break;
```
