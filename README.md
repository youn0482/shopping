# Grocery List
Final for MAD9014
#### _by Matt Young (youn0482)_

This application prevents you from ever forgetting to pick something up from the store again by allowing you to create a grocery list that you can view at any time later.

##### _Instructions_

1. Open the app.
2. Select the text input field at the bottom of the app.
3. Enter in your item and click the **Add** button.
4. Add as many items as you want!
5. When at the store you can click on your item to cross it off your list.
6. To remove an item click the "**X**" beside the item on the list.
7. To clear the whole list, click the _garbage can_ icon.
8. Enjoy the app!

##### _Code Explanation_

- When the app has loaded, it checks to see if there is a grocery list already saved in local storage. If there is, it is loaded.
- Then the _showList_ function is called and a loop that runs through the length of the loaded list creates element containers to hold the items.
- When the **Add** button is clicked, a variable is created to contain the _value_ of what's in the input field. This variable is pushed into the working list array and then added to the local storage as well. The input field is reset and the _showList_ function is called again to display the new list with the added item.
- When an item is clicked on the list, function _gotItem_ is called which assigns a class the item that applies CSS properties to "_check_" it off the list.
- When the user clicks the "**X**" icon beside an item, the desired item to be deleted is saved in a string variable and then is looped through the stored list to find it's match. When found, the item is removed from working list, the html elements are removed and the local storage list is updated.
- When the _garbage can_ icon is clicked, the whole list clears, and the local storage list is cleared aswell.


I hope you enjoy the app.



