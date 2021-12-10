function mode_swap(event) {
    elementList = document.getElementsByTagName("*")

    for (let i = 0; i < elementList.length; i++) {
        classList = elementList[i].classList
        if (!classList.contains('light-theme')) {
            classList.add('light-theme')
            classList.remove('dark-theme')
        } else {
            classList.remove('light-theme')
            classList.add('dark-theme')
        }
    }
}