function openPageO() {
    const topElement = document.querySelector('.top');
    const title_text = document.querySelector(".title")
        title_text.innerText = "Explore yourself";
        topElement.style.transition = 'height 1s';
        topElement.style.height = '100vh';
        setTimeout(function() {
            window.location.href = "explore.html";
        }, 3000);
}