themeChange = document.querySelector(".toggle");
themeChange.addEventListener("change", toggled);

function toggled(event) {
    document.body.classList.toggle("dark-theme");
}

const submit = document.querySelector("#frm-btn");

submit.addEventListener("click", event => {
    const emailArea = document.querySelector("#email");
    const nameArea = document.querySelector("#name");
    const serviceArea = document.querySelector("#service");
    const messagesArea = document.querySelector("#msg");
    const inputValues = {
        email: emailArea.value,
        name: nameArea.value,
        service: serviceArea.value,
        message: messagesArea.value
    };
    console.log(inputValues);
})


/*
function toggled(event) {
    elementList = document.getElementsByTagName("*")

    for (const i = 0; i < elementList.length; i++) {
        classList = elementList[i].classList
        if (!classList.contains("light-theme")) {
            classList.add("light-theme")
            classList.remove("dark-theme")
        } else {
            classList.remove("light-theme")
            classList.add("dark-theme")
        }
    }
}
*/