document.addEventListener('scroll', function() {
    let scrollY = window.scrollY;
    let docHeight = document.documentElement.scrollHeight - window.innerHeight;
    let pathLength = document.getElementById('snake').getTotalLength();

    let offset = pathLength * ((docHeight - scrollY) / docHeight);

    document.getElementById('snake').style.strokeDashoffset = offset;
});
