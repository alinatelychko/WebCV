document.addEventListener('DOMContentLoaded', function () {
    const animatedSectionElements = document.querySelectorAll('.animated-section');

    function handleScroll() {
        animatedSectionElements.forEach((element) => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (elementPosition < screenHeight * 0.75) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
});

function moveWorkItem(workItem) {
    const container = document.querySelector('.work-container');
    const scrollAmount = workItem.offsetLeft - container.scrollLeft;
    container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

function handleManualScroll(direction) {
    const container = document.getElementById('work');
    const scrollAmount = 300; // You can adjust the scroll amount as needed

    if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
    } else {
        container.scrollLeft += scrollAmount;
    }
}

let isDragging = false;
    let startPosition = 0;
    let currentScrollPosition = 0;

    // Function to handle mouse down event
    function handleMouseDown(event) {
        isDragging = true;
        startPosition = event.clientX;
        currentScrollPosition = document.getElementById('work').scrollLeft;
    }

    // Function to handle mouse move event
    function handleMouseMove(event) {
        if (!isDragging) return;

        const delta = event.clientX - startPosition;
        document.getElementById('work').scrollLeft = currentScrollPosition - delta;
    }

    // Function to handle mouse up event
    function handleMouseUp() {
        isDragging = false;
    }

    function toggleDetails(detailsId) {
        const details = document.getElementById(detailsId);
        const overlay = document.getElementById('overlay');
    
        details.classList.toggle('active');
        overlay.classList.toggle('active');
    }
    