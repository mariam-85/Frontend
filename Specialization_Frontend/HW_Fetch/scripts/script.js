
const tasks_container = document.querySelector('#tasks_container');


fetch('https://jsonplaceholder.typicode.com/todos')
.then(resp => resp.json())
.then(json => render(json));

const render = (json) => {
    const tasks = json.map(({ title, completed }) => {
        const task = document.createElement('div');

        const titleElem = document.createElement('p');
        const completedElem = document.createElement('p');

        const status = completed ? 'done' : 'not done';

        const background = completed ? 'lightgreen' : 'lightgray';

        task.style.backgroundColor = background;

        titleElem.innerText = `Task: ${title}`;
        
        completedElem.innerText = `Status: ${status}`;

        task.classList.add('task_card');

        task.append(titleElem, completedElem);
        return task
    })
        tasks_container.append(...tasks)
}