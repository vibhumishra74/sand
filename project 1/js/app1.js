const addbtn = document.getElementById("addbtn");
const addtxt = document.getElementById("addtxt");
const searchtxt = document.getElementById("searchtxt");
const noteselm = document.getElementById("notes");

addbtn.addEventListener("click",function(e){
    let notes = localStorage.getItem("notes");
    if(notes===null){
        notesobj = []
    }else{
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addtxt.value);
    localStorage.setItem("notes",JSON.stringify(notesobj));
   addtxt.value = ""
   console.log(notesobj)
   shownotes();
})

//shownotes function....

function shownotes(){
    let notes = localStorage.getItem("notes");
    if(notes === null){
        notesobj = []
    }else{
        notesobj = JSON.parse(notes);
    }
    let html = ""
    // for (let i = 0; i < notesobj.length; i++) {
    //     const element = notesobj[i];     
    // }
       notesobj.forEach(function(ele,ind){
           html += `
           <div class="notecard card my-2 mx-1" style="width: 18rem;">

                <div class="card-body">
                    <h5 class="card-title">Note${ind + 1}</h5>
                    <p class="card-text">${ele}</p>
                    <button id="${ind}" onclick="delet(this.id)"class="btn btn-primary">Delet Note</button>
                </div>
            </div>`
       })
    //    if(noteselm===null){
    //     noteselm.innerHTML = `please add something`
    //    }else if(noteselm != 0){
    //         noteselm.innerHTML = html
    //    }
    
        if(notesobj.length != 0){
            noteselm.innerHTML = html
        }else{
            noteselm.innerHTML = `please add something`
        }
} shownotes();

function delet(ind){
    console.log(ind,"-index-" ,"i'm deleting thid");
    notesobj.splice(ind,1);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    shownotes();
}