function add(){
 var a=document.getElementById("input_txt").value;
 var b=document.getElementById("items");
 var tag=document.createElement("li");
 tag.innerHTML=a;
 b.append(tag);
 document.getElementById("input_txt").value="";
}