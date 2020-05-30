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
        document.getElementById("us").style.animationIterationCount = "1";
        this.document.getElementById("us").style.opacity = "1";
        document.getElementById("usline").style.animationName = "enter-right";
        document.getElementById("usline").style.animationDuration = "1s";
        document.getElementById("usline").style.animationIterationCount = "1";
    }
});

window.addEventListener('scroll', function (event) {
    if (window.scrollY > 30) {
        //console.log("ya")
        // Animar
    }
});
