let arrayOfQueued = [];

export function addToQueued(data) {
    const queueModalBtn = document.querySelector('#queueModalBtn');
    queueModalBtn.addEventListener("click", addToQueuedLocalStorage);
    
    function addToQueuedLocalStorage(){
        // let receiveddata = JSON.stringify(data);
        // arrayOfQueued.push(receiveddata);
    
        // localStorage.setItem('movieQueued', arrayOfQueued);

        // let savedQueuedMovies = JSON.parse(localStorage.getItem('movieQueued'));
        // if( savedQueuedMovies == null)  savedQueuedMovies = [];

        // queueModalBtn.textContent = 'ADDED TO QUEUED';

        // console.log('TYPEOF ARRAY OF QUEUED: ', typeof arrayOfQueued);
        // return arrayOfQueued;

        // Parse the serialized data back into an aray of objects
        arrayOfQueued = JSON.parse(localStorage.getItem('movieQueued')) || [];
        // Push the new data (whether it be an object or anything else) onto the array
        arrayOfQueued.push(data);
        // Alert the array value
        alert(arrayOfQueued);  // Should be something like [Object array]
        // Re-serialize the array back into a string and store it in localStorage
        localStorage.setItem('movieQueued', JSON.stringify(arrayOfQueued));
    }
}