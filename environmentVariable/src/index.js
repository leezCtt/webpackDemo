import _ from 'lodash'
import $ from 'jquery'
import './styles.css'
import './styles1.css'


const dom = $('<div>')
dom.html(_.join(['gang', 'tong', 'hello'], '-----'))
$('body').append(dom)