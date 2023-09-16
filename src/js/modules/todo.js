import hideShowBlock from '../function/hideShowBlock';
import vars from './vars';
import settings from './settings';

function showTodo() {
  let hash = window.location.hash.substr(1);

  const {
    body,
    todoBlock,
    todoBtn,
    todoWrapper,
    checkTodo,
    newTaskInput,
    addTaskBtn,
    todoList,
    todoError,
    todoCountAll,
    todoCountCompleted,
  } = vars;

  newTaskInput.placeholder = hash === 'ru' ? 'новая задача' : 'New task'

  let tasks;

  !localStorage.tasks
    ? (tasks = [])
    : (tasks = JSON.parse(localStorage.getItem('tasks')));

  if (!settings.blocks.includes('todo')) {
    checkTodo.checked = false;
    hideShowBlock(checkTodo, todoWrapper, 'todo');
  }

  if (tasks.length) {
    tasksRender(tasks);
    showQuantityTasks(tasks);
    showCompletedTasks(tasks)
  }

  function addTask(text) {
    tasks.push({
      id: Date.now(),
      text,
      isComplete: false,
    });
  }

  function isNotHaveTask(text, tasksList) {
    let isNotHave = true;

    tasksList.forEach((task) => {
      if (task.text === text) {
        todoError.textContent = '* Such a task exists';
        isNotHave = false;
      }
    });

    return isNotHave;
  }

  function tasksRender(tasksList) {
    let htmlTasksList = '';

    tasksList.forEach((task) => {
      const className = task.isComplete ? 'todo__elem-wrapper--complete' : '';
      const checked = task.isComplete ? 'checked' : '';

      const htmlTask = `
      <div class="todo__elem-wrapper ${className}">
          <div class="form__row--todo">
            <label class="form__group">
              <input class="check-box" type="checkbox" id=${task.id} ${checked}/>
              <span class="check-style"></span>
              ${task.text}
            </label>
            <button class="minus-icon"></button>
          </div>
        </div>
      `;

      htmlTasksList += htmlTask;
    });

    todoList.innerHTML = htmlTasksList;
  }

  function showQuantityTasks(tasksList) {
    todoCountAll.textContent = tasksList.length;
  }

  function showCompletedTasks(tasksList) {
    const completedTasksArr = tasksList.filter((task) => {
      return task.isComplete;
    });

    todoCountCompleted.textContent = completedTasksArr.length;
  }

  function updateLocal() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  checkTodo.addEventListener('change', () => {
    hideShowBlock(checkTodo, todoWrapper, 'todo');
  });

  todoBtn.addEventListener('click', () => {
    todoBlock.classList.toggle('block--active');
  });

  todoWrapper.addEventListener('click', (event) => {
    event._isClickWithInSettingsBlock = true;
  });

  body.addEventListener('click', (event) => {
    if (event._isClickWithInSettingsBlock) return;
    todoBlock.classList.remove('block--active');
  });

  addTaskBtn.addEventListener('click', () => {
    const text = newTaskInput.value.trim();
    if (text && isNotHaveTask(text, tasks)) {
      addTask(text);
      newTaskInput.value = '';
      todoError.textContent = '';
      tasksRender(tasks);
      showQuantityTasks(tasks);
      updateLocal();
    }
  });

  todoList.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('check-box')) {
      const searchIndex = tasks.findIndex((task) => {
        return task.id === Number(target.id);
      });

      tasks[searchIndex].isComplete = !tasks[searchIndex].isComplete;
      tasksRender(tasks);
      showCompletedTasks(tasks);
      updateLocal();
    }
  });

  todoList.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('minus-icon')) {
      const formRow = target.closest('.form__row--todo');
      const checkBox = formRow.querySelector('.check-box');
      const searchIndex = tasks.findIndex((task) => {
        return task.id === checkBox.id;
      });

      tasks.splice(searchIndex, 1);
      tasksRender(tasks);
      showQuantityTasks(tasks);
      showCompletedTasks(tasks);
      updateLocal();
    }
  });
}

export default showTodo;
