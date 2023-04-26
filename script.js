function increaseLikeCount(like) {
    const nextElement = like.nextElementSibling
    const rankElement = like.parentNode.previousElementSibling.previousElementSibling
    const rankElementStyle = window.getComputedStyle(rankElement)
    const nextElementStyle = window.getComputedStyle(nextElement)

    if(like.classList.contains('fa-solid'))
    {
        like.classList.remove('fa-solid')
        like.classList.add('fa-regular')
        nextElement.innerText = 'Like'
        nextElement.style.fontWeight = '400'
        like.style.color = nextElementStyle.color;
        
    }
    else {
        like.classList.add('fa-solid')
        like.classList.remove('fa-regular')
        nextElement.innerText = 'Liked!'
        nextElement.style.fontWeight = '500';
        like.style.color = rankElementStyle.color
    }
}