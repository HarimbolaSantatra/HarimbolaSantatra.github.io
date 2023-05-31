const toggleText = (btn) => {
    const txtBox = btn.nextElementSibling;
    if (txtBox.classList.contains('hide')) {
        txtBox.classList.add('show');
        txtBox.classList.remove('hide');
    }
    else {
        txtBox.classList.add('hide');
        txtBox.classList.remove('show');
    }
}

const toggleBtns = document.querySelectorAll('.work-toggle');
toggleBtns.forEach((toggleBtn) => {
    toggleBtn.addEventListener('click', function () {
        toggleText(toggleBtn);
    });
});

