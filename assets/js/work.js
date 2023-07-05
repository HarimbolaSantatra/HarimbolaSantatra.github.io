const toggleText = (workToggle) => {
    const dropdownDescription = workToggle.nextElementSibling;
    const plusSign = workToggle.lastElementChild.lastElementChild;
    if (dropdownDescription.classList.contains('hide')) {
        dropdownDescription.classList.add('show');
        dropdownDescription.classList.remove('hide');
        workToggle.classList.add('active');
        workToggle.classList.remove('inactive');
        plusSign.textContent = "-";
    }
    else {
        dropdownDescription.classList.add('hide');
        dropdownDescription.classList.remove('show');
        workToggle.classList.add('inactive');
        workToggle.classList.remove('active');
        plusSign.textContent = "+";
    }
}

const toggleBtns = document.querySelectorAll('.work-toggle');
toggleBtns.forEach((toggleBtn) => {
    toggleBtn.addEventListener('click', function () {
        toggleText(toggleBtn);
    });
});

