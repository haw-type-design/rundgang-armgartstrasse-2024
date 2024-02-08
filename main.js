window.addEventListener('load', () => {
    document.getElementById("magenta").addEventListener("click", function () {
        document.querySelectorAll("body")[0].style.color = "#E6007D";
        this.classList.add("active");
        document.getElementById("black").classList.remove("active");
        document.getElementById("olive").classList.remove("active");
    });

    document.getElementById("olive").addEventListener("click", function () {
        document.querySelectorAll("body")[0].style.color = "#81803B";
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
    
     document.getElementById("print").addEventListener("click", function () {
       window.print();
    });

    var ce = document.querySelectorAll('[contenteditable]')
    ce.forEach((item) => {
        item.addEventListener('paste', function (e) {
            e.preventDefault()
            var text = e.clipboardData.getData('text/plain')
            document.execCommand('insertText', false, text)
        })
    });
});