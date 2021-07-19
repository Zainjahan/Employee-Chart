var paragraphs=document.getElementsByTagName("p");
for(var i=0;i<paragraphs.length;i++){
    var paragraph=paragraphs.item(i);
    paragraphs.style.setProperty("color","blue",null);
}



d3.selectAll("p").style("color","blue");