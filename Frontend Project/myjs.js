const oe = "[data-js-header]";
        class re {
            constructor()
            {
                e(this, "els", {
                    instance: oe
                }),
                e(this, "stateClasses", {
                    isScrolled: "is-scrolled"
                }),
                this.instance = document.querySelector(oe),
                this.instance && (this.init(), this.bindEvents())
            }
            setBodyHeaderHeightProperty()
            {
                o(document.querySelector("html"), "headerHeight", `${this.instance.offsetHeight}px`)
            }
            handleScroll()
            {
                window.scrollY > 30 ? this.instance.classList.add(this.stateClasses.isScrolled) : this.instance.classList.remove(this.stateClasses.isScrolled)
            }
            init()
            {
                this.setBodyHeaderHeightProperty()
            }
            bindEvents()
            {
                const e = n((() => this.setBodyHeaderHeightProperty()), 150);
                document.addEventListener("scroll", (() => this.handleScroll())),
                window.addEventListener("resize", (() => e())),
                window.addEventListener("load", (() => this.setBodyHeaderHeightProperty()))
            }
        }