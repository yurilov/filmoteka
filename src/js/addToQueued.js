let arrayOfQueued = [];

export function addToQueued(data) {
    const queueModalBtn = document.querySelector('#queueModalBtn');
    queueModalBtn.addEventListener("click", addToQueuedLocalStorage);
    
    function addToQueuedLocalStorage(){
     
        arrayOfQueued = JSON.parse(localStorage.getItem('movieQueued')) || [];
       
        arrayOfQueued.push(data);
        queueModalBtn.textContent = 'ADDED TO QUEUED';

       const queuedLocalStorageIterator = arrayOfQueued.forEach(result => {

          for(let key in Object.keys(arrayOfQueued)) {
          console.log(`ITERATOR INSIDE ${key} => ${JSON.stringify(arrayOfQueued[key])}`);
           
          // const {id: movieId} = arrayOfQueued[key];

        }})
    
        removeEventListener();
        localStorage.setItem('movieQueued', JSON.stringify(arrayOfQueued));
    }

    function removeEventListener(){
        queueModalBtn.removeEventListener('click', addToQueuedLocalStorage);
    }
}