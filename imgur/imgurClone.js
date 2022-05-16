// var myHeaders = new Headers();
// myHeaders.append("Authorization", "Client-ID 214e154e88bb2ef");

// const { get } = require("http");

// var formdata = new FormData();

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   body: formdata,
//   redirect: 'follow'
// };

// fetch("https://api.imgur.com/3/gallery/t/{{cat}}/{{sort}}/{{window}}/{{page}}", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

let data;


// import { createClient } from "pexels"

//   // D:\GitHub1\santhosh-assignment\Unit 6\imgur\node_modules\pexels\dist

  
// const client = createClient('563492ad6f91700001000001f0e78500cb7e4b7fa22cb8d26a41cdd6');

// client.photos.curated({ per_page: 1 }).then(photos => {console.log(photos)});


// import { createClient } from 'pexels';



// var requestOptions = {
//     method: 'GET',
//     headers: myHeaders,
//     body: formdata,
//     redirect: 'follow'
//   };

// <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"> </script>



// function solve(){
//   const xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//       document.getElementById("data").innerHTML = xhttp.responseText;
//       }
//   };
//   xhttp.open("GET", "https://cors-anywhere.herokuapp.com/https://tiny-news-api.herokuapp.com/api/news", true);
//   xhttp.send();
// }
// solve()



fetch("https://api.pexels.com/v1/curated?per_page=80",{
  headers: {
    Authorization: '563492ad6f91700001000001f0e78500cb7e4b7fa22cb8d26a41cdd6'
  }}).then(response => response.json()).then(result =>{

    naveen(result.photos)
    console.log(result)
    
  } ).catch(err => console.log(err))


//   import { createClient } from 'pexels';

// const client = createClient('563492ad6f91700001000001f0e78500cb7e4b7fa22cb8d26a41cdd6');
// const query = 'Nature';

// client.photos.search({ query, per_page: 1 }).then(photos => {...});






// import fetch from 'node-fetch';
// global.fetch = fetch;

// const unsplash = createApi({ accessKey: 'kyRfxIrugLeJXcOnxXyisI48h4eAQVBmtb21htNxjEw' });

// unsplash.users.getPhotos({ username: 'foo' }).then(result => {
//   if (result.errors) {
//     // handle error here
//     console.log('error occurred: ', result.errors[0]);
//   } else {
//     const feed = result.response;

//     // extract total and results array from response
//     const { total, results } = feed;

//     // handle success here
//     console.log(`received ${results.length} photos out of ${total}`);
//     console.log('first photo: ', results[0]);
//   }
// });


// async function deleteProduct() {

//   //   try {

//   //     let response = await fetch("https://api.imgur.com/3/gallery/search/{{sort}}/{{window}}/{{page}}?q=cats", {

//   //       method: "GET",
//   //       headers: myHeaders
//   //     })

//   //     data= await response.json()

//   //     console.log(data)

//   //     naveen(data.data)
    

//   //   //   let data1 = await response.json();
//   //   //   getProduct()
//   //   } catch (err) {
//   //     console.log(err);
//   //   }

//   // }




//   deleteProduct()

  var wall = document.getElementById("productdisplay")
  function naveen (x) {
    
    x.forEach(function(e) {
console.log(e.src)
    let div = document.createElement("div")
    let img = document.createElement("img")
    img.src = e.src.medium

   
    div.append(img)
        // console.log(e.images[0].link)
    wall.append(div)
}
    )
  }
  let element=document.getElementById("prodis")
  let hideout=document.getElementById("hideit")
  let tiws=document.getElementById("kkkkk")
  let shower=document.getElementById("sortop")
  let shou=document.getElementById("afterdisplay")
  window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    console.log(scroll)
    if(scroll>=396){
      element.style.zIndex="-4"
      hideout.style.visibility="hidden"
      tiws.style.visibility="hidden"
      shower.style.position="fixed"
      shower.style.top="0"
      shou.style.display="block"
    }else{
      element.style.zIndex="0"
      hideout.style.visibility="visible"
      tiws.style.visibility="visible"
      shower.style.position="static"
      shower.style.backgroundColor="transparent"
      shou.style.display="none"
    }
});
var dm = document.getElementById("txt-input")

let search_btn = document.getElementById("search-btn")

var prod_dis = document.getElementById("productdisplay")


search_btn.addEventListener("click", function(){
  searchfun(1)
})


function searchfun(e){
  fetch(`https://api.pexels.com/v1/search?query=${dm.value}&per_page=20`,{
  headers: {
    Authorization: '563492ad6f91700001000001f0e78500cb7e4b7fa22cb8d26a41cdd6'
  }}).then(response => response.json()).then(result => {
    prod_dis.innerHTML = null 
    naveen(result.photos)
  }).catch(err => console.log(err))
}

