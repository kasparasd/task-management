import { Todo } from "./Todo.js";

const kanban = new Todo('#kanban',['Back log','Todo', 'In progress', 'Done']);

kanban.addTask({
    columnIndex: 1,
    title: 'Pirmos uzduoties antraste',
    desc: 'Pirmos uzdoties pilnas aprasas ... ilgas aprasas labai ilgas tekstas, issamiai nupasakoja ka reikia nuveikti',
    createdOn: '2023-11-08 09:03:15',
    deadline: '2023-12-24 00:00:00',
    tags: [
        {text: 'Design', color: '#333'},
    ],
})

kanban.addTask({
    columnIndex: 0,
    title: 'Antra uzduotis',
    desc: 'Antros uzdoties pilnas aprasas ... ilgas aprasas labai ilgas tekstas, issamiai nupasakoja ka reikia nuveikti',
    createdOn: '2023-11-08 10:03:15',
    deadline: '2023-12-24 00:00:00',
    tags: [
        {text: 'UX', color: '#f00'},
        {text: 'UI', color: '#090'},
    ],
})

kanban.addTask({
    columnIndex: 0,
    title: 'Trecia uzduotis',
    desc: 'Trecios uzdoties pilnas aprasas ... ilgas aprasas labai ilgas tekstas, issamiai nupasakoja ka reikia nuveikti',
    createdOn: '2023-11-08 11:03:15',
    deadline: '2023-12-20 00:00:00',
    tags: [
        {text: 'Development', color: '#00c'},
    ],
})

console.log(kanban);