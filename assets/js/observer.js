// Use with IntersectionObserver class to make a beautiful scroll animation

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            // entry.target.classList.remove("obs-hidden");
            entry.target.classList.add("obs-show");
        }
        else {
            // entry.target.classList.add("obs-hidden");
            entry.target.classList.remove("obs-show");
        }
    })
});

const hiddenElements = document.querySelectorAll(".obs-hidden");
hiddenElements.forEach((el) => observer.observe(el));