<template>
    <div>
        <Header />
        <div style="">
            <video-con-texto :videoSrc="require('@a/media/kimetsu.mp4')" />
        </div>
        <div>
            <div id="menu">
                <h1>Menú</h1>
                <fila-cards :titulos="titulosCards" :descs="descripcionesCards" :srcs="srcsCards" :cantidadPorLinea="cantidadCardsPorLinea" />
            </div>
        </div>
    </div>
</template>

<script>
import VideoConTexto from './media/VideoConTexto.vue'
import Header from './Header.vue'
import FilaCards from './FilaCards.vue'

export default {
    name: 'Principal',
    components: {
        VideoConTexto,
        Header,
        FilaCards,
    },
    data() {
        return {
            titulosCards: [
                    'Ejemplo 1',
                    'Ejemplo 2',
                    'Ejemplo 3',
                    'Ejemplo 4'
                ],
            descripcionesCards: [
                    'Este es el texto del primer ejemplo.',
                    'Este es el texto del segundo ejemplo, diferente del primero.',
                    'Y este es el texto del tercer ejemplo.',
                    'Este es el texto de la última carta para probar.'
                ],
            srcsCards: [
                    require('@a/media/ejemplo1.jpg'),
                    require('@a/media/ejemplo2.jpg'),
                    require('@a/media/ejemplo3.jpg'),
                    require('@a/media/ejemplo4.jpg')
                ],
            cantidadCardsPorLinea: 4    // Maximo 4 si se mantiene la columna con col="3" porque son 12 columnas en total
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

<style scoped>
h1 {
    font-family: "Sofia", sans-serif;
    padding: 5rem 0 3rem 0;
}
</style>
