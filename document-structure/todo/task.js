const tasksInput = document.getElementById('task__input');
const tasksAdd = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

function addTask(text) {
  const task = document.createElement('div');
  task.className = 'task';

  task.innerHTML = `
    <div class="task__title">
      ${text}
    </div>
    <a href="#" class="task__remove">&times;</a>
  `;

  const removeButton = task.querySelector('.task__remove');

  removeButton.addEventListener('click', (event) => {
    event.preventDefault();
    task.remove();
  });

  tasksList.appendChild(task);
}

tasksAdd.addEventListener('click', (event) => {
  event.preventDefault();

  const text = tasksInput.value.trim();

  if (text !== '') {
    addTask(text);
    tasksInput.value = '';
  }
});
