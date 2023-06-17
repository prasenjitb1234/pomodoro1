const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');
const settingsButton = document.getElementById('settingsButton');
const settingsModal = document.getElementById('settingsModal');
const timerInput = document.getElementById('timerInput');
const saveButton = document.getElementById('saveButton');
const cancelButton = document.getElementById('cancelButton');

let timerInterval;
let time = 0;
let isRunning = false;

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  if (!isRunning) {
    const duration = parseInt(timerInput.value) * 60;
    if (isNaN(duration)) return;

    time = duration;
    isRunning = true;
    startButton.innerText = 'Pause';
    startButton.classList.add('pause');
    resetButton.style.display = 'inline-block';

    timerInterval = setInterval(() => {
      if (time <= 0) {
        clearInterval(timerInterval);
        resetTimer();
        return;
      }
      time--;
      timerDisplay.textContent = formatTime(time);
    }, 1000);
  } else {
    isRunning = false;
    startButton.innerText = 'Start';
    startButton.classList.remove('pause');
    clearInterval(timerInterval);
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  time = 0;
  timerDisplay.textContent = '00:00';
  startButton.innerText = 'Start';
  startButton.classList.remove('pause');
  resetButton.style.display = 'none';
}

function openSettings() {
  settingsModal.style.display = 'block';
}

function saveSettings() {
  const newDuration = parseInt(timerInput.value);
  if (isNaN(newDuration)) return;
  timerDisplay.textContent = formatTime(newDuration * 60);
  settingsModal.style.display = 'none';
}

function closeSettings() {
  settingsModal.style.display = 'none';
}

settingsButton.addEventListener('click', openSettings);
saveButton.addEventListener('click', saveSettings);
cancelButton.addEventListener('click', closeSettings);
startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);





// --------------  to do list 
const addTaskButton = document.getElementById('addTaskButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', completeTask);

    const taskTextElement = document.createElement('span');
    taskTextElement.textContent = taskText;

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskTextElement);
    taskList.appendChild(taskItem);

    taskInput.value = '';

    
  }
}

function completeTask(event) {
  const taskTextElement = event.target.nextSibling;
  taskTextElement.classList.toggle('completed');
}






