 
 eventListerners()
 function eventListerners() {
    let ui = new UI()
    document.querySelector('.checkbox').addEventListener('click', function () {
         ui.toggleClick()
    })
}

//constructor function UI 
function UI() { };
//UI methods
UI.prototype.toggleClick = () => {
    if (document.querySelector('input[type=checkbox]').checked){
        document.querySelector('.basic').textContent = "19.99"
        document.querySelector('.professional').textContent = "24.99"
        document.querySelector('.master').textContent = "39.99"
    }else{
        document.querySelector('.basic').textContent = "199.99"
        document.querySelector('.professional').textContent = "249.99"
        document.querySelector('.master').textContent = "399.99"
        
    }
 }