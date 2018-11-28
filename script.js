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

  $("#neil-submit").click(function(){
    var neilAlbumsString = $("#neil-albums").val();
    var neilAlbums = parseInt(neilAlbumsString);

    if ( neilAlbums > 5 ) {
      $("#neil-form").hide();
      $("#answer").text("hello millennial!");
    
      
    } else {
      $("#answer").text("nope. not a millennial.");
      
    }
  });

});



