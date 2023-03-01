window.addEventListener('load', () => {
    const form = document.querySelector("#task-form")
    const input = document.querySelector("#task-input")
    const list_el= document.querySelector("#tasks")
    

    form.addEventListener('submit', (e) =>{
        e.preventDefault();

        const task = input.value;

        if (!task){
            alert("Please fill out this field");
            return;      
        }
        const task_el= document.createElement("div")
        task_el.classList.add("task")

        const task_content_el= document.createElement("div");
        task_content_el.classList.add("content")
      /*  task_content_el.innerHTML = task;*/
      

        task_el.appendChild(task_content_el)

        

       const taskinput= document.createElement("input")
        taskinput.classList.add("text");
        taskinput.type = "text"
        taskinput.value = task
        taskinput.setAttribute("readonly", "readonly")
        task_content_el.appendChild(taskinput)

         const taskaction = document.createElement("div")
         taskaction.classList.add("actions"); 

         const taskedit = document.createElement("button");
         taskedit.classList.add("edit");  
         taskedit.innerHTML = "Edit";

         const taskdelete = document.createElement("button");
         taskdelete.classList.add("delete");  
         taskdelete.innerHTML = "Delete"
         taskaction.appendChild(taskedit)
         taskaction.appendChild(taskdelete)

         task_el.appendChild(taskaction)

       
       
         list_el.appendChild(task_el)
         input.value = "";

         taskedit.addEventListener('click', () => {
          if(taskedit.innerText.toLowerCase( ) == "edit"){
            taskinput.removeAttribute("readonly")
            taskinput.focus()
            taskedit.innerText = "Save"
            
          }else{
            taskinput.setAttribute("readonly", "readonly")
            taskinput.focus()
            taskedit.innerText = "Edit"
          }
        
         })
         taskdelete.addEventListener('click', ()=>{
          list_el.removeChild(task_el)
         })

         
      })
    })
        
   


console.log ("hello world")