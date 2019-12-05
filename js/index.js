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
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// ::: ::: ::: Code Changes Start Here ::: ::: ::: //


// ::: ::: ::: Query Selectors ::: ::: :::

// nav
const nav = document.querySelector('nav');
// navigation
const navigation = document.querySelectorAll('a');

// header
const header = document.querySelector('header');

// cta
const cta_h1 = document.querySelector('h1')
const cta_button = document.querySelector('button');
const cta_image = document.getElementById('cta-img');

// main-content
const main_content_h4 = document.querySelectorAll('h4');
const main_content_text = document.querySelectorAll('.text-content');

// middle-img
const middle_img = document.getElementById('middle-img');

// contact
const contact = document.querySelector('.contact');

// footer
const footer = document.querySelector('footer');



// ::: ::: ::: Create Selectors ::: ::: ::: 

// navigation
const nav_item_1 = document.createTextNode('Services');
const nav_item_2 = document.createTextNode('Vision');
const nav_item_3 = document.createTextNode('Features');
const nav_item_4 = document.createTextNode('About');
const nav_item_5 = document.createTextNode('Contact');

const nav_item_6 = document.createElement('a');
const nav_item_7 = document.createElement('a');

nav_item_6.textContent = 'Join';
nav_item_7.textContent = 'Login';



// ::: ::: ::: Append/Prepend Selectors ::: ::: :::

// navigation

navigation[5].appendChild(nav_item_5);
navigation[4].appendChild(nav_item_4);
navigation[3].appendChild(nav_item_3);
navigation[2].appendChild(nav_item_2);
navigation[1].appendChild(nav_item_1);

nav.appendChild(nav_item_6);
nav.prepend(nav_item_7);


// ::: ::: ::: Add new content ::: ::: :::

// navigation
navigation.forEach(a => {a.style.color = 'green'})
nav_item_6.style.color = 'green';
nav_item_6.style.fontWeight = 'bold';
nav_item_7.style.fontWeight = 'bold';
nav_item_7.style.color = 'green';


// cta
cta_h1.outerHTML = siteContent["cta"]["h1"];
cta_button.innerHTML = siteContent["cta"]["button"];


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

// contact: p
contact.getElementsByTagName('p')[0].textContent = siteContent["contact"]["address"];
contact.getElementsByTagName('p')[1].textContent = siteContent["contact"]["phone"];
contact.getElementsByTagName('p')[2].textContent = siteContent["contact"]["email"];


// header: stretch
header.style.backgroundColor = 'dodgerblue';
header.style.borderRadius = '5px';

// navigation: stretch
navigation.forEach(a => {a.style.fontWeight = 'bold'});

// cta
cta_image.setAttribute('src', siteContent["cta"]["img-src"])

// main-content
middle_img.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// footer
footer.innerHTML = siteContent["footer"]["copyright"];