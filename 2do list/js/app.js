// selecting  items







let addtxt = document.querySelector("#addtxt");
let addbtn = document.querySelector("#addbtn");
let savebtn = document.querySelector("#savebtn");
let notes = document.querySelector("#notes");
let saveindex = document.querySelector("#saveindex");
let searchtxt = document.querySelector("#searchtxt");

// console.log(savebtn);
addbtn.addEventListener("click",function(){
    if(addtxt.value !=0){

        let webtask = localStorage.getItem("webtask");
    
        if(webtask==null){
            taskobj = [];
        }else{
            taskobj = JSON.parse(webtask);
        }
        taskobj.push(addtxt.value);
        localStorage.setItem("webtask",JSON.stringify(taskobj));
        show();
    }
})

// show function
function show(){
    let webtask = localStorage.getItem("webtask");
    if(webtask==null){
        taskobj = [];
    }else{
        taskobj = JSON.parse(webtask);
    }
    let html = ""
    taskobj.forEach(function(element,ind){
        html += `<div class="notecard card my-2 mx-1" style="width: 18rem;">

        <div class="card-body">
            <h5 class="card-title">Note${ind+1}</h5>
            <p class="card-text">${element}</p>
            <button id="${ind}" onclick="deleted(${ind})"
             class="btn btn-primary btn-danger">Delet Note</button>
            <button id="${ind}" onclick="edited(${ind})"
             class="btn btn-success">Edit Note</button>
        </div>
    </div>`
    })
    notes.innerHTML = html;
    addtxt.value = ""
};
show();

function edited(ind){
    let webtask = localStorage.getItem("webtask");
    let taskobj = JSON.parse(webtask);

    addtxt.value = taskobj[ind];
    savebtn.style.display = "block";
    addbtn.classList.add("display-none");
    // saveindex value
    saveindex.value = ind
};

// save button 
savebtn.addEventListener("click",function(){
    if(addtxt.value !=0){

        let webtask = localStorage.getItem("webtask");
        let taskobj = JSON.parse(webtask);
        
        taskobj[saveindex.value]= addtxt.value;
        localStorage.setItem("webtask",JSON.stringify(taskobj));
        savebtn.style.display = "none";
        addbtn.classList.remove("display-none");
        show();
    }
});

// delet

function deleted(ind){
    let webtask = localStorage.getItem("webtask");
    
    if(webtask==null){
        taskobj = [];
    }else{
        taskobj = JSON.parse(webtask);
    };
   taskobj.splice(ind,1);
   localStorage.setItem("webtask",JSON.stringify(taskobj));
   show();
}

// search


searchtxt.addEventListener("input",function(e){
    console.log(searchtxt.value);
    let inputvalue = searchtxt.value;
    let notecard = document.getElementsByClassName("notecard");
    Array.from(notecard).forEach(function(e){
        let cardtxt = e.getElementsByTagName("p")[0].innerHTML
        // if(cardtxt.includes(inputvalue)){
        //     e.style.display = "block"
        // }else{
        //     e.style.display = "none"
        // }
        let re = new RegExp(inputvalue , "gi");
        if(cardtxt.match(re)){
            e.style.display = "block";
        }else{
               e.style.display = "none"
             }
    })

})