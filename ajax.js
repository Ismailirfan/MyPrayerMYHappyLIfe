<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
$(document).ready(function(){
  $("button").click(function(){
    $.ajax({url: "shortcutkeys.html", success: function(result){
      $("#div1").html(result);
    }});
  });
});
