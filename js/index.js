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

// ::: ::: ::: Code Changes Start Here ::: ::: ::: //

// Footer: Update the footer content 
let footer = document.getElementsByTagName('footer');
footer.innerText = siteContent["footer"]["copyright"];


// ::: ::: ::: Query Selectors ::: ::: :::

// navigation
const navigation = document.querySelectorAll('a');

// header
const header = document.querySelector('header');

// cta
const cta_h1 = document.querySelector('h1')
const cta_button = document.querySelector('button');
const cta_image = document.getElementById('cta-img');

// main-content
let main_content_h4 = document.querySelectorAll('h4');
let main_content_text = document.querySelectorAll('.text-content');

// middle-img
const middle_img = document.getElementById('middle-img');

// contact
const contact = document.querySelector('.contact');


// ::: ::: ::: Create Selectors ::: ::: ::: 
// navigation
let nav_item_1 = document.createTextNode('Services');
let nav_item_2 = document.createTextNode('Vision');
let nav_item_3 = document.createTextNode('Features');
let nav_item_4 = document.createTextNode('About');
let nav_item_5 = document.createTextNode('Contact');


// cta
let cta_h1_text = document.createTextNode('DOM Is Awesome');
let cta_button_text = document.createTextNode('Get Started');



// ::: ::: ::: Append Selectors ::: ::: :::

// navigation
navigation[5].appendChild(nav_item_5);
navigation[4].appendChild(nav_item_4);
navigation[3].appendChild(nav_item_3);
navigation[2].appendChild(nav_item_2);
navigation[1].appendChild(nav_item_1);


// header: stretch
header.style.backgroundColor = 'dodgerblue';
header.style.borderRadius = '20px';

// cta
cta_h1.appendChild(cta_h1_text);
cta_button.appendChild(cta_button_text);



// ::: ::: ::: Add new content ::: ::: :::

// navigation
navigation.forEach(a => {a.style.color = 'green'})

// main-content: h4
main_content_h4[0].textContent = siteContent["main-content"]["features-h4"];
main_content_h4[1].textContent = siteContent["main-content"]["about-h4"];
main_content_h4[2].textContent = siteContent["main-content"]["services-h4"];
main_content_h4[3].textContent = siteContent["main-content"]["product-h4"];
main_content_h4[4].textContent = siteContent["main-content"]["vision-h4"];

// main-content: p
main_content_text[0].querySelector('p').textContent = siteContent["main-content"]["features-content"];
main_content_text[1].querySelector('p').textContent = siteContent["main-content"]["about-content"];
main_content_text[2].querySelector('p').textContent = siteContent["main-content"]["services-content"];
main_content_text[3].querySelector('p').textContent = siteContent["main-content"]["product-content"];
main_content_text[4].querySelector('p').textContent = siteContent["main-content"]["vision-content"];

// contact: h4
main_content_h4[5].textContent = siteContent["contact"]["contact-h4"];

// navigation: stretch
navigation.forEach(a => {a.style.fontWeight = 'bold'});
navigation.forEach(a => {a.style.backgroundColor = '#f5f5f5'})
navigation.forEach(a => {a.style.borderRadius = '20px'})

// cta
cta_image.setAttribute('src', siteContent["cta"]["img-src"])

// main-content
middle_img.setAttribute('src', siteContent["main-content"]["middle-img-src"])