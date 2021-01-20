//select element by finding that match selector

const selectElement= (s)=>document.querySelector(s)

//open menu in click 

selectElement('.open').addEventListener('click', ()=>{

    selectElement('.nav-list').classList.add('active')
} )

//close menu in click 

selectElement('.close').addEventListener('click', ()=>{
    selectElement('.nav-list').classList.remove('active')
} )