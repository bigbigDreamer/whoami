export default function generateStar(count = 250) {
    const screenW = document.querySelector('.whoami-container')?.clientWidth || 0;
    const screenH = document.querySelector('.whoami-container')?.clientHeight || 0;

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < count; i++) {
        const span = document.createElement('span');

        document.querySelector('.whoami-container')?.appendChild(span);
        const x = parseInt(String(Math.random() * screenW), 10);
        const y = parseInt(String(Math.random() * (screenH - 50)), 10);

        span.style.left = `${x}px`;
        span.style.top = `${y}px`;
        span.style.zIndex = '0';
        span.className = 'star';
        const scale = Math.random() * 1.5;
        const rate = Math.random() * 1.5;

        span.style.animationDelay = `${rate}s`;

        span.style.transform = `scale(${scale}, ${scale})`;
    }
}
