// Create your HTML Page via DOM Methods here!

var h1 = document.createElement('h1');
    h1.className = "h1";
    h1.innerHTML = "<strong>Hi there!</strong> You've read an important message.";
    h1.style = "text-align: center; color: blue;";
    


var h2 = document.createElement('h2');
    h2.className = "h2";
    h2.innerHTML = "<strong>Hi there!</strong> You've read an important message.";
    h2.style = "text-align: center; text-decoration: underline;";


var img = document.createElement('img');
    img.className = "img";
    img.src = "star.png";
    img.style.margin = "0 auto";
    img.style.display = "block";

var p = document.createElement ('p');
    p.className = "p";
    p.innerHTML = "here is a caption below the image";
    p.style = "text-align: center;";


var ul = document.createElement('ul');
    ul.className = "ul";
    ul.innerHTML = "Favorite Things";

var li1 = document.createElement('li');
    li1.className = "li";
    li1.innerHTML = "pizza";

var li2 = document.createElement('li');
    li2.className = "li";
    li2.innerHTML = "Cheeseburgers";

var li3 = document.createElement('li');
    li3.className = "li";
    li3.innerHTML = "Soda";

    
  document.body.appendChild(h1);
  document.body.appendChild(h2);
  document.body.appendChild(img);
  document.body.appendChild(p);
  document.body.appendChild(ul);
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);