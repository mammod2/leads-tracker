const inputBtn = document.getElementById('input-btn')
const deleteBtn = document.getElementById('delete-btn')
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')
let myLeads = []
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


deleteBtn.addEventListener('click' , function(event){
    localStorage.clear('myLeads')
    location.reload()
})





if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    console.log("something should happen");
    render()
    }

inputEl.addEventListener("keypress" , function(event) {
    if (inputEl.value === ''){
        return
    }
    
    if (event.key ==="Enter"){
        inputBtn.click()
    }
})


inputBtn.addEventListener('click' , saveLead)
function saveLead(){
    if (inputEl.value === ''){
        return
    }
    const val = inputEl.value
    myLeads.push(val)
    render()   
    inputEl.value = ''
    localStorage.setItem("myLeads" , JSON.stringify(myLeads))
}
function render() {
    let items =  ''
    // let leadsFromLocalStorage = JSON.parse(localStorage.getItem("date"))
   

    for (let i = 0 ; i < myLeads.length ; i++ ){
        items += `
        <li class='p-2 m-2 rounded-md bg-white '>
        <a target='_blank' href=' ${myLeads[i]}' class = 'border-b-2 border-blue-200 '> 
        ${myLeads[i]}
        <a> 
        <li>
        `
    }
    
    console.log(myLeads);
    
    ulEl.innerHTML = items
}
