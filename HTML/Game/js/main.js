function include(FileDir) {
    var includejs = document.createElement("script");
    includejs.type = "text/javascript";
    includejs.src = FileDir;
    document.head.appendChild(includejs);
}

function RendomPlusOrMinus() {
    number = parseInt(Math.random()*2);
    if(number  == 0) {
        number--;
    }
    return number;
}

include("js/model.js");
include("js/control.js");