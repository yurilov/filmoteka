let arrayOfQueued = [];

export function addToQueued(data) {
    const queueModalBtn = document.querySelector('#queueModalBtn');
    queueModalBtn.addEventListener("click", addToQueuedLocalStorage);
    
    function addToQueuedLocalStorage(){
        arrayOfQueued = JSON.parse(localStorage.getItem('movieQueued')) || [];
       
        arrayOfQueued.push(data);
        removeEventListener();
     
        localStorage.setItem('movieQueued', JSON.stringify(arrayOfQueued));

        const { id: movieId} = data;
        console.log(`MOVIEID: ${movieId}`);


        const isMovieInLocalData = arrayOfQueued.find(movie => movie.id === movieId);

        if (isMovieInLocalData) {
            queueModalBtn.textContent = 'Delete from queued';
            queueModalBtn.addEventListener('click', onDeleteFromQueued);
          } else {
            queueModalBtn.textContent = 'ADD TO QUEUED';  
            queueModalBtn.addEventListener('click', onDeleteFromQueued);
          }
    }

    function removeEventListener(){
        queueModalBtn.removeEventListener('click', addToQueuedLocalStorage);
    }

    function onDeleteFromQueued(){
        console.log('ON DELETE FROM QUEUED')
        queueModalBtn.textContent = 'DELETE FROM QUEUED';

        document.getElementById('queueModalBtn').id = 'addedToQueuedMovie';
        queueModalBtn.removeEventListener('click', addToQueuedLocalStorage);
    }
}