const toggleText = (workToggle) => {
    const workText = workToggle.nextElementSibling;
    const plusSign = workToggle.lastElementChild.lastElementChild;
    if (workText.classList.contains('hide')) {
        workText.classList.add('show');
        workText.classList.remove('hide');
        workToggle.classList.add('active');
        workToggle.classList.remove('inactive');
        plusSign.textContent = "-";
    }
    else {
        workText.classList.add('hide');
        workText.classList.remove('show');
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

