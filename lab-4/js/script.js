document.addEventListener("DOMContentLoaded", function () {

    const input = document.getElementById("taskInput");
    const addBtn = document.getElementById("addBtn");
    const taskList = document.getElementById("taskList");

    // Функция добавления задачи
    function addTask() {
        const text = input.value.trim();

        if (text === "") {
            alert("Введите текст задания!");
            return;
        }

        // Создаём элемент списка
        const li = document.createElement("li");
        li.textContent = text;

        // Кнопка удаления
        const delBtn = document.createElement("button");
        delBtn.textContent = "Удалить";
        delBtn.className = "delete-btn";

        delBtn.onclick = function () {
            li.remove();
        };

        li.appendChild(delBtn);
        taskList.appendChild(li);

        // Очистить поле ввода
        input.value = "";
    }

    // Обработчики событий
    addBtn.addEventListener("click", addTask);

    input.addEventListener("keypress", function(event){
        if(event.key === "Enter"){
            addTask();
        }
    });

});
