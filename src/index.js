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



