var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};



window.addEventListener('scroll', function (event) {
    if (isInViewport(document.getElementById("us"))) {
        //console.log("is visible")
        // Animar
        document.getElementById("us").style.animationName = "enter-title";
        document.getElementById("us").style.animationDuration = "3s";
        this.document.getElementById("us").style.opacity = "1";
        document.getElementById("usline").style.animationName = "enter-right";
        document.getElementById("usline").style.animationDuration = "1s";
    }
});

window.addEventListener('scroll', function (event) {
    if (window.scrollY > 30) {
        //console.log("ya")
        // Animar
        this.document.getElementById("navbar").style.backgroundColor = "DarkSlateBlue"; 
    }
    else{
        this.document.getElementById("navbar").style.backgroundColor = "transparent"; 
    }
});

function sideCover() {
    var myEle = document.getElementById("cover");
    if(myEle!=null){
        document.getElementById('cover').style.display = "block"
        document.getElementById('sidebar').style.display = "block"
    }
    else{
        var sideDiv = document.createElement("BUTTON");
        sideDiv.setAttribute('id', 'cover')
        sideDiv.setAttribute('class', 'side-cover')
        sideDiv.setAttribute('onclick', 'hideSideCover()')
        document.body.appendChild(sideDiv)

        var sidebar = document.createElement("ASIDE");
        sidebar.setAttribute('id', 'sidebar')
        sidebar.setAttribute('class', 'navigation-drawer')
        document.body.appendChild(sidebar)
        sidebar.innerHTML = "<div>hola</div>"
        
    } 
}

function hideSideCover() {
    document.getElementById('cover').style.display = "none"
    document.getElementById('sidebar').style.display = "none"
  }