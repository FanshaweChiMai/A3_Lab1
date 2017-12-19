(function () {

  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
   var theImages = document.querySelectorAll('.data-ref'),
       theModel = document.querySelector('.modelName'),
       thePrice = document.querySelector('.priceInfo'),
       carDesc = document.querySelector('.modelDetails');
  const httpRequest = new XMLHttpRequest();


  function getCarData(){

    const url = './includes/functions.php?carModel' + this.id;
    //NEW: the fetch API uses new javascript promise API
    fetch(url) //do an ajax call with fetch
    .then((resp)=>resp.json()) // convert to JSON
    .then(({modelName, pricing, modelDetails, model}) =>{
      let theModel = document.querySelector('.modelName').textContent = modelName;
      let thePrice = document.querySelector('.priceInfo').innerHTML = pricing;
      let carDesc = document.querySelector('.modelDetails').textContent = modelDetails;

      theImages.forEach(function(name,index){
        image.classList.add('nonActive');
      }); //this is a template string constructor - look it up! ( also new for ES6
        document.querySelector(`#${model}`).classList.remove('nonActive');
      })
      .catch(function(error){
        // catch any error and report it to the console
        // console.log(error);
      });
    }

    theImages.forEach(function(image,index){
      image.addEventListener('click',getCarData,false);
    });

/*if(!httpRequest)
{
alert("Browser old");
return false;
}

httpRequest.onreadystatechange = processRequest;
httpRequest.open('GET', './includes/functions.php?carModel=' + this.id);
httpRequest.send();
  }

  function processRequest() {
    let reqIndicator = document.querySelector('.request-state');
    reqIndicator.textContent = httpRequest.readyState;
    debugger;

    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) { // 200 means everything is awesome
        let data = JSON.parse(httpRequest.responseText);

        processResult(data);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
  function processResult(data){
  const { modelName, pricing, modelDetails} = data;

  model.textContent = modelName;
  priceInfo.innerHTML = pricing;
  details.textContent = modelDetails;

  theImages.forEach(function(image, index){
    image.classList.add('nonActive');
  });
  document.querySelector(`#${data.model}`).classList.remove('nonActive');

  }

  theImages.forEach(function(image, index){
          image.addEventListener('click', getCarData, false);
        });

  getCarData.call(document.querySelector("#F55"));

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
       });*/



})();
