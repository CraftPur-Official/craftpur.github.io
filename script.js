function increaseLikeCount(element) {
    if(element.classList.contains('fa-solid'))
    {
        element.classList.remove('fa-solid')
        element.classList.add('fa-regular')
        var count = document.getElementsByClassName(element.classList.cont)
        
    }
    else {
        element.classList.add('fa-solid')
        element.classList.remove('fa-regular')
    }
}