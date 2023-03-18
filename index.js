const inputBtn = document.getElementById('input-btn')
const deleteBtn = document.getElementById('delete-btn')
const linkBtn = document.getElementById('link-btn')
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')
let myLeads = []
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


deleteBtn.addEventListener('click' , function(event){
    localStorage.clear('myLeads')
    location.reload()
})

linkBtn.addEventListener('click',function(event){
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        // since only one tab should be active and in the current window at once
        // the return variable should only have one entry
        let tab = tabs[0].url
        myLeads.push(tab)
        localStorage.setItem("myLeads" , JSON.stringify(myLeads))
        location.reload()
        console.log(myLeads);
        // let activeTabId = activeTab.id // or do whatever you need
      });
    

})



if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
    }
function render(leads) {
    let items =  ''
    // let leadsFromLocalStorage = JSON.parse(localStorage.getItem("date"))
   

    for (let i = 0 ; i < leads.length ; i++ ){
        items += `
        <li class='p-2 m-2 rounded-md bg-white '>
        <a target='_blank' href=' ${leads[i]}' class = 'border-b-2 border-blue-200 '> 
        ${leads[i]}
        <a> 
        <li>
        `
    }
    
    
    ulEl.innerHTML = items
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
    render(myLeads)   
    inputEl.value = ''
    localStorage.setItem("myLeads" , JSON.stringify(myLeads))
}
