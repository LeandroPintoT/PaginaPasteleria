<template>
    <div id="inicio">
        <video-background :src="videoSrc" class="video-banner" loop></video-background>
        <div class="text-block tb-center">
            <div class="center-item-vert">
                <p class="prueba">{{ dataBtn.textoCentral }}</p>
                <b-button v-if="dataBtn.activo" @click="dataBtn.funcion" :variant="dataBtn.variante">{{ dataBtn.texto }}</b-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VideoConTexto',
    props: {
        videoSrc: String,
        dataBtn: Object,
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