// DOM Manipulation (Part Two)

// Menu data structure
var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];

// Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector('main');

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl.style.backgroundColor = "var(--main-bg)";

// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
const h1 = document.createElement('h1');

h1.textContent = "DOM Manipulation"
mainEl.appendChild(h1);

// Add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr");

// Creating a Menu Bar
// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.getElementById("top-menu");

// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%";

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"

// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");

// Adding Menu Buttons
console.log(menuLinks);
// Iterate over the entire menuLinks array and for each "link" object:
menuLinks.forEach(function (link) {
  // Create an <a> element.
  const aItem = document.createElement('a');
  // On the new element, add an href attribute with its value set to the href property of the "link" object.
  aItem.setAttribute("href", link.href);
  // Set the new element's content to the value of the text property of the "link" object.
  aItem.textContent = link.text;
  // Append the new element to the topMenuEl element.
  topMenuEl.appendChild(aItem);

});

// Part 3: Creating the Submenu
// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.getElementById('sub-menu');

// Set the height subMenuEl element to be "100%".
subMenuEl.style.height = "100%";

// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around");

// Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = "absolute";

// Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = "0";

// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks = topMenuEl.querySelectorAll('a');

// Attach a delegated 'click' event listener to topMenuEl.
// The first line of code of the event listener function should call the event object's preventDefault() method.
// The second line of code of the function should immediately return if the element clicked was not an <a> element.
// Log the content of the <a> to verify the handler is working.

topMenuEl.addEventListener("click", function (e) {
  // Stops link
  e.preventDefault();

  // Debugging to make sure clicks are being detected
  console.log("Click on:", e.target);

  // Checks if clicked element is <a>
  if (e.target.tagName !== "A") return;

  if (e.target.classList.contains("active")) {
    e.target.classList.remove("active");
    return;
  }

  topMenuLinks.forEach(link => link.classList.remove("active"));
  e.target.classList.add("active");

  // Log clicked <a> content to verify it works
  console.log(e.target.textContent);
})