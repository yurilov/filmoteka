let arrayOfQueued = [];

export function addToQueued(data) {
    const queueModalBtn = document.querySelector('#queueModalBtn');
    queueModalBtn.addEventListener("click", addToQueuedLocalStorage);
    
    function addToQueuedLocalStorage(){
        // Parse the serialized data back into an aray of objects
        arrayOfQueued = JSON.parse(localStorage.getItem('movieQueued')) || [];
        // Push the new data onto the array
        arrayOfQueued.push(data);
        queueModalBtn.textContent = 'ADDED TO QUEUED';

        localStorage.setItem('movieQueued', JSON.stringify(arrayOfQueued));
    }
}