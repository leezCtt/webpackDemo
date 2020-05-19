import _ from 'lodash'
import $ from 'jquery'

const dom = $('<div>')
dom.html(_.join(['gang', 'tong', 'hello'], '-----'))
$('body').append(dom)