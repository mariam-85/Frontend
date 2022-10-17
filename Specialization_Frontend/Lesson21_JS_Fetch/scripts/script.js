const tasks_container = document.querySelector('#tasks_container');

let id_num = 1;

const request = num => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${num}`)
    .then(resp => resp.json())
    .then(json => render(json))
}

request(id_num);

const render = ({ title, completed }) => {
        tasks_container.innerText = '';
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
        tasks_container.append(task)
       
    }
        


const [left_btn, right_btn] = document.querySelectorAll('.triggers button');

left_btn.addEventListener ('click', () => {
    if(id_num === 1){
        id_num = 201
    }
    request(--id_num)
});

right_btn.addEventListener ('click', () => {
    if(id_num === 200){
        id_num === 0
    }
    request(++id_num)
});