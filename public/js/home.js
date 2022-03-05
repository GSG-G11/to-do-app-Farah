

const tasks = document.querySelector('.tasks')
const addBtn = document.querySelector('#btn')
const btnfilter = document.querySelector('#btnfilter')
const container = document.querySelector('.container')
const Filtercontainer = document.querySelector('.Filtercontainer')
const EDITcontainer = document.querySelector('.EDITcontainer')
const editSection = document.querySelector('.editSection')
const editTask = document.querySelector('#editTask')
const editDate = document.querySelector('#editDate')
const editSubject = document.querySelector('#editSubject')
const editBtn = document.querySelector('#editBtn')
const userId =localStorage.getItem('userId')

btnfilter.addEventListener('click', (e) => {

    let option = e.target.parentElement.subject.value;
    let sort = e.target.parentElement.sort.value;
    if (option === "All") {
        getData(`/tasks`).then(data => mapData(data));
    }
    postData({ option, sort }, "POST", '/fitlerTask').then(data => {
  
        tasks.textContent = "";
   
        mapData(data);
    })
})
addBtn.addEventListener('click', (e) => {
    let value = e.target.parentElement.task.value;
    let date = e.target.parentElement.date.value;
    let option = e.target.parentElement.subject.value;
    postData({userId, value, date, option }, "POST", '/task').then(data => renderDom(data[0]))
})
Filtercontainer.addEventListener('click', (e) => {
    e.preventDefault();
})
container.addEventListener('click', (e) => {
    e.preventDefault();
})
EDITcontainer.addEventListener('click', (e) => {
    e.preventDefault();
})
const mapData = (data) => {

    data.map(task => renderDom(task))
}
window.onload = () => {
    editSection.style.display = 'none'
    getData(`/tasks/${userId}`).then(data => mapData(data));
}
const renderDom = (object) => {


    const task = document.createElement('div')
    task.className = 'displayTask'
    task.setAttribute('data-id', object.id)
    const content = document.createElement('p')
    const type = document.createElement('p')
    content.textContent = object.content;
    type.textContent = object.type;
    const date = document.createElement('p')
    date.textContent = object.date;
    const btn = document.createElement('button')
    const editBtn = document.createElement('button')
    editBtn.className = 'btn'
    btn.className = 'btn'
    btn.textContent = 'delete'
    editBtn.textContent = "edit"
    task.append(content, date, type, btn, editBtn)
    tasks.append(task)
    editBtn.addEventListener('click', edit)
    btn.addEventListener('click', del)
}
const displayEditSection = (parent) => {
   
    editSection.style.display = 'flex'
    const id = parent.parentElement.dataset.id;


    editTask.value = parent.parentElement.childNodes[0].textContent
    editSubject.value = parent.parentElement.childNodes[2].textContent
    editDate.value = parent.parentElement.childNodes[1].textContent

    editBtn.addEventListener('click', () => {

        const content = editTask.value;
        const type = editSubject.value;
        const date = editDate.value;
      
        postData({ id, content, type, date }, 'PUT', '/task').then((data) => {


            parent.parentElement.childNodes[0].textContent = data[0].content;
            parent.parentElement.childNodes[1].textContent = data[0].date;
            parent.parentElement.childNodes[2].textContent = data[0].type;

        })
        editSection.style.display = 'none'
    })
}
const edit = (e) => {
    displayEditSection(e.target)
}
const del = (e) => {
    const id = e.target.parentElement.dataset.id;

    postData({ id }, "DELETE", '/task').then(() => e.target.parentElement.remove())
}