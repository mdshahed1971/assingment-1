const weekdayElement = document.getElementById('current-weekday'); 
const dateElement = document.getElementById('current-date'); 

if(weekdayElement && dateElement){
    const today = new Date();
    const weekdayOptions = { weekday: 'short' };  
    const weekday = today.toLocaleDateString('en-US', weekdayOptions).replace('.', '') + ','; 
    const dateOptions = { month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', dateOptions).replace(/,/g, ''); 
    weekdayElement.innerText = weekday;
    dateElement.innerText = formattedDate;
}


const cardButtons = document.querySelectorAll('.task-card button');
const activityLogMessages = document.getElementById('activity-log-messages');
const clearHistoryBtn = document.getElementById('clear-history');

cardButtons.forEach((btn) => {
  btn.addEventListener('click', function () {
    const taskAssigned = getTextValueById('task-assigned');
    setInnerTextById('task-assigned', taskAssigned - 1);

    const taskCount = getTextValueById('task-count');
    setInnerTextById('task-count', taskCount + 1);

    alert('Board Updated Successfully');

    btn.disabled = true;
    btn.classList.add('opacity-50', 'cursor-not-allowed');

    const card = btn.closest('.task-card');
    const taskTitle = card.querySelector('h3').innerText;

    const p = document.createElement('p');
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;

    p.innerText = `You have completed the task "${taskTitle}" at ${hours}:${minutes} ${ampm}`;
    p.classList.add('text-green-600', 'text-sm', 'font-medium');
    activityLogMessages.appendChild(p);

    const allDisabled = Array.from(cardButtons).every(b => b.disabled);
    if (allDisabled) {
      alert('🎉 Congratulations! You have unlocked all the modules!');
    }
  });
});

if (clearHistoryBtn) {
  clearHistoryBtn.addEventListener('click', () => {
    activityLogMessages.innerHTML = '';
  });
}


function getTextValueById(id) {
  const element = document.getElementById(id);
  return element ? parseFloat(element.innerText) || 0 : 0;
}

function setInnerTextById(id, value) {
  const element = document.getElementById(id);
  if (element) element.innerText = value;
}