 let carts = document.querySelectorAll('.button');

console.log(carts)
   for ( let i=0 ; i < carts.length ; i++){
     carts[i].addEventListener('click', (e) => {
      e.preventDefault();
      cartsNumber()
    }
   );
   }

function cartsNumber() {
  alert('button clicked')
   let productNumbers = localStorage.getItem("number");
   productNumbers = parseInt(productNumbers);
   if (productNumbers){
   localStorage.setItem("number", productNumbers + 1);
   document.querySelector('.contact-list span').textContent =  productNumbers + 1 ;
 } else{
   localStorage.setItem("number",  1);
   document.querySelector('.contact-list span').textContent = 1;
 }
}
