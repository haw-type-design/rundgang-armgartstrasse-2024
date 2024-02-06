window.addEventListener('load', () => {
    document.getElementById("magenta").addEventListener("click", function () {
        document.querySelectorAll("body")[0].style.color = "magenta";
        this.classList.add("active");
        document.getElementById("black").classList.remove("active");
        document.getElementById("olive").classList.remove("active");
    });

    document.getElementById("olive").addEventListener("click", function () {
        document.querySelectorAll("body")[0].style.color = "olive";
        this.classList.add("active");
        document.getElementById("magenta").classList.remove("active");
        document.getElementById("black").classList.remove("active");
    });

    document.getElementById("black").addEventListener("click", function () {
        document.querySelectorAll("body")[0].style.color = "black";
        this.classList.add("active");
        document.getElementById("magenta").classList.remove("active");
        document.getElementById("olive").classList.remove("active");
    });
});