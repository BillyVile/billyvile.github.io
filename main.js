document.getElementById("cta-button").addEventListener("click", function() {
    window.location.href = "projects.html";
});

window.addEventListener("load", function(){
    var loadingScreen = document.getElementById('loading-screen');
    var loadingLogo = document.getElementById('loading-logo');

    setTimeout(function(){
        loadingLogo.style.transform = "scale(0.5)";
        loadingLogo.style.transition = "transform 1s ease-in-out";
        loadingScreen.style.opacity = "0";
        setTimeout(function(){
            loadingScreen.style.display = "none";
        }, 1000);
    }, 2000);
});
