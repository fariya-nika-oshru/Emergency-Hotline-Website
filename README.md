1. difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll : 
    getElementById : select or access an element only by its unique ID, returns null if not found 
    getElementsByClassName :  select all the elements within the class, update if DOM changes
    querySelector : select the 1st element that matches a CSS selector, returns single element or null if not found
    querySelectorAll : select all the elements that match a CSS selector, returns nodelist

2. Create and insert a new element into the DOM :
   creation : document.createElement("tagName")
   add content : element.setAttribute() or element.innerHTML = ` (html code here) ` or any other approch
   insert into DOM :  using the appendChild function
   
3. Event Bubbling : when an event occurs on an element, it start searching from the root to the leaf nodes seeking the target element. Then after finding the
                   element it bubbles up or return upto the root through covering their parent element or successors.

4. Event Delegation : if we attach a single event listener to the parent element instead of attaching it directly to individual child elements, the
                      process is called Event Delegation.
                      usage : performance boost - the fewer the event listeners, the less memory and the faster the execution
                      as a parent is always there, it can add works for elements with JS later
                      easier to manage, cleaner code

5. Difference between preventDefault() and stopPropagation() :
     preventDefault() : stops the default browser behavior of an element such as preventing a form from submitting, but does not stop the event from bubbling up.
     stopPropagation() : stops the event from bubbling up but the default behaviour will still happen.
