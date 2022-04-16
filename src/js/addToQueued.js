let arrayOfQueued = [];

export function addToQueued(data) {
    const queueModalBtn = document.querySelector('#queueModalBtn');
    queueModalBtn.addEventListener("click", addToQueuedLocalStorage);
    
    function addToQueuedLocalStorage(){
     
        arrayOfQueued = JSON.parse(localStorage.getItem('movieQueued')) || [];
       
        arrayOfQueued.push(data);
        removeEventListener();
        removedFromQueuedLocalStorage();
        localStorage.setItem('movieQueued', JSON.stringify(arrayOfQueued));

        const { id: movieId} = data;
        console.log(`MOVIEID: ${movieId}`);

    }

    function removedFromQueuedLocalStorage() {
        queueModalBtn.textContent = 'DELETE FROM QUEUED';
        
       
    }

    function removeEventListener(){
        queueModalBtn.removeEventListener('click', addToQueuedLocalStorage);
    }
}