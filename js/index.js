const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])




// Query Selectors:
// navigation
const navigation = document.querySelectorAll('a');

// cta
const cta_h1 = document.querySelector('h1')
const cta_button = document.querySelector('button');

// main-content

// middle-img
const middle_img = document.getElementById('middle-img')

// Create Selectors:
// navigation
let nav_item_1 = document.createTextNode('Services');
let nav_item_2 = document.createTextNode('Vision');
let nav_item_3 = document.createTextNode('Features');
let nav_item_4 = document.createTextNode('About');
let nav_item_5 = document.createTextNode('Contact');

// cta
let cta_h1_text = document.createTextNode('DOM Is Awesome');
let cta_button_text = document.createTextNode('Get Started');



// Append Selectors:
// navigation
navigation[5].appendChild(nav_item_5);
navigation[4].appendChild(nav_item_4);
navigation[3].appendChild(nav_item_3);
navigation[2].appendChild(nav_item_2);
navigation[1].appendChild(nav_item_1);

// cta
cta_h1.appendChild(cta_h1_text);
cta_button.appendChild(cta_button_text);

// Add new content:
// navigation
navigation.forEach(a => {a.style.color = 'green'})

// cta

// main-content
middle_img.setAttribute('src', 'img/mid-page-accent.jpg')