<template>
    <b-navbar ref="navbar" type="light" variant="warning" fixed='top'>
        <div class="div-sep-20per" />
        <b-navbar-nav>
            <b-navbar-brand class="no-select">
                <img src="@a/logo.png" style="height: 2rem; width: 2rem" class="d-inline-block align-top" alt="Kitten">
                Cuarto Dulce
            </b-navbar-brand>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
            <b-nav-item @click="irA('principal')" class="btn-navbar" :active="navbarindex == 0">Inicio</b-nav-item>
            <b-nav-item @click="irA('menu')" class="btn-navbar" :active="navbarindex == 1">Menu</b-nav-item>
            <b-nav-item @click="irA('calendarizacion')" class="btn-navbar" :active="navbarindex == 2">Agendar</b-nav-item>
            <b-nav-item @click="irA('nosotros')" class="btn-navbar" :active="navbarindex == 3">Nosotros</b-nav-item>
        </b-navbar-nav>
        <div class="div-sep-20per" />
    </b-navbar>
</template>

<script>
export default {
    name: 'headersec',
    props: {
        //msg: String
        navbarindex: Number,
    },
    data() {
        return {
            
        }
    },
    mounted() {
        
    },
    methods: {
        irA(ruta) {
            this.$router.push({ name: ruta })
        }
    }
}
</script>

<style scope>
.navbar {
    transition: all 0.3s;
}
</style>