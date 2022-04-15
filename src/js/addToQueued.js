let arrayOfQueued = [];

export function addToQueued(data) {
    const queueModalBtn = document.querySelector('#queueModalBtn');
    queueModalBtn.addEventListener("click", addToQueuedLocalStorage);
    
    function addToQueuedLocalStorage(){
     
        arrayOfQueued = JSON.parse(localStorage.getItem('movieQueued')) || [];
       
        arrayOfQueued.push(data);
        queueModalBtn.textContent = 'ADDED TO QUEUED';

        localStorage.setItem('movieQueued', JSON.stringify(arrayOfQueued));
    }
}