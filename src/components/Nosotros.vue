<template>
    <div class="sep-sup">
        <!-- El index 1 es la opcion de menu -->
        <Header :navbarindex="3" :principal="false" />
        <img-texto :imgizq="true" :srcimg="require('@a/media/img-pedido.jpg')" :texto="'texto de prueba para revisar lo que se puede hacer'" />
    </div>
</template>

<script>
import Header from './Partes/Header.vue'
import ImgTexto from './Partes/ImgTexto.vue'

export default {
    name: 'Nosotros',
    components: {
        Header,
        ImgTexto
    },
    props: [
        
    ],
    data() {
        return {
            
        }
    },
    created() {
        
    },
    mounted() {
        
    },
    methods: {
        
    }

}
</script>

<style scope>

</style>