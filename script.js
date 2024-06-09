const playButton = document.getElementById('play-button');
const gameContainer = document.getElementById('game-container');
const balanceContainer = document.getElementById('balance-container');
const balanceElement = document.getElementById('balance');

playButton.addEventListener('click', () => {
    // Создаем iframe для игры Flappy Bird
    const iframe = document.createElement('iframe');
    iframe.src = 'https://flappybirdonton.vercel.app/';
    iframe.frameBorder = '0';
    iframe.width = '100%';
    iframe.height = '500px';
    gameContainer.appendChild(iframe);

    // Получаем доступ к балансу игрока
    const intervalId = setInterval(() => {
        const iframeContent = iframe.contentWindow.document;
        const balanceText = iframeContent.querySelector('.balance').textContent;
        balanceElement.textContent = balanceText.replace('$BIRD', '');
    }, 1000);
});

// Обработчики для других кнопок
const frensButton = document.getElementById('frens-button');
frensButton.addEventListener('click', () => {
    console.log('Кнопка "Друзья" нажата');
});

const tasksButton = document.getElementById('tasks-button');
tasksButton.addEventListener('click', () => {
    console.log('Кнопка "Задачи" нажата');
});
