var oUl = document.getElementsByTagName("ul");
var aLi = oUl.getElementsByTagName("li");
var flag = true;
var flag1 = false;
window.onload = function(){
    for(var i=0; i<aLi.length; ++i){
        if(i == 0){
            aLi[i].onmousedown = function(){
                this.style.background = "red";
            }
            aLi[i].onmouseout = function(){
                this.style.background = "";
            }            
        }else if(i == 1){
            var d = new Date();
            var y = d.getFullYear();
            var m = d.getMonth()+1;
            var da = d.getDate();
            // if(m < 10){
            //     m = "0"+m;
            // }
            // if(da < 10){
            //     da = "0" + da;
            // }
            // const formatData = (e) =>{ return e.padStart(2,'0')}
            console.log(da,m);
            da.toString().padStart(2,'0');
            m.toString().padStart(2,'0');
            console.log(da,m);
            aLi[i].onmousedown = function(){
                document.getElementById("date").innerHTML = y+"-"+m+"-"+da;
            }
            aLi[i].onmouseout = function(){
                document.getElementById("date").innerHTML = "date";
            }        
        }
    }
}


function deleteChild() {
    var e = document.querySelector("ul");
    var child = e.lastElementChild;
    while (child.id =="p8") {
        e.removeChild(child);
        child = e.lastElementChild;
        aLi.length--;
    }
}

function newDoc() {  
    window.open("http://www.taobao.com") 
}
function newLi(element){
    if(flag){
        var newli = document.createElement("li");
        var node = document.createTextNode("p9");
        newli.appendChild(node);
        var element=document.getElementById("ul");
        element.appendChild(newli);
        flag = false;        
    }

}

document.getElementById("ul").addEventListener("click",function(e) {
    if(e.target && e.target.id == "p3") {
      document.getElementById("p3").classList.add("fn-active");

    }else if(e.target && e.target.id == "p4"){
        deleteChild();
    }else if(e.target && e.target.id == "p5"){
        newDoc();
    }else if(e.target && e.target.id == "p6"){
        newLi();
    }else if(e.target && e.target.id == "p7"){
        document.getElementsByClassName("m-box")[0].style.width = screen.availWidth + "px";
    }

    for(var i=0; i<aLi.length; ++i){
        (function(j){
            aLi[j].onclick = function(){
                console.log(j);
                alert("Click li["+j+"] Now!");
            }
        })(i)
    }
    });