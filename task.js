const cardButton = document.querySelectorAll('.card-container button');
for(const btn of cardButton){
    btn.addEventListener('click', function(){
        const taskAssigned = getTextValueById('task-assigned');
        const newTaskAssigned = taskAssigned -1;
        setInnerTextById('task-assigned', newTaskAssigned);
        alert('Board Updated Successfully')
        btn.disabled = true;
        btn.classList.add('opacity-50', 'cursor-not-allowed');

        const taskCount = getTextValueById('task-count');
        const newTaskCount = taskCount +1;
        setInnerTextById('task-count', newTaskCount);

        let allDisabled = true;
        for (const b of cardButton) {
            if (!b.disabled) {
                allDisabled = false;
                break;
            }
        }

        if (allDisabled) {
            alert('Congratulations! you have unlocked all the modules');
        }
    })
}
