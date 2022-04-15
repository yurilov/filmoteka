const arrayOfQueued = [];
const QUEUE_STORAGE = [];
export function addToQueued(data) {
    
    const queueModalBtn = document.querySelector('#queueModalBtn');
    queueModalBtn.addEventListener("click", addToQueuedLocalStorage);

    function addToQueuedLocalStorage(){
    const queuedLocalStorage = localStorage.setItem("movieQueued", JSON.stringify(data))
    console.log('queuedLocalStorage: ', queuedLocalStorage);
   
    let existingEntries = JSON.parse(localStorage.getItem("movieQueued"));
    if(existingEntries == null) existingEntries = [];

    console.log('EXISTING ENTRIES: ' + JSON.stringify(existingEntries));
     return console.log('PUSHED: ' + QUEUE_STORAGE.push(arrayOfQueued));
    // return QUEUE_STORAGE.push(arrayOfQueued);
 }
}