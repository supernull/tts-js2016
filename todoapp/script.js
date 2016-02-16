// Let's create a simple todo application
//
// Show an unordered list of todo's
// Show an input to enter a new todo
// Show a button to add a todo. When the button is clicked:
// The text from the input box is used to add a list item to the bottom of the list
// The text from the input box is cleared out.
// When the user clicks on a list item, it is removed// Extra Credit: - When a list item is clicked, cross it out, then remove it after 1 second.


function addNewItem() {
      var newItem = document.createElement('li');
      newItem.innerHTML = document.querySelector('#newItem').value;
      list.appendChild(newItem);
      document.querySelector('#newItem').value = ''; }

var listAdd = document.querySelector("#addNewItem");

listAdd.addEventListener("click",addNewItem);

document.querySelector("#list").addEventListener("click",function(e){
  var el=e.target;
  el.className= 'strike';
  window.setInterval(
    function() {
      el.remove(); },1000);
});
