// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


// ---- Tab 1


var clickGenerateCodeGraph = function() {
  var url = $("#input-url").val();
  var link_text = "Click to input data";
  var embed_code = $("#input-embedcode").val();
  var result = "<a href=\""+url+"\">"+link_text+"</a><br/>"+embed_code;
  $("#textarea-output").text(result);
}


// ---- Tab 2


var clickGenerateCodeImage = function() {
  var url = $("#input2-imgurl").val();

  var result = "<img style=\"max-width:100% !important;\" src=\""+url+"\"/>";
  $("#textarea2-output").text(result);
};


// ---- Tab 3

var tabSize = 1;
var loadPrefix = String(Math.floor(Math.random()*10000));
var clickTimestamp = 0;


var createNewDivTabWithId = function(id) {
  return "<div id=\"input3-tab"+id+"\" style=\"border:1px solid #e6e6e6;padding: 15px;\"><label>Tab Title<input id=\"input3-title"+id+"\" type=\"text\" placeholder=\"Title\" /></label><label>Tab Content<textarea id=\"input3-content"+id+"\" class=\"font-embedcode\" rows=\"3\" placeholder=\"HTML code goes here\"></textarea></label></div>";
};


var clickDeleteTab = function() {
  // console.log("delete");
  $("#input3-tab"+tabSize).remove();
  tabSize -= 1;
  if (tabSize < 2) {
    $("#input3-delete").hide();
  }
};


var clickAddTab = function() {
  // console.log("add");
  tabSize += 1;
  $("#input3-tabs").append(createNewDivTabWithId(tabSize));
  if (tabSize > 1) {
    $("#input3-delete").show();
  }
};


var generateTabsFromDataWithPrefix = function(tabData, prefix) {
  var result = "";

  var onClickString = "";
  for(i=0;i<tabData.length;i++) {
    onClickString += prefix+String(i)+".hidden=true;";
  }
  var buttons = "";
  var divContents = "";
  for(i=0;i<tabData.length;i++) {
    var identifier = prefix+String(i);
    var tmp = identifier+".hidden=false;";
    buttons = buttons + "<button onclick=\""+onClickString+tmp+"\" style=\"margin:5px;\">"+tabData[i][0]+"</button>";
    divContents = divContents + "<div id=\""+identifier+"\" style=\"height:500px;width:500px;\" " + ((i > 0) ? "hidden=true" : "") + " >" + tabData[i][1] + "</div>";
  }
  result = "<div style=\"background-color:#000;color:#FFF;\">"+buttons+"</div>"+divContents;

  return result;
}


var clickGenerateCodeTabs = function() {
  clickTimestamp = new Date().getTime();

  var tabData = [];
  for(i=1;i<=tabSize;i++) {
    var v1 = $("#input3-title"+i).val();
    var v2 = $("#input3-content"+i).val();
    tabData[i-1] = [
      v1 == undefined ? "" : v1,
      v2 == undefined ? "" : v2
    ];
  }
  var prefix = "element_"+loadPrefix+"_"+String(clickTimestamp)+"_";
  var result = generateTabsFromDataWithPrefix(tabData, prefix);

  $("#textarea3-output").text(result);
};


// ---- jquery init


$(document).ready(function() {
  $("#input-generate").on("click", clickGenerateCodeGraph);
  $("#input2-generate").on("click", clickGenerateCodeImage);
  $("#input3-generate").on("click", clickGenerateCodeTabs);
  // delete/add Tabs
  $("#input3-delete").on("click", clickDeleteTab);
  $("#input3-delete").hide();
  $("#input3-add").on("click", clickAddTab);
  $("#input3-tabs").append(createNewDivTabWithId(1));
});
