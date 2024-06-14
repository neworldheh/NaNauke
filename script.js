function openPageO() {
    const topElement = document.querySelector('.top');
    const title_text = document.querySelector(".title")
        title_text.innerText = "Explore yourself";
        topElement.style.transition = 'height 1s';
        topElement.style.height = '100vh';
          let content= document.querySelector(".content");
    content.remove()
        setTimeout(function() {
            window.location.href = "explore.html";
        }, 3000);
  
}
function showMenu(){
    const art= window.AddElement
    let menu = documentz.querySelector('.menu');
    if (menu.Class.hide){
        show.menu
    }
}
