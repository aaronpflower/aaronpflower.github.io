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
    showChildren: function(children, interval) {
        setTimeout(function() {
            children.map(function(child) {
                if (typeof child.classList === 'undefined') { return child }
                return child.classList.add('visible')
            })
        }, interval)
    },
    welcome: function() {
        return this.hide(document.getElementById('welcome'), 3000)
    },
    left: function() {
        var children = document.getElementById('left').childNodes
        var childrenArray = [].slice.call(children)
        this.show(document.getElementById('left'), 3500)
        this.showChildren(childrenArray, 4500)
    },
    right: function() {
        var children = document.getElementById('right').childNodes
        var childrenArray = [].slice.call(children)
        this.show(document.getElementById('right'), 4500)
        this.showChildren(childrenArray, 5500)
    },

    handleSmoothScroll: function(e, destination) {
        e.preventDefault();
        window.smoothScroll(destination, 500, null, document.getElementById('right'))
    },

    scrollToo: function() {
        var targets = document.querySelectorAll('.target');
        var targetsArray = [].slice.call(targets)

        targetsArray.map(function(target) {
            return target.addEventListener('click', function(e) {
                API.handleSmoothScroll(e, document.getElementById(target.getAttribute("data-destination")))
            })
        })
    }
}

window.onload = function () {
    API.welcome()
    API.left()
    API.right()
    API.scrollToo()
}