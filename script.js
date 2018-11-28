$(function() {
  //All JS goes within these brackets  
  
  $("#age-submit").click(function(){
    
    //select the box with id of age
    //get the value from that box
    var ageString = $("#age").val();

    //convert string to number
    var age = parseInt(ageString);

    if ( age <= 1996 && age >=1981 ) {
      $("#answer").text("hi millennial!");
      $("#neil-form").show();
      $("#age-form").hide();
    } else {
      $("#answer").text("nope. not a millennial");
    }
    
  });




