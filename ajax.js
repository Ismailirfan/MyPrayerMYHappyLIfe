  

$(document).ready(function() {
 
$.ajax({url: "shortcutkeys.html", success: function(result){
      $("#Shortcutkeys").html(result);
    }});	

 $.ajax({url: "service.html", success: function(result){
      $("#service").html(result);
    }});	
 
  // Tabbed Menu


 
     /* const API_KEY = 'AIzaSyAAVEyh_nSUsyhpZq-N1oeb1qGNanbz_Kc';
      const FOLDER_ID = '1_iCnZEDJpQEK524YzL3v8RWUtM9sDqge'; // Replace with your public Google Drive folder ID

      listFiles(); // Automatically fetch files when the page loads

      function listFiles() {
        $.ajax({
          url: `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents+and+mimeType='text/html'&key=${API_KEY}`,
          method: 'GET',
          success: function(data) {
            $('#fileList').empty();
            data.files.forEach(function(file) {
              fetchFileContent(file.id);
            });
          },
          error: function(error) {
            console.error('Error:', error);
          }
       });
     }

      window.fetchFileContent = function(fileId) {
        $.ajax({
          url: `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${API_KEY}`,
          method: 'GET',
          success: function(data) {
            $('#fileContent').html(data);
            $('#mymodal').modal('show'); // Show the modal with fetched content
          },
          error: function(error) {
            console.error('Error:', error);
          }
        });
      }*/
    });
