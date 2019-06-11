function include(FileDir) {
    var includejs = document.createElement("script");
    includejs.type = "text/javascript";
    includejs.src = FileDir;
    document.head.appendChild(includejs);
}

include("src/1.var.js");
include("src/2.func.js");
include("src/3.model.0.player.js");
include("src/3.model.1.fallball.js");
include("src/3.model.2.moveball.js");
include("src/3.model.3.fallballs.js");
include("src/4.loop.js");