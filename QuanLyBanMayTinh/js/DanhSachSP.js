
function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "rgba(65, 63, 63, 50%)";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}


