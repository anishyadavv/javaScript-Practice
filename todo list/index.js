const input = document.querySelector('input');
const button = document.querySelector('.btn');
const li = document.querySelector('li');
button.addEventListener('click', () => {
    const task = document.createElement('li');
    task.textContent = input.value;
    document.querySelector('ul').appendChild(task);
    input.value = '';
});

li.addEventListener('click', () => {
    li.classList.toggle('checked')
});