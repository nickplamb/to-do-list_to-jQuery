function newItem() {

  // 1. adding a new item to the list of items:
  let li = $('<li></li>');
  let inputValue = $('input').val();
  li.append(document.createTextNode(inputValue));

  inputValue === '' ? alert('You must write something!') : $('#list').append(li);

  // 2. Crossing out an item from the list of items
  function crossOut() {
    li.toggleClass('strike');
  }

  li.on('dblclick', crossOut);

  // 3.1 adding the delete button 'x'
  let crossOutButton = $('<crossoutbutton></crossoutbutton>');
  crossOutButton.append('X');
  li.append(crossOutButton);

  crossOutButton.on('click', deleteListItem);

  // 3.2 adding class DELETE (display: none) from css
  function deleteListItem() {
    li.addClass('delete');
  }

  // 4. Reorder the items
  $('#list').sortable();
}
$(document).on('keypress',function(e) {
  
  if(e.which == 13) {
    e.preventDefault();
    newItem();
  }
});