import createAvatar from './createAvatar'
import avatar from './avatar.png'
import styles from './index.scss'


createAvatar()



var img = new Image()
img.src = avatar
img.classList.add(styles.avatar)

document.getElementById('root').append(img)