// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


var clickGenerateCode = function() {
  var url = $("#input-url").val();
  var link_text = "Click to input data";
  var embed_code = $("#input-embedcode").val();
  var result = "<a href=\""+url+"\">"+link_text+"</a><br/>"+embed_code;
  $("#textarea-output").text(result);
  $("#textarea-output").removeAttr("disabled");
}


$(document).ready(function() {
  $("#input-generate").on("click", clickGenerateCode);
  $("#textarea-output").attr("disabled","");
});
