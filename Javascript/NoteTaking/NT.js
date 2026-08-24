const Notetitle =document.querySelector("#Note")
const description = document.querySelector("#description")
const mainContainer = document.querySelector('.mainContainer');
const form = document.querySelector('form');
const TotalNotes= document.querySelector('.TotalNotes');

let Notes= []
form.addEventListener('submit',function(event){
   event.preventdefault()

   let note = {
        Note : Notetitle.Value,
        description : description.value,
   }
   Notes.push(note)
   displayNotes()
   //form.reset()


})
 