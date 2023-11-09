import { Todo } from "./Todo.js";


const kanban = new Todo('#kanban',['Back log','Todo', 'In progress', 'Done']);

const addTaskBtnDOM = document.getElementById('add-task');
const asideDOM = document.getElementById('aside');
const asideBackgroundDOM = asideDOM.querySelector('.aside-bg')
const asideCloseBtnDOM = asideDOM.querySelector('.aside-header button')


if(addTaskBtnDOM && asideDOM) {
    addTaskBtnDOM.addEventListener('click', ()=>{
        asideDOM.classList.add('show');
    })
    
    asideBackgroundDOM.addEventListener('click', ()=>{
        asideDOM.classList.remove('show')
    })

    asideCloseBtnDOM.addEventListener('click', ()=>{
        asideDOM.classList.remove('show')
    })
    
    window.addEventListener('keyup', (event)=>{
        if(event.key === 'Escape'){
            asideDOM.classList.remove('show')
        }
        if(event.key === '+'){
            asideDOM.classList.add('show')
        }
    })
}

const formDOM = document.getElementById('task-form-id')
const formTitleDOM = document.getElementById('title')
const formDescriptionDOM = document.getElementById('desc')
const formDeadlineDOM = document.getElementById('deadline')
const formTagsDOM = document.getElementById('tags')


if(formDOM) {
    formDOM.addEventListener('submit', (event)=>{
        event.preventDefault()

        kanban.addTask({
            columnIndex: 0,
            title: formTitleDOM.value,
            desc: formDescriptionDOM.value,
            createdOn: '2023-11-08 09:03:15',
            deadline: formDeadlineDOM.value,
            tags: formTagsDOM.value
            .split(',')
            .filter(txt => txt !== '')
            .map(txt=>({text:  txt.trim(), color: '#333'}))
        })

        formTitleDOM.value = '';
        formDescriptionDOM.value = '';
        formDeadlineDOM.value = '';
        formTagsDOM.value = '';

        console.log(kanban);
    })
}


