<template>
    <div>
        <header-main />
        <div style="">
            <video-con-texto :videoSrc="require('@a/media/kimetsu.mp4')" :dataBtn="dataBtn" />
        </div>
        <div>
            <h1 id="menu" class="fondo">Productos destacados</h1>
            <fila-cards :titulos="titulosCards" :descs="descripcionesCards" :srcs="srcsCards" :cantidadPorLinea="cantidadCardsPorLinea" />
        </div>
        <div>
            <h1 id="contacto" class="fondo">Contáctanos</h1>
            <contacto />
        </div>
    </div>
</template>

<script>
import VideoConTexto from './media/VideoConTexto.vue'
import HeaderMain from './Headers/HeaderMain.vue'
import FilaCards from './FilaCards.vue'
import Contacto from './Contacto.vue'

export default {
    name: 'Principal',
    components: {
        VideoConTexto,
        FilaCards,
        Contacto,
        HeaderMain
    },
    data() {
        return {
            titulosCards: [
                    'Ejemplo 1',
                    'Ejemplo 2',
                    'Ejemplo 3',
                    //'Ejemplo 4'
                ],
            descripcionesCards: [
                    'Este es el texto del primer ejemplo.',
                    'Este es el texto del segundo ejemplo, diferente del primero.',
                    'Y este es el texto del tercer ejemplo.',
                    //'Este es el texto de la última carta para probar.'
                ],
            srcsCards: [
                    require('@a/media/ejemplo1.jpg'),
                    require('@a/media/ejemplo2.jpg'),
                    require('@a/media/ejemplo3.jpg'),
                    //require('@a/media/ejemplo4.jpg')
                ],
            dataBtn: {
                activo: true,
                texto: 'Agendar',
                textoCentral: 'Aquí iria algun texto de bienvenida, aunque también se puede quitar y dejar solo \
                               el video si es que está bien editado y tiene letras o imagenes que quieres que se vean.',
                funcion: this.fnBtnVideo,
                variante: 'success'
            },
            cantidadCardsPorLinea: 3    // Maximo 4 si se mantiene la columna con col="3" porque son 12 columnas en total
        }
    },
    created() {
        
    },
    mounted() {
        
    },
    methods: {
        fnBtnVideo () {
             this.$router.push({ name: 'agendar' })
        }
    }

}
</script>

<style scoped>
h1 {
    font-family: "Sofia", sans-serif;
    text-shadow: 1px 1px 1px #0a0a0a;
    padding: 5rem 0 3rem 0;
    color: green;
}
</style>
