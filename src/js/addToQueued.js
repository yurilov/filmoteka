let arrayOfQueued = [];
const LOCALSTORAGE_KEY = 'movieQueued';

export function addToQueued(data) {
    const queueModalBtn = document.querySelector('#queueModalBtn');
    queueModalBtn.addEventListener("click", onAddToQueued);

    function onAddToQueued(){
        arrayOfQueued = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || [];
        arrayOfQueued.push(data);
     
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(arrayOfQueued));

        const { id: movieId} = data;
        console.log(`MOVIEID: ${movieId}`);


        const isMovieInLocalData = arrayOfQueued.find(movie => movie.id === movieId);

        if (isMovieInLocalData) {
            queueModalBtn.textContent = 'Delete from queued';
            queueModalBtn.addEventListener('click', onDeleteFromQueued);
          } 
    } 

    function onDeleteFromQueued(){
        queueModalBtn.textContent = 'ADD TO QUEUED';

        document.getElementById('queueModalBtn').id = 'movieInQueued';

        localStorage.removeItem(LOCALSTORAGE_KEY);
       // queueModalBtn.removeEventListener('click', onAddToQueued);
    }    
}