(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
   var theImages = document.querySelectorAll('.data-ref'),
       theModel = document.querySelector('.modelName'),
       thePrice = document.querySelector('.priceInfo'),
       carDesc = document.querySelector('.modelDetails');

       function showDetails(){
         //debugger;
         let objectIndex = carData[this.id];

         theModel.firstChild.nodeValue = objectIndex.model;
         thePrice.firstChild.nodeValue = objectIndex.price;
         carDesc.firstChild.nodeValue = objectIndex.details;

         theImages.forEach(function(image,index){
           image.classList.add('nonActive');
         });
         this.classList.remove('nonActive');

       };

       theImages.forEach(function(image,index){
         image.addEventListener('click',showDetails, false);
       });



})();
