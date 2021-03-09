document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('p').addEventListener('click',set)

    function set(){
        console.log(this.textContent)
    }
})