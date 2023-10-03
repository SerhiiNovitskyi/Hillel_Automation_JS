// a[href^="https"]
//Selects every <a> element whose href attribute value begins with "https"

// a[href$=".pdf"]
// Selects every <a> element whose href attribute value ends with ".pdf"

// a[href*="w3schools"]
// Selects every <a> element whose href attribute value contains the substring "w3schools"

// p:first-child
// Selects every <p> element that is the first child of its parent

// div > p
// Selects all <p> elements where the parent is a <div> element

// div + p
// Selects all <p> elements that are placed immediately after <div> elements

// p ~ ul
// Selects every <ul> element that are preceded by a <p> element

// [target]
// Selects all elements with a target attribute

// [target=_blank]
// Selects all elements with target="_blank"

// [title~=flower]
// Selects all elements with a title attribute containing the word "flower"

// [lang|=en]
// Selects all elements with a lang attribute value starting with "en"



// -------xpath-------
//input[@type='text']				
//label[@id='message23']
//input[@value='RESET']
//*[@class='barone']
//a[@href='http://demo.guru99.com/']
//img[@src='//cdn.guru99.com/images/home/java.png']


// Contains():
// Contains() is a method used in XPath expression. It is used when the value of any attribute changes dynamically, for example, login information.

// The contain feature has an ability to find the element with partial text as shown in below example.

// In this example, we tried to identify the element by just using partial text value of the attribute. In the below XPath expression partial value 'sub' is used in place of submit button. It can be observed that the element is found successfully.

// Complete value of 'Type' is 'submit' but using only partial value 'sub'.
// *[contains(@type,'sub')]


// Starts-with function:
// Starts-with function finds the element whose attribute value

// changes on refresh or any operation on the webpage. In this expression, match the starting text of the attribute is used to find the element whose attribute changes dynamically. You can also find the element whose attribute value is static (not changes).

// For example -: Suppose the ID of particular element changes dynamically like:
// Id=" message12"
// Id=" message345"
// Id=" message8769"
// and so on.. but the initial text is same. In this case, we use Start-with expression.

// In the below expression, there are two elements with an id starting "message"(i.e., 'User-ID must not be blank' & 'Password must not be blank'). In below example, XPath finds those element whose 'ID' starting with 'message'.
// label[starts-with(@id,'message')]


// Text():
// In this expression, with text function, we find the element with exact text match as shown below. In our case, we find the element with text "UserID".
// td[text()='UserID']
