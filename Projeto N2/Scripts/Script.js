const agora = new Date();

window.onload = function() {
    let time = agora.getHours();

    let bomx = this.document.getElementById("bomx");

    if (time >= 0 && time <= 12) {
        bomx.innerHTML = "<p>Bom dia,  <strong>Luiz Otávio</strong>💣</p>";
    } else if (time > 12 && time < 18) {
        bomx.innerHTML = "<p>Boa tarde,  <strong>Luiz Otávio</strong>💣</p>";
    } else {
        bomx.innerHTML = "<p>Boa noite,  <strong>Luiz Otávio</strong>💣</p>";
    }
}

const form = document.getElementById("taskForm");
let checks = document.getElementsByClassName("check");
const tasks = [];

let emptyness = document.getElementById("emptyness");
let emptycopy = emptyness;

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("taskName").value;
    const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Set", "Out", "Nov", "Dez"];
    const date = `${agora.getDate()} de ${meses[agora.getMonth() - 1]} ${agora.getFullYear()}`;
    const done = false;

    const task = {
        "nome": nome,
        "data": date,
        "done": done
    };

    tasks.push(task);

    if (emptyness) {
        emptyness.remove();
    }

    const completed = tasks.filter(task => task.done == true).length;
    
    let counter = document.getElementById("counter");

    if (counter) {
        counter.innerHTML = `<h4>${completed} de ${tasks.length} <strong>concluídas</strong>`;
    } else {
        let counterEl = document.createElement("div");
        counterEl.setAttribute("id", "counter");
        document.getElementById("taskCount").append(counterEl);
        counterEl.innerHTML = `<h4>${completed} de ${tasks.length} <strong>concluídas</strong>`;
    }
    
    const section = document.getElementById("mainBox");

    let taskBox = document.createElement("div");
    taskBox.setAttribute("class", "taskBox");
    taskBox.setAttribute("id", `Task${tasks.length}`);
    section.append(taskBox);

    let taskContent = document.createElement("div");
    taskContent.setAttribute("class", "taskContent");
    taskBox.append(taskContent);

    let check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.setAttribute("id", "check");
    check.setAttribute("class", "check");
    taskContent.append(check);

    let taskText = document.createElement("div");
    taskText.setAttribute("class", "taskText");
    taskContent.append(taskText);

    let h4 = document.createElement("h4");
    h4.innerHTML = `${task.nome}`;
    h4.setAttribute("class", "taskTitle");

    let p = document.createElement("p");
    p.innerHTML = `Criado em: ${task.data}`;

    taskText.append(h4);
    taskText.append(p);

    let lixeira = document.createElement("i");
    lixeira.setAttribute("class", "fa-solid fa-trash fa-lg");
    lixeira.setAttribute("style", "color: #de015d;");
    lixeira.setAttribute("id", `delete${tasks.length}`);
    taskBox.append(lixeira);

    checks = document.getElementsByClassName("check");
    for (let i = 0; i < checks.length; i++) {
        checks[i].addEventListener("change", function() {
            tasks[i].done = this.checked;
            const completed = tasks.filter(t => t.done).length;
            let counter = document.getElementById("counter");
            if (counter) counter.innerHTML = `<h4>${completed} de ${tasks.length} <strong>concluídas</strong>`;

            const box = this.closest(".taskBox");
            const taskTitle = document.getElementsByClassName("taskTitle");
            const confirmed = box ? box.querySelector(".taskText p") : null;

            if (tasks[i].done) {
                if (confirmed) confirmed.innerHTML = `Concluída em: ${tasks[i].data}`;
                if (box) {
                    box.style.backgroundColor = '#E4FFF6'; 
                    box.style.border = '1px solid #02AF75'; 
                    taskTitle[i].style.color =  '#02AF75';
                }
            } else {
                if (confirmed) confirmed.innerHTML = `Criado em: ${tasks[i].data}`;
                if (box) {
                    box.style.backgroundColor = '';
                    box.style.border = '';
                    taskTitle[i].style.color =  ''
                }
            }
        });
    }

    const trash = document.querySelectorAll(".fa-solid.fa-trash.fa-lg");
    trash.forEach(lixinho => {
        lixinho.addEventListener("click", function() {
            const delBox = this.closest(".taskBox");
            if (!delBox) return;

            const boxes = Array.from(document.getElementsByClassName("taskBox"));
            const index = boxes.indexOf(delBox);
            if (index === -1) return;

            delBox.remove();
            tasks.splice(index, 1);

            const otherBoxes = Array.from(document.getElementsByClassName("taskBox"));
            otherBoxes.forEach((box, idx) => {
                box.id = `Task${idx + 1}`;
                const del = box.querySelector(".fa-solid.fa-trash.fa-lg");
                if (del) del.id = `delete${idx + 1}`;
            });

            checks = document.getElementsByClassName("check");
            for (let k = 0; k < checks.length; k++) {
                checks[k].onchange = function() {
                    tasks[k].done = this.checked;
                    const completed = tasks.filter(task => task.done == true).length;
                    const counterEl = document.getElementById("counter");
                    if (counterEl) counterEl.innerHTML = `<h4>${completed} de ${tasks.length} <strong>concluídas</strong>`;
                };
            }

            const completed = tasks.filter(task => task.done == true).length;
            const counterNow = document.getElementById("counter");
            if (counterNow) counterNow.innerHTML = `<h4>${completed} de ${tasks.length} <strong>concluídas</strong>`;

            if (tasks.length == 0) {
                section.append(emptycopy);
                const counterToRemove = document.getElementById("counter");
                if (counterToRemove) counterToRemove.remove();
            }
        });
    });

    form.reset();
});
