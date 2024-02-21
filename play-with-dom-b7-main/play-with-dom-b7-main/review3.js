document.getElementById('review-btn').addEventListener('click',function(){
   const myElement = document.getElementById('floatingTextarea2');
   const myElementValue =  myElement.value;
//    console.log(myElementValue);
    const h1 = document.createElement('p');
    h1.innerText =  myElementValue;
    const h11 = document.getElementById('commnet-container');
    h11.appendChild(h1);
    document.getElementById("floatingTextarea2").value = "";
});