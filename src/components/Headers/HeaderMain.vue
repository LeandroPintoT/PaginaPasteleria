<template>
    <b-navbar ref="navbar" type="dark" fixed='top'>
        <div class="div-sep-20per" />
        <b-navbar-nav>
            <b-navbar-brand class="no-select">
                <img src="@a/logo.png" style="height: 2rem; width: 2rem" class="d-inline-block align-top" alt="Kitten">
                Cuarto Dulce
            </b-navbar-brand>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
            <b-nav-item @click="deslizar(0)" class="btn-navbar" :active="navbarindex == 0">Inicio</b-nav-item>
            <b-nav-item @click="deslizar(1)" class="btn-navbar" :active="navbarindex == 1">Destacados</b-nav-item>
            <b-nav-item @click="deslizar(2)" class="btn-navbar" :active="navbarindex == 2">Contacto</b-nav-item>
        </b-navbar-nav>
        <div class="div-sep-20per" />
    </b-navbar>
</template>

<script>
export default {
    name: 'headermain',
    props: {
        //msg: String
    },
    data() {
        return {
            navbarindex: 0,
        }
    },
    mounted() {
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

                /* REVISA LA POSICION DE LA PANTALLA Y CAMBIA LA SECCION ACTIVA */
                let menu = document.getElementById('menu').getBoundingClientRect()
                let contacto = document.getElementById('contacto').getBoundingClientRect()
                if (menu.top <= 400 && contacto.top > 400) {
                    this.navbarindex = 1
                } else if (contacto.top <= 400) {
                    this.navbarindex = 2
                } else {
                    this.navbarindex = 0
                }
            } catch (err) { err }
        });
    },
    methods: {
        deslizar(id) {
            let elem
            switch (id) {
                case 0:
                    elem = document.getElementById('inicio')
                    elem.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    break
                case 1:
                    elem = document.getElementById('menu')
                    elem.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    break
                case 2:
                    elem = document.getElementById('contacto')
                    elem.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    break
                default:
                    break
            }
        }
    }
}
</script>

<style scope>
.navbar {
    transition: all 0.3s;
}
</style>