// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

// Part 1: Getting Started
// 1. Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector('main');

// 2. Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl.style.backgroundColor = "var(--main-bg)";

// 3. Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
const h1 = document.createElement('h1');

h1.textContent = "DOM Manipulation"
mainEl.appendChild(h1);

// 4. Add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr");

// Part 2: Creating a Menu Bar
// 1. Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.getElementById("top-menu");

// 2. Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%";

// 3. Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"

// 4. Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");

// Part 3: Adding Menu Buttons
console.log(menuLinks);
// 1. Iterate over the entire menuLinks array and for each "link" object:
menuLinks.forEach(function(link) {
    // 2. Create an <a> element.
    const aItem = document.createElement('a');
    // 3. On the new element, add an href attribute with its value set to the href property of the "link" object.
    aItem.setAttribute("href", link.href);
    // 4. Set the new element's content to the value of the text property of the "link" object.
    aItem.textContent = link.text;
    // 5. Append the new element to the topMenuEl element.
    topMenuEl.appendChild(aItem);
 
});