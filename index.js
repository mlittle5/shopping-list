'use strict';


const STORE = [
    {id: cuid(), name: "apples", checked: false},
    {id: cuid(), name: "oranges", checked: false},
    {id: cuid(), name: "milk", checked: true},
    {id: cuid(), name: "bread", checked: false}
  ];

// const STORE = [
//     {name: "apples", checked: false},
//     {name: "oranges", checked: false},
//     {name: "milk", checked: true},
//     {name: "bread", checked: false}
//   ];

  function generateItemElement(item) {
    return `
      <li data-item-id="${item.id}">
        <span class="shopping-item ${item.checked ? "shopping-item__checked" : ''}">${item.name}</span>
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


  function generateShoppingItemsString(shoppingList) {
    console.log("Generating shopping list element");
  
    const items = shoppingList.map((item) => generateItemElement(item));
    
    return items.join("");
  }
  

function renderShoppingList() {
    // this function will be responsible for rendering the shopping list in
    // the DOM
    console.log('`renderShoppingList` ran');
    const shoppingListItemsString = generateShoppingItemsString(STORE);

  // insert that HTML into the DOM
  $('.shopping-list').html(shoppingListItemsString);
  }
  
  
  function addItemToShoppingList(itemName) {
    console.log(`Adding "${itemName}" to shopping list`);
    STORE.push({name: itemName, checked: false});
  }
  
  function handleNewItemSubmit() {
    $('#js-shopping-list-form').submit(function(event) {
      event.preventDefault();
      console.log('`handleNewItemSubmit` ran');
      const newItemName = $('#shopping-list-entry').val();
      $('#shopping-list-entry').val('');
      addItemToShoppingList(newItemName);
      renderShoppingList();
    });
  }
  
  function toggleCheckedForListItem(itemId) {
    console.log("Toggling checked property for item with id " + itemId);
    const item = STORE.find(item => item.id === itemId);
    item.checked = !item.checked;
  }

  function getItemIdFromElement(item) {
    return $(item)
      .closest('li')
      .data('item-id');
  }

  function handleItemCheckClicked() {
    $('.shopping-list').on('click', `.shopping-item-toggle`, event => {
      console.log('`handleItemCheckClicked` ran');
      const id = getItemIdFromElement(event.currentTarget);
      toggleCheckedForListItem(id);
      renderShoppingList();
    });
  }
  
  
  function deleteListItem(itemId) {
  console.log(`Deleting item with id  ${itemId} from shopping list`)

  // as with `addItemToShoppingLIst`, this function also has the side effect of
  // mutating the global STORE value.
  //
  // First we find the index of the item with the specified id using the native
  // Array.prototype.findIndex() method. Then we call `.splice` at the index of 
  // the list item we want to remove, with a removeCount of 1.
  const itemIndex = STORE.findIndex(item => item.id === itemId);
  STORE.splice(itemIndex, 1);
}


function handleDeleteItemClicked() {
  // like in `handleItemCheckClicked`, we use event delegation
  $('.shopping-list').on('click', '.shopping-item-delete', event => {
    // get the ID of the item from the HTML
    const itemId = getItemIdFromElement(event.currentTarget);
    // delete the item
    deleteListItem(itemId);
    // render the updated shopping list
    renderShoppingList();
  });
}
  
  // this function will be our callback when the page loads. it's responsible for
  // initially rendering the shopping list, and activating our individual functions
  // that handle new item submission and user clicks on the "check" and "delete" buttons
  // for individual shopping list items.
    function handleShoppingList() {
        renderShoppingList();
        handleNewItemSubmit();
        handleItemCheckClicked();
        handleDeleteItemClicked();
      }
  
      $(handleShoppingList);