export function Project(title){
    const taskList = [];

    const getTaskList = () => {
        return taskList;
    }

    const addTask = (taskObject) =>{
        taskList.push(taskObject);
    }

    const removeTask = (index) =>{
        taskList.splice(index, 1);
    }

    return { title, getTaskList, addTask, removeTask }
}