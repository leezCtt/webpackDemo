import avatar from './avatar.png'

function createAvatar() {
    var img = new Image()
    img.src = avatar
    img.classList.add('avatar')

    document.getElementById('root').append(img)
}

export default createAvatar