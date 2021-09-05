<template>
    <div id="inicio">
        <video-background :src="videoSrc" class="video-banner" loop></video-background>
        <div class="text-block tb-center">
            <div class="center-item-vert">
                <p class="prueba">Aquí iria algun texto de bienvenida, aunque también se puede quitar y dejar solo
                    el video si es que está bien editado y tiene letras o imagenes que quieres que se vean.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VideoConTexto',
    props: {
        videoSrc: String
    },
    components: {
        
    },
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {

    }

}
</script>