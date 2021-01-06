

// selecting item

let addbtn = document.getElementById("addbtn");
let addtxt = document.getElementById("addtxt");
let savebtn = document.getElementById("savebtn");
let getindex = document.getElementById("getindex");
let searchtxt = document.getElementById("searchtxt");


// adding event listener
addbtn.addEventListener("click",function(){
    if(addtxt.value != 0){

        let webtask = localStorage.getItem("webtask");
        if(webtask==null){
            taskobj = [];
        }else{
            taskobj = JSON.parse(webtask);
        }
        taskobj.push(addtxt.value);
        localStorage.setItem("webtask", JSON.stringify(taskobj));
        addtxt.value = ""
    }else{
       let alr = `"add something"`
       alert(alr) 
    }
    showtask();
})


// showtask function

function showtask(){
        let webtask = localStorage.getItem("webtask");
        if(webtask==null){
            taskobj = [];
        }else{
            taskobj = JSON.parse(webtask);
        }
        let html = "";
        taskobj.forEach(function(ele,ind){
            html += `<div class="notecard card my-2 mx-1" style="width: 18rem;">

            <div class="card-body">
                <h5 class="card-title">Note${ind}</h5>
                <p class="card-text">${ele}</p>
                <button href="#" onclick="deleted(${ind})"
                 class="btn btn-danger">Delet Note</button>
                <button href="#" onclick="edited(${ind})"
                 class="btn btn-success">Edit Note</button>
            </div>
        </div>`
        });
        if(taskobj !=0){

            notes.innerHTML = html;
        }else{
            notes.innerHTML = `please add something`
        }
};
showtask();

// edit notes

function edited(ind){
    let webtask = localStorage.getItem("webtask");
    taskobj = JSON.parse(webtask);
addtxt.value = taskobj[ind]
savebtn.classList.remove("none")
addbtn.style.display = "none"
getindex.value = ind
}

// save notes

savebtn.addEventListener("click",function(){
let webtask = localStorage.getItem("webtask");
 let taskobj = JSON.parse(webtask);
    let getin = getindex.value; 
taskobj[getin] = addtxt.value;  //after editing value gews to the location
localStorage.setItem("webtask",JSON.stringify(taskobj));

savebtn.classList.add("none")
addbtn.style.display = "block"
addtxt.value = ""
showtask();
})

// deleted function

function deleted(ind){
    let webtask = localStorage.getItem("webtask");                 
    if(webtask==null){
        taskobj = [];
    }else{
        taskobj = JSON.parse(webtask);
    }
    taskobj.splice(ind,1);
    localStorage.setItem("webtask",JSON.stringify(taskobj));
    showtask();
}

// search 

searchtxt.addEventListener("input",function(){
    let searchvalue = searchtxt.value;
   let notecard = document.querySelectorAll(".notecard");
   Array.from(notecard).forEach(function(e){
       let cardtxt = e.getElementsByTagName("p")[0].innerHTML
       if(cardtxt.includes(searchvalue)){
          e.style.display = "block"
       }else{
           e.style.display = "none"
       }
   })
})