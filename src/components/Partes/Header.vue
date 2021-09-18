<template>
    <b-navbar ref="navbar" :type="principal ? 'dark' : 'light'" :variant="principal ? '' : 'warning'" fixed='top' class="header" :class="{ 'hidden-navbar': !showNavbar }">
        <div class="div-sep-20per" />
        <b-navbar-nav>
            <b-navbar-brand class="no-select">
                <b-row>
                    <b-col class="quita-padding quita-margen" align-self="center">
                        <img src="@a/logo.png" class="dim-logo">
                    </b-col>
                    <b-col v-if="!isMobile()" class="quita-padding quita-margen" align-self="center">
                        <p class="texto-header">Cuarto Dulce</p>
                    </b-col>
                </b-row>
            </b-navbar-brand>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
            <b-nav-item @click="irA('principal')" class="btn-navbar" :active="navbarindex == 0">Inicio</b-nav-item>
            <b-nav-item @click="irA('menu')" class="btn-navbar" :active="navbarindex == 1">Menu</b-nav-item>
            <b-nav-item @click="irA('agendar')" class="btn-navbar" :active="navbarindex == 2">Agendar</b-nav-item>
            <b-nav-item @click="irA('nosotros')" class="btn-navbar" :active="navbarindex == 3">Conócenos</b-nav-item>
        </b-navbar-nav>
        <div class="div-sep-20per" />
    </b-navbar>
</template>

<script>
const OFFSET = 60
export default {
    name: 'headermain',
    props: {
        //msg: String
        navbarindex: Number,
        principal: Boolean,
    },
    data() {
        return {
            window: window,
            scrollPrev: 0,
            showNavbar: true
        }
    },
    mounted() {
        if (this.principal) {
            window.addEventListener('scroll', () => {
                try {
                    /* TRANSPARENCIA DE LA NAVBAR */
                    let navbar = this.$refs.navbar.$el
                    if (window.scrollY > 100) {
                        navbar.classList.remove('navbar-dark')
                        navbar.classList.add('bg-warning')
                        navbar.classList.add('navbar-light')
                    } else {
                        navbar.classList.remove('bg-warning')
                        navbar.classList.remove('navbar-light')
                        navbar.classList.add('navbar-dark')
                    }
                    if (this.isMobile()) {
                        if (window.pageYOffset < 0) {
                            return
                        }
                        if (Math.abs(window.pageYOffset - this.scrollPrev) < OFFSET) {
                            return
                        }
                        this.showNavbar = window.pageYOffset < this.scrollPrev
                        this.scrollPrev = window.pageYOffset
                    }
                } catch (err) { err }
            });
        } else {
            if (this.isMobile()) {
                window.addEventListener('scroll', () => {
                    if (window.pageYOffset < 0) {
                        return
                    }
                    if (Math.abs(window.pageYOffset - this.scrollPrev) < OFFSET) {
                        return
                    }
                    this.showNavbar = window.pageYOffset < this.scrollPrev
                    this.scrollPrev = window.pageYOffset
                })
            }
        }
        window.scrollTo(0,0)
    },
    methods: {
        irA(ruta) {
            this.$router.push({ name: ruta })
        },
        isMobile() {
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true
            } else {
                return false
            }
        },
        isLandscape() {
            return window.innerHeight < window.innerWidth
        },
        onScroll () {
            if (window.pageYOffset < 0) {
                return
            }
            if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
                return
            }
            this.showNavbar = window.pageYOffset < this.lastScrollPosition
            this.lastScrollPosition = window.pageYOffset
        }
    },
    computed: {
        
    }
}
</script>

<style scope>
.navbar {
    transition: 0.3s all ease-out;
}

.navbar.hidden-navbar {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
</style>