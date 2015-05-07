function getUsername(){
   var username =  $.session.getUsername();
   return username;
}
var result = "Hello sunny GitHub World from User " + getUsername();
$.response.setBody(result);
