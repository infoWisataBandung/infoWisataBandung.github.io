document.addEventListener('DOMContentLoaded', () => {
    const parallax = (e) => {
        const windowWidth = window.innerWidth;
        if (windowWidth < 768) return;

        const halfFieldWidth = document.querySelector('.parallax').clientWidth / 2;
        const halfFieldHeight = document.querySelector('.parallax').clientHeight / 2;
        const fieldPos = document.querySelector('.parallax').getBoundingClientRect();
        const x = e.clientX;
        const y = e.clientY - fieldPos.top;
        const newX = (x - halfFieldWidth) / 30;
        const newY = (y - halfFieldHeight) / 30;

        document.querySelectorAll('.parallax [class*="wave"]').forEach((wave, index) => {
            wave.style.transition = 'none';
            wave.style.transform = `translate3d(${index * newX}px, ${index * newY}px, 0px)`;
        });
    };

    const stopParallax = () => {
        document.querySelectorAll('.parallax [class*="wave"]').forEach((wave) => {
            wave.style.transform = 'translate(0px, 0px)';
            wave.style.transition = 'all .7s';
        });

        setTimeout(() => {
            document.querySelectorAll('.parallax [class*="wave"]').forEach((wave) => {
                wave.style.transition = '';
            });
        }, 700);
    };

    document.querySelector('.not-found').addEventListener('mousemove', parallax);
    document.querySelector('.not-found').addEventListener('mouseleave', stopParallax);
});
