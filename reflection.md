[A link to my web site](http://pdynowski.github.io)

> What did you learn about CSS padding, borders, and margin by doing this challenge?

In the course of doing this challenge, I learned about the box model of styling HTML elements with CSS. From the element outward, there is padding, then the border, then the margin. The size of each can be defined separately, giving the designer better control over the look of the webpage. The visible parts of the model are the element itself and (potentially) the border. Padding defines the spacing between the element itself and the border; margin defines the spacing between the element's box and the next element's box.

> What did you learn about CSS positioning?

Mostly, I learned that CSS positioning is kind of a pain in the ass. More specifically, and less facetiously, I learned about the different types of positioning in CSS: static, relative, absolute, and fixed. 
* Static positioning is the default setting, placing the element wherever it naturally falls in the flow of elements on the page. 
* Relative positioning allows the designer to move elements, defined relative to the static positioning. 
* Absolute positioning allows elements to be placed in reference to an ancestor element that is not statically positioned - ie, one that has been positioned manually (relative, fixed, or absolute). If there are no ancestor elements that have been positioned manually, absolute positioning is placed in reference to the body of the document itself.
* Fixed positioning places an element at a certain location within the viewing window. The element will not move as the window scrolls. Often useful for headers, footers, and navbars.

> What aspects of your design did you find easiest to implement? What was most difficult?

The thing that turned out to be simplest was actually adding the blog navigation aside; it fell right where it was supposed to, and needed only a little cosmetic tweaking. The most difficult things were the linkbars in the header - getting those into the correct position was a bear, and the positioning still breaks if you shrink the desktop browser window too small (if the headline text starts wrapping, it pushes everything out of line, and I haven't figured out how to fix that just yet.)

> What did you learn about adding and formatting elements with CSS in this challenge?

I learned that it's generally much easier/cleaner/simpler to be very specific when you're defining styles for elements. It's easier because you know exactly what you're changing, cleaner because it keeps styles from fighting with each other in surprising ways, and simpler because it means you don't have to try to figure out why styles are fighting each other in surprising ways.