// DOM Manipulation (Part Two)

// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
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
menuLinks.forEach(function(link) {
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