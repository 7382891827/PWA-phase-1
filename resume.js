function loadJSON(file,callback) {
  let xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function() {
    if (xhr.readyState===4 && xhr.status=="200") {
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}

loadJSON("data.json",function(text) {
  var data=JSON.parse(text);
  console.log(data);
  personaL(data.personalDetails);
  career(data.carrerobject);
  education(data.ACADEMICS);
  // define a function
});

var main=document.querySelector(".main");
console.log(main);

function personaL(details) {
  var left=document.createElement("div");
  left.classList.add("left");
  main.appendChild(left);

var left1=document.createElement("div");
left1.classList.add("l1");
left.appendChild(left1);
let image=document.createElement("img");
image.src=details.image;
left1.appendChild(image);
var myname=document.createElement("h2");
myname.textContent=details.myname;
left1.appendChild(myname);
var designation=document.createElement("h2");
designation.textContent=details.designation;
left1.appendChild(designation);
left.appendChild(document.createElement("hr"))

var left1=document.createElement("div");
left1.classList.add("l2");
left.appendChild(left1);

var fname=document.createElement("h3");
fname.textContent=details.fname;
left1.appendChild(fname);

var email=document.createElement("h3");
email.textContent=details.email;
left1.appendChild(email);

var phonenumber=document.createElement("h3");
phonenumber.textContent=details.phonenumber;
left1.appendChild(phonenumber);

var address=document.createElement("h3");
address.textContent=details.address;
left1.appendChild(address);
}
var right=document.createElement("div");
right.classList.add("right");
main.appendChild(right);
function career(details1){
  var cat=document.createElement("h2");
  cat.textContent=details1.info;
  right.appendChild(cat);
  var cat=document.createElement("h2");
  cat.textContent=details1.obj;
  right.appendChild(cat);
  function education(details2){
    for(i in details2){
      var cat=document.createElement("h2");
      cat.textContent=details2[i].qualifications;
      right.appendChild(cat);
      var cat=document.createElement("h2");
      cat.textContent=details2[i].inst;
      right.appendChild(cat);
      var cat=document.createElement("h2");
      cat.textContent=details2[i].QUALIFICATIONS;
      right.appendChild(cat);
      var cat=document.createElement("h2");
      cat.textContent=details2[i].inst1;
      right.appendChild(cat);
      var cat=document.createElement("h2");
      cat.textContent=details2[i].QUALIFICATIONs;
      right.appendChild(cat);
      var cat=document.createElement("h2");
      cat.textContent=details2[i].inst2;
      right.appendChild(cat);
    }

  }


}
