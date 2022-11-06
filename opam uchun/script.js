const inputs = document.querySelector(".input");
const menu1 = document.querySelector(".menu1");
const menu2 = document.querySelector(".menu2");
const temp = document.querySelector(".temp").content;
const row = temp.querySelector(".row");
const rows = temp.querySelector(".rows");

document.body.addEventListener("keypress", (e) => {
    if (e.key == 'Enter') {
        const rowClones = rows.cloneNode(true);
        const mymessege = rowClones.querySelector(".lists");
        mymessege.textContent = inputs.value;
        menu2.appendChild(rowClones)
    }
})

document.body.addEventListener("keypress", (e) => {
    if (e.key == 'Enter') {
        const rowClone = row.cloneNode(true);
        const messege = rowClone.querySelector(".list");
        if (inputs.value == "привет") {
            messege.textContent = "Здорово";
        } else if (inputs.value == "привет!") {
            messege.textContent = "Доброе утро";
        } else if (inputs.value == "привет!!!") {
            messege.textContent = "Приветик";
        } else if (inputs.value == "как дела...") {
            messege.textContent = "Нормально, ты как?";
        } else if (inputs.value == "как дела???") {
            messege.textContent = "Плохо, всё плохо";
        } else if (inputs.value == "как дела?") {
            messege.textContent = "Отлично^^";
        } else if (inputs.value == "почему плохо?") {
            messege.textContent = "Просто... Не важно...";
        } else if (inputs.value == "почему плохо???") {
            messege.textContent = "Из-за тебя!";
        } else if (inputs.value == "я рада") {
            messege.textContent = "Мда...";
        } else if (inputs.value == "я рада!") {
            messege.textContent = "Почему…?";
        } else if (inputs.value == "почему из-за меня") {
            messege.textContent = "Забудь... Всё хорошо.";
        } else if (inputs.value == "почему из-за меня?") {
            messege.textContent = "Ну просто так сказал 😂";
        } else if (inputs.value == "я тоже") {
            messege.textContent = "Что?";
        } else if (inputs.value == "я тоже.") {
            messege.textContent = "Пффт...";
        } else if (inputs.value == "чего?") {
            messege.textContent = "Ни чё 😂";
        } else if (inputs.value == "чего???") {
            messege.textContent = "😂😂😂";
        } else {
            messege.textContent = "Извини, я не понял😔";
        }
        menu1.appendChild(rowClone);
        inputs.value = ''
    }
})