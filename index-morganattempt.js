'use strict';


function generateItemElement(item) {
  return `<li>
  <span class="shopping-item">${item}</span>
  <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
      <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
      <span class="button-label">delete</span>
    </button>
  </div>
</li>`;
}


function setupAddItem() {
  $('#js-shopping-list-form').submit( (e)=> {
    e.preventDefault();
        let itemName = $('#shopping-list-entry').val();
        $('shopping-list').append(generateItemElement + itemName);
  }
    
    //  TODO add stuff
    //handle checked
    function handleChecked () {
    $( ".shopping-item-toggle" ).click( function() {
    $( this ).toggleClass( ".shopping-item" );
     });
    }
    // //handle delete - code stuff
    $(listItem).children(".remove").click(function (e) {
    $(e.currentTarget).parent().remove();
    });
    // //there are two of these
    //})
    $(list).append(item);
  })




// // this function will be our callback when the page loads. it's responsible for
// // initially rendering the shopping list, and activating our individual functions
// // that handle new item submission and user clicks on the "check" and "delete" buttons
// // for individual shopping list items.
 function handleShoppingList() {
  setupAddItem();
  setupClickHandlers();
  //  renderShoppingList();
  //  handleNewItemSubmit();
  //  handleItemCheckClicked();
  //  handleDeleteItemClicked();
 }

// // when the page loads, call `handleShoppingList`

$(handleShoppingList);