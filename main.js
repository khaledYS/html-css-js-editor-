function html() {
    var demo = document.getElementById("demo");
    var ingoogle = document.getElementById("ingoogle");
    demo.innerHTML = ingoogle.value ;
}
setTimeout(html, 10);