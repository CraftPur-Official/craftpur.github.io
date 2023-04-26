function increaseLikeCount(element) {
    const nextElement = element.nextElementSibling
    if(element.classList.contains('fa-solid'))
    {
        element.classList.remove('fa-solid')
        element.classList.add('fa-regular')
        nextElement.innerText = 'Like'
        nextElement.style.fontWeight = '400'
    }
    else {
        element.classList.add('fa-solid')
        element.classList.remove('fa-regular')
        nextElement.innerText = 'Liked!'
        nextElement.style.fontWeight = '500'
    }
}