<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
$(document).ready(function(){
  $("button").click(function(){
    $.ajax({url: "https://www.google.co.uk/", success: function(result){
      $("#div1").html(result);
    }});
  });
});
