window.addEventListener('DOMContentLoaded', () => {
   
   let input = document.querySelector('.search__message')
   let number = document.querySelector('.search__quantity')
   let content = document.querySelector('.content')
   let searchBtn = document.querySelector('.search__btn')
   
   searchBtn.addEventListener('click',sendGiphy)
   number.addEventListener('keyup',(event) => { if(event.keyCode == 13) sendGiphy()} )


   function sendGiphy() {
      if (input.value == '') return
      searchBtn.disabled = true
      let url = `https://api.giphy.com/v1/gifs/search?api_key=mTvqtbIswQrCRr28Cb3dHAHRSDrNwuZ8&q=${input.value}
      &limit=${(number.value) ? number.value : 2}&offset=${Math.floor(Math.random() * 15)}`
      
      removeChildeElemet()
      
      fetch(url)
         .then(data => data.json())
         .then(data => displayInfo(data.data))
         .then(() => searchBtn.disabled = false)
   }

   function displayInfo(response) {
      response.forEach(item => {
         let contentItem = document.createElement('div')
         let img = document.createElement('img')

         contentItem.classList.add('content__item')
         img.src = item.images.original.url

         contentItem.appendChild(img)
         content.appendChild(contentItem)
      })
   }

   function removeChildeElemet() {
      while (content.children.length) {
         content.removeChild(content.lastChild);
      }
   }
})



// ,{
   //    method: 'POST',
   //    headers: {
      //      'Content-Type': 'application/json;charset=utf-8'
      //    },
      //    body: JSON.stringify(body)

      // }

            // const body = {
            //    api_key: "mTvqtbIswQrCRr28Cb3dHAHRSDrNwuZ8",
            //    q: "cheeseburgers",
            //    limit: 20,
            //    offset: 5,
            //    rating: "g",
            //    lang: "en",
            //    random_id: "e826c9fc5c929e0d6c6d423841a282aa"
            // }