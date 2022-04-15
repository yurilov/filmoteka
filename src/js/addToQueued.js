const arrayOfQueued = [];
const QUEUE_STORAGE = [];
export function addToQueued(data) {
    
    const queueModalBtn = document.querySelector('#queueModalBtn');
    console.log('queueModalBtn: ' + queueModalBtn);

    queueModalBtn.addEventListener("click", addToQueuedLocalStorage);

    function addToQueuedLocalStorage(){
   // const queuedLocalStorage = localStorage.setItem("movieQueued", JSON.stringify(arrayOfQueued))
    const queuedLocalStorage = localStorage.setItem("movieQueued", JSON.stringify(data))
    console.log('queuedLocalStorage: ', queuedLocalStorage);
    console.log('arrayOfQueued: ' + arrayOfQueued);

    let existingEntries = JSON.parse(localStorage.getItem("movieQueued"));
    if(existingEntries == null) existingEntries = [];

    console.log('EXISTING ENTRIES: ' + JSON.stringify(existingEntries));
    QUEUE_STORAGE.push(arrayOfQueued);
 }
}