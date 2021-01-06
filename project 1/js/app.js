// console.log("this is app.js ")
// console.log(localStorage.clear);
shownotes();
let addbtn = document.getElementById("addbtn");
let addtxt = document.getElementById("addtxt");
let searchtxt = document.getElementById("searchtxt")

// addtxt.addEventListener("keyup",function(e){
//     if(e.keycode===13){
//         e.preventDefault();
//        document.getElementById("addbtn").click();
//     }
// });

// addbtn.addEventListener("click",function(e){
//     let addtxt = document.getElementById("addtxt");
//     let notes;
//     if(localStorage.getItem("notes")===null){
//         notes = []
//     }else{
//         notes = JSON.parse(localStorage.getItem("notes"));
//     }
//     notes.push(e);
//     localStorage.setItem("notes",JSON.stringify(notes))
// })

addbtn.addEventListener("click", function (e) {

    let notes = localStorage.getItem("notes");
    if (notes === null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj))

    addtxt.value = ""
    shownotes();
    console.log(notesobj);
})

// function to show from local storage
        
function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes === null) {
        notesobj = []
    } else {
        notesobj = JSON.parse(notes);
    }
    let html = ""
    notesobj.forEach(function (ele, ind) {
        html += `
        <div class="notecard card my-2 mx-1" style="width: 18rem;">

        <div class="card-body">
            <h5 class="card-title">Note ${ind + 1}</h5>
            <p class="card-text"> ${ele}</p>
            <button id="${ind}" onclick="delnote(this.id)" class="btn btn-primary">Delet Note</button>
            <button id="${ind}" onclick="completednote(this.id)" class="completed-btn btn btn-success ">complet Note</button>
        </div>
    </div> `;
    });
    let noteselm = document.getElementById("notes");
    if (notesobj.length != 0) {  //notesele may be there 
        noteselm.innerHTML = html;
    }else{
        noteselm.innerHTML = `Nothing to show please add some Notes 
        By clicking 'Add Notes..'`
    }
}

//function to delet notes

function delnote(ind){
   
   
    console.log("i'm deleting",ind)

    let notes = localStorage.getItem("notes");
    if(notes===null){
        notesobj = []
    }else{
        notesobj = JSON.parse(notes);
    };

    notesobj.splice(ind,1);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    shownotes();
  
};

//completed

// function completednote(ind){
   
   
//     console.log("i'm completing",ind)

//     let notes = localStorage.getItem("notes");
//     if(notes===null){
//         notesobj = []
//     }else{
//         notesobj = JSON.parse(notes);
//     };

//     notesobj.style.background="red"
  
//     localStorage.setItem("notes",JSON.stringify(notesobj));
//     shownotes();
// }

//search bar
 function search(){
  
    searchtxt.addEventListener("input",function(){
        let inputvalue = searchtxt.value
        console.log("input event",inputvalue);
        let notecard = document.getElementsByClassName("notecard");
        Array.from(notecard).forEach(function(ele){
                let cardtxt = ele.getElementsByTagName("p")[0].innerText
                if(cardtxt.includes(inputvalue)){
                    ele.style.display = "block"
                }else{
                    ele.style.display = "none"
                }
                console.log(cardtxt);
                cardtxt = inputvalue
        })
    })
     
 }
 search();