var p1 = document.getElementsByClassName("m-li");
var p2 = document.getElementsByClassName("m-example");

var aLi = document.getElementsByClassName("m-li2");
var aDiv = document.getElementsByClassName("m-div2");

var addButton = document.getElementById("btn");
var lastNum = 3;
var del = document.getElementsByClassName("m-list3");

function loop1(i){
    for(var i = 0;i < 8;++i){
        p1[i].style.opacity = 1;
        p2[i].style.display = 'none';
    }
}
function loop2(i){
    for(var i = 0;i < 8;++i){
        p1[i].style.opacity = 0.5;
    }
}
function fadeIn(elem, speed, opacity){
    speedspeed = speed;
    opacityopacity = opacity;
    elem.style.display = 'block';
    var val = 0;
    (function(){
        elem.style.opacity = val;
        val += 0.2;
        if (val <= 1) {
            setTimeout(arguments.callee, speed)
        }
    })();
}
function init2(){
    for(var i = 0;i < aLi.length;++i){
        aLi[i].style.background = "#F1F1F1";
        aLi[i].style.color = "black";
        aDiv[i].style.display = "none";
    }
}
window.onload = function() {
    for (var i = 0; i < 8; ++i) {
        p1[i].index = i;
        p1[i].onmousedown = function () {
            if (this.style.opacity < 1) {
                loop1(8);

            } else {
                fadeIn(p2[this.index], 150, 1);
                loop2(8);
            }
        }
    }

    for (var i = 0; i < aLi.length; ++i) {
        console.log(i)
        aLi[i].index = i;
        aLi[i].onmousedown = function () {
            init2();
            this.style.background = "#666666";
            this.style.color = "#FFF";
            aDiv[this.index].style.display = 'block';
        }
    }

    addButton.onclick = function (){
        var tr = document.createElement("tr");
        var tb = document.getElementById("tid");
        tr.innerHTML = "<td class='m-list1'>"+ (++lastNum)+"</td>" +
            "<td class='m-list2'>&nbsp</td>" +
            "<td class='m-list3'>Delete</td>"
        tb.appendChild(tr);
        for(var i = 0;i < del.length;++i){
            del[i].onmousedown = function (){
                var index=this.parentNode.rowIndex;
                var table = document.getElementById("tid");
                table.deleteRow(index);
            }
        }
    }


    for(var i = 0;i < del.length;++i){
        del[i].onmousedown = function (){
            var index=this.parentNode.rowIndex;
            var table = document.getElementById("tid");
            table.deleteRow(index);
        }
    }

}

