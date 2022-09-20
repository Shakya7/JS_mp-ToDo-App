let inputText=document.querySelector("input");
let addBtn=document.querySelector(".addButton");
let container=document.querySelector(".container");

//Creating a note consisting of note field, edit, delete, save, cancel buttons
function createElement(val){
    let block=document.createElement("div");

    let inpDiv=document.createElement("input");
    inpDiv.classList.add("item_input");
    inpDiv.setAttribute("value",val);
    inpDiv.disabled=true;

    let editDeleteDiv=document.createElement("p");
    editDeleteDiv.classList.add("editDelete")

    let edit=document.createElement("span");
    edit.classList.add("editButton");
    edit.innerText="EDIT";

    let del=document.createElement("span");
    del.classList.add("deleteButton");
    del.innerText="DELETE";

    editDeleteDiv.appendChild(edit);
    editDeleteDiv.appendChild(del);

    let saveCancelP=document.createElement("p");
    saveCancelP.classList.add("saveCancel");

    let save=document.createElement("span");
    save.classList.add("saveButton");
    save.innerText="SAVE";

    let cancel=document.createElement("span");
    cancel.classList.add("cancelButton");
    cancel.innerText="CANCEL";

    saveCancelP.appendChild(save);
    saveCancelP.appendChild(cancel);
    
    saveCancelP.classList.add("hidden");

    block.appendChild(inpDiv);
    block.appendChild(editDeleteDiv);
    block.appendChild(saveCancelP);
    

    block.classList.add("item");

    container.appendChild(block);
    
}


addBtn.addEventListener("click",()=>{
    if(inputText.value=="")
        alert("Empty notes are not allowed to be added. Please write a note first");
    else{
        createElement(inputText.value); 
        inputText.value="";   //Deleting the text in input after adding to list
        let delElems = document.getElementsByClassName("deleteButton");
        let editElems=document.getElementsByClassName("editButton");
        let saveElems=document.getElementsByClassName("saveButton");
        let cancelElems=document.getElementsByClassName("cancelButton");
        
        //Edit button functionalities
        Array.from(editElems).forEach((el)=>el.addEventListener("click",function(){
            console.log(this);
            this.parentElement.classList.add("hidden");
            this.parentElement.parentElement.firstChild.disabled=false;
            const end = this.parentElement.parentElement.firstChild.value.length;
            this.parentElement.parentElement.firstChild.setSelectionRange(end, end);
            this.parentElement.parentElement.firstChild.focus();
            this.parentElement.parentElement.firstChild.setAttribute("initialVal",this.parentElement.parentElement.firstChild.value);
            this.parentElement.parentElement.lastChild.classList.remove("hidden");
        }))
        
        //Delete button functionalities
        Array.from(delElems).forEach((el)=>el.addEventListener("click",function(){
            this.parentElement.parentElement.remove();
        }))

        //Save button functionalities
        Array.from(saveElems).forEach((el)=>el.addEventListener("click",function(){
            //this.parentElement.parentElement.firstChild.removeAttribute("initialVal");
            this.parentElement.classList.add("hidden");
            this.parentElement.parentElement.firstChild.disabled=true;
            this.parentElement.parentElement.firstChild.setAttribute("value",this.parentElement.parentElement.firstChild.value);
            this.parentElement.parentElement.firstChild.nextSibling.classList.remove("hidden");
        }))

        //Cancel button functionalities
        Array.from(cancelElems).forEach((el)=>el.addEventListener("click",function(){
            this.parentElement.parentElement.firstChild.value=this.parentElement.parentElement.firstChild.getAttribute("initialVal");
            //this.parentElement.parentElement.firstChild.removeAttribute("initialVal");
            this.parentElement.classList.add("hidden");
            this.parentElement.parentElement.firstChild.disabled=true;
            this.parentElement.parentElement.firstChild.nextSibling.classList.remove("hidden");
        }))
    }
})



