(()=>{"use strict";let e=document.querySelector("#content");const t=()=>{let t=e.appendChild(document.createElement("section"));t.setAttribute("class","sec");let n=t.appendChild(document.createElement("div"));return n.setAttribute("class","jumbotron  m-2 child"),n.appendChild(document.createElement("h1")).setAttribute("class","display-4"),document.querySelector(".display-4").innerHTML="Hello, Welcome to the Resturant",n.appendChild(document.createElement("p")).setAttribute("class","lead"),document.querySelector(".lead").innerHTML="Feeling Hungry!!! Order Here",t};let n=document.querySelector("#content");let c=document.querySelector("#content");let a=document.querySelector("#content");(()=>{let e=a.appendChild(document.createElement("nav"));e.setAttribute("class","navbar navbar-expand-lg navbar-light bg-light justify-content-between"),e.appendChild(document.createElement("a")).setAttribute("class","navbar-brand"),document.querySelector(".navbar-brand").innerHTML="RESTURANT",e.appendChild(document.createElement("div")).innerHTML='\n         <ul class="navbar-nav">\n          <li class="nav-item active">\n            <a class="nav-link home" href="#">Home</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link menu" href="#">Menu</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link contact" href="#">Contact us</a>\n          </li>\n        </ul>'})(),t(),document.querySelector(".home").addEventListener("click",(function(e){e.preventDefault(),document.querySelector("#content").removeChild(document.querySelector(".sec")),t()})),document.querySelector(".menu").addEventListener("click",(function(e){e.preventDefault(),document.querySelector("#content").removeChild(document.querySelector(".sec")),(()=>{let e=n.appendChild(document.createElement("section"));e.setAttribute("class","sec");let t=e.appendChild(document.createElement("div"));t.setAttribute("class","row mt-2 child main-section");let c=t.appendChild(document.createElement("div"));c.setAttribute("class","card col col-3");let a=c.appendChild(document.createElement("img"));a.setAttribute("class","card-img-top"),a.setAttribute("src","https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636");let r=c.appendChild(document.createElement("div"));r.setAttribute("class","card-body"),r.innerHTML='\n    <h5 class="card-title">Vegeterian</h5>\n    <p class="card-text">\n      Some quick example text to build on the card title and make up the\n      bulk of the card\'s content.\n    </p>\n    <a href="#" class="btn btn-primary">Add to cart</a>';let l=t.appendChild(document.createElement("div"));l.setAttribute("class","card col col-3");let d=l.appendChild(document.createElement("img"));d.setAttribute("class","card-img-top"),d.setAttribute("src","https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636");let i=l.appendChild(document.createElement("div"));i.setAttribute("class","card-body"),i.innerHTML='\n    <h5 class="card-title">Vegeterian</h5>\n    <p class="card-text">\n      Some quick example text to build on the card title and make up the\n      bulk of the card\'s content.\n    </p>\n    <a href="#" class="btn btn-primary">Add to cart</a>';let o=t.appendChild(document.createElement("div"));o.setAttribute("class","card col col-3");let s=o.appendChild(document.createElement("img"));s.setAttribute("class","card-img-top"),s.setAttribute("src","https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636");let u=o.appendChild(document.createElement("div"));u.setAttribute("class","card-body"),u.innerHTML='\n    <h5 class="card-title">Vegeterian</h5>\n    <p class="card-text">\n      Some quick example text to build on the card title and make up the\n      bulk of the card\'s content.\n    </p>\n    <a href="#" class="btn btn-primary">Add to cart</a>';let m=t.appendChild(document.createElement("div"));m.setAttribute("class","card col col-3");let p=m.appendChild(document.createElement("img"));p.setAttribute("class","card-img-top"),p.setAttribute("src","https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636");let h=m.appendChild(document.createElement("div"));h.setAttribute("class","card-body"),h.innerHTML='\n    <h5 class="card-title">Vegeterian</h5>\n    <p class="card-text">\n      Some quick example text to build on the card title and make up the\n      bulk of the card\'s content.\n    </p>\n    <a href="#" class="btn btn-primary">Add to cart</a>'})()})),document.querySelector(".contact").addEventListener("click",(function(e){e.preventDefault(),document.querySelector("#content").removeChild(document.querySelector(".sec")),(()=>{let e=c.appendChild(document.createElement("section"));e.setAttribute("class","sec");let t=e.appendChild(document.createElement("div"));t.setAttribute("class","card"),t.appendChild(document.createElement("div")).setAttribute("class","card-header bg-primary mt-4"),document.querySelector(".card-header").innerHTML="Contact Here",t.appendChild(document.createElement("div")).setAttribute("class","card-body"),document.querySelector(".card-body").innerHTML="+91-8800926672",t.appendChild(document.createElement("div")).setAttribute("class","card-footer"),document.querySelector(".card-footer").innerHTML="Thank you"})()}))})();