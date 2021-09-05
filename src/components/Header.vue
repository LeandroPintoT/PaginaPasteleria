<template>
    <b-navbar ref="navbar" variant="dark" type="dark" fixed='top'>
        <div class="div-sep-20per" />
        <b-navbar-nav>
            <b-navbar-brand href="#">
                <img src="@a/logo.png" style="height: 2rem; width: 2rem" class="d-inline-block align-top" alt="Kitten">
                Pastelería
            </b-navbar-brand>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
            <b-nav-item @click="deslizar(0)" class="btn-navbar" :active="navbarindex == 0">Inicio</b-nav-item>
            <b-nav-item @click="deslizar(1)" class="btn-navbar" :active="navbarindex == 1">Menu</b-nav-item>
            <b-nav-item @click="deslizar(2)" class="btn-navbar" :active="navbarindex == 2">Agendar Pedido</b-nav-item>
            <b-nav-item @click="deslizar(3)" class="btn-navbar" :active="navbarindex == 3">Contacto</b-nav-item>
        </b-navbar-nav>
        <div class="div-sep-20per" />
    </b-navbar>
</template>

<script>
export default {
    name: 'Header',
    props: {
        //msg: String
    },
    data() {
        return {
            navbarindex: 0,
        }
    },
    mounted() {
        window.addEventListener('scroll', (e) => {
            let scroll = e.target.documentElement.scrollTop
            console.log('El menu esta en: ' + document.getElementById('menu').getBoundingClientRect().top + '\ny estoy en: ' + scroll)
            if (document.getElementById('menu').getBoundingClientRect().top <= 0) {
                this.navbarindex = 1
            } else {
                this.navbarindex = 0
            }
        });
    },
    methods: {
        deslizar(id) {
            let elem
            switch (id) {
                case 0:
                    elem = document.getElementById('inicio')
                    elem.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    break
                case 1:
                    elem = document.getElementById('menu')
                    elem.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    break
                default:
                    break
            }
        }
    }
}
</script>
