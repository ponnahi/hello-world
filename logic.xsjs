function getUsername(){
   var username =  $.session.getUsername();
   return username;
}
var result = "Hello GitHub World from User " + getUsername();
$.response.setBody(result);
