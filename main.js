var API = {
    show: function(el, interval) {
        return setTimeout(function() {
            el.classList.add('visible')
        }, interval)
    },
    hide: function(el, interval) {
        return setTimeout(function() {
            el.classList.add('invisible')
        }, interval)
    },
    welcome: function() {
        return this.hide(document.getElementById('welcome'), 3000)
    },
    left: function() {
        var children = document.getElementById('left').childNodes
        var childrenArray = [].slice.call(children)
        this.show(document.getElementById('left'), 3500)
        setTimeout(function() {
            childrenArray.map(function(child) {
                if (typeof child.classList === 'undefined') { return child }
                return child.classList.add('visible')
            })
        }, 4500)
    },
    right: function() {
        var children = document.getElementById('right').childNodes
        var childrenArray = [].slice.call(children)
        this.show(document.getElementById('right'), 4500)
        setTimeout(function() {
            childrenArray.map(function(child) {
                if (typeof child.classList === 'undefined') { return child }
                return child.classList.add('visible')
            })
        }, 5500)
    }
}

window.onload = function () {
    API.welcome()
    API.left()
    API.right()
}