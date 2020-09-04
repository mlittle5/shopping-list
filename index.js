'use strict';

// const STORE = [
//   {id: cuid(), name: "apples", checked: false},
//   {id: cuid(), name: "oranges", checked: false},
//   {id: cuid(), name: "milk", checked: true},
//   {id: cuid(), name: "bread", checked: false}
// ];


function generateItemElement(item) {
  return `<li>
  <span class="shopping-item">apples</span>
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
    let list = $('.shopping-list');
    let item = generateItemElement('TODO');
    $(list).append(item);
  })
}






// function generateShoppingItemsString(shoppingList) {
//   console.log("Generating shopping list element");

//   const items = shoppingList.map((item) => generateItemElement(item));
  
//   return items.join("");
// }


// function renderShoppingList() {
//   // render the shopping list in the DOM
//   console.log('`renderShoppingList` ran');
//   const shoppingListItemsString = generateShoppingItemsString(STORE);

//   // insert that HTML into the DOM
//   $('.js-shopping-list').html(shoppingListItemsString);
// }


// function addItemToShoppingList(itemName) {
//   console.log(`Adding "${itemName}" to shopping list`);
//   STORE.push({id: cuid(), name: itemName, checked: false});
// }

// function handleNewItemSubmit() {
//   $('#js-shopping-list-form').submit(function(event) {
//     event.preventDefault();
//     console.log('`handleNewItemSubmit` ran');
//     const newItemName = $('.js-shopping-list-entry').val();
//     $('.js-shopping-list-entry').val('');
//     addItemToShoppingList(newItemName);
//     renderShoppingList();
//   });
// }

// function toggleCheckedForListItem(itemId) {
//   console.log("Toggling checked property for item with id " + itemId);
//   const item = STORE.find(item => item.id === itemId);
//   item.checked = !item.checked;
// }


// function getItemIdFromElement(item) {
//   return $(item)
//     .closest('li')
//     .data('item-id');
// }

// function handleItemCheckClicked() {
//   $('.js-shopping-list').on('click', `.js-item-toggle`, event => {
//     console.log('`handleItemCheckClicked` ran');
//     const id = getItemIdFromElement(event.currentTarget);
//     toggleCheckedForListItem(id);
//     renderShoppingList();
//   });
// }

// function removeItemFromList(itemId) {
//     console.log("removing item with id " + itemId);
//     const itemIndex = STORE.findIndex(item => item.id === itemId);
//     STORE.splice(itemIndex, 1);
// }
// function handleDeleteItemClicked() {
//   // this function will be responsible for when users want to delete a shopping list
//   // item
//   $('.js-shopping-list').on('click', `.js-item-delete`, event => {
//       console.log('`handleDeleteitemClicked` ran');
//       const id = getItemIdFromElement(event.currentTarget);
//       removeItemFromList(id);
//       renderShoppingList();
//   });
// }

// // this function will be our callback when the page loads. it's responsible for
// // initially rendering the shopping list, and activating our individual functions
// // that handle new item submission and user clicks on the "check" and "delete" buttons
// // for individual shopping list items.
 function handleShoppingList() {
  setupAddItem();
  //  renderShoppingList();
  //  handleNewItemSubmit();
  //  handleItemCheckClicked();
  //  handleDeleteItemClicked();
 }

// // when the page loads, call `handleShoppingList`

$(handleShoppingList);