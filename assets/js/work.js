const toggleText = (btn) => {
    const txtBox = btn.nextElementSibling;
    if (txtBox.classList.contains('hide')) {
        txtBox.classList.add('show');
        txtBox.classList.remove('hide');
        btn.classList.add('active');
        btn.classList.remove('inactive');
    }
    else {
        txtBox.classList.add('hide');
        txtBox.classList.remove('show');
        btn.classList.add('inactive');
        btn.classList.remove('active');
    }
}

const toggleBtns = document.querySelectorAll('.work-toggle');
toggleBtns.forEach((toggleBtn) => {
    toggleBtn.addEventListener('click', function () {
        toggleText(toggleBtn);
    });
});

