let arrayOfQueued = [];

export function addToQueued(data) {
    const queueModalBtn = document.querySelector('#queueModalBtn');
    queueModalBtn.addEventListener("click", addToQueuedLocalStorage);
    
    function addToQueuedLocalStorage(){
     
        arrayOfQueued = JSON.parse(localStorage.getItem('movieQueued')) || [];
       
        arrayOfQueued.push(data);
        queueModalBtn.textContent = 'ADDED TO QUEUED';

       const queuedLocalStorageIterator = arrayOfQueued.forEach(result => {

          // localStorage.clear('movieQueued');
          // localStorage.clear();
        //  localStorage.removeItem("movieQueued");


          for(let key in Object.keys(arrayOfQueued)) {
            console.log(`ITERATOR INSIDE ${key} => ${JSON.stringify(arrayOfQueued[key])}`);
           
           const {id: movieId} = arrayOfQueued[key];
          //  alert(`ID:${id}`)

          console.log('MOVIE ID: ' + movieId);
          console.log('ARRAY OF QUEUED: ' + arrayOfQueued[key]);

           // console.log(`arrayOfQueued.find(id => id === id)`+ JSON.stringify(arrayOfQueued.find(id => id === movieId)))

            // const findId = arrayOfQueued.find(id => id === 760104)
            // if(localStorage.getItem('movieQueued') === data[key]) {
            //     alert(`BINGO`)
            // }
        }})
    
        removeEventListener();
        localStorage.setItem('movieQueued', JSON.stringify(arrayOfQueued));
    }

    function removeEventListener(){
        queueModalBtn.removeEventListener('click', addToQueuedLocalStorage);
    }
}