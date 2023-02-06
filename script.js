
function tipfive(){
var billa=Number(document.getElementById("bill").value);
var people=Number(document.getElementById("peo").value);
var tipamount=document.getElementById("ans1");
var total=document.getElementById("ans2");
var cust=document.getElementById("custom").value;
tipamount.innerText= billa*(5/100)+"$";
total.innerText=(billa/people)+billa*(5/100)+"$";
}
function tipten(){
var billa=Number(document.getElementById("bill").value);
var people=Number(document.getElementById("peo").value);
var tipamount=document.getElementById("ans1");
var total=document.getElementById("ans2");
var cust=document.getElementById("custom").value;
tipamount.innerText= billa*(10/100)+"$";
total.innerText=(billa/people)+billa*(10/100)+"$";
}
function tipfif(){
var billa=Number(document.getElementById("bill").value);
var people=Number(document.getElementById("peo").value);
var tipamount=document.getElementById("ans1");
var total=document.getElementById("ans2");
// var cust=document.getElementById("custom").value;
tipamount.innerText= billa*(15/100)+"$";
total.innerText=(billa/people)+billa*(15/100)+"$";
}
function tip25(){
var billa=Number(document.getElementById("bill").value);
var people=Number(document.getElementById("peo").value);
var tipamount=document.getElementById("ans1");
var total=document.getElementById("ans2");
var cust=document.getElementById("custom").value;
  tipamount.innerText= billa*(25/100)+"$";
total.innerText=(billa/people)+billa*(25/100)+"$";
}
function tip50(){
var billa=Number(document.getElementById("bill").value);
var people=Number(document.getElementById("peo").value);
var tipamount=document.getElementById("ans1");
var total=document.getElementById("ans2");
var cust=document.getElementById("custom").value;
  tipamount.innerText= billa*(50/100)+"$";
  total.innerText=(billa/people)+billa*(50/100)+"$";
}
function customs(){
var billa=Number(document.getElementById("bill").value);
var people=Number(document.getElementById("peo").value);
var tipamount=document.getElementById("ans1");
var total=document.getElementById("ans2");
var cust=Number(document.getElementById("custom").value);
  tipamount.innerText= billa*(cust/100)+"$";
  total.innerText=(billa/people)+billa*(cust/100)+"$";
}
