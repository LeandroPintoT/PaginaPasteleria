<template>
    <b-navbar ref="navbar" :type="principal ? 'dark' : 'light'" :variant="principal ? '' : 'warning'" fixed='top' style="width: 100vw">
        <div class="div-sep-20per" />
        <b-navbar-nav>
            <b-navbar-brand class="no-select">
                <b-row>
                    <b-col class="quita-padding quita-margen" align-self="center">
                        <img src="@a/logo.jpeg" class="dim-logo">
                    </b-col>
                    <b-col class="quita-padding quita-margen" align-self="center">
                        <p class="texto-header" v-if="!isMobile()">Cuarto Dulce</p>
                    </b-col>
                </b-row>
            </b-navbar-brand>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
            <b-nav-item @click="irA('principal')" class="btn-navbar" :active="navbarindex == 0">Inicio</b-nav-item>
            <b-nav-item @click="irA('menu')" class="btn-navbar" :active="navbarindex == 1">Menu</b-nav-item>
            <b-nav-item @click="irA('agendar')" class="btn-navbar" :active="navbarindex == 2">Agendar</b-nav-item>
            <b-nav-item @click="irA('nosotros')" class="btn-navbar" :active="navbarindex == 3">Quién Soy</b-nav-item>
        </b-navbar-nav>
        <div class="div-sep-20per" />
    </b-navbar>
</template>

<script>
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
                } catch (err) { err }
            });
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
        }
    },
    computed: {
        
    }
}
</script>

<style scope>
.navbar {
    transition: all 0.3s;
}
</style>