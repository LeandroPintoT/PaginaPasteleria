<template>
    <div id="inicio">
        <video-background :src="videoSrc" class="video-banner" loop></video-background>
        <div class="text-block tb-center">
            <div class="center-item-vert">
                <p class="texto-video">{{ dataBtn.textoCentral }}</p>
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
        isMob: Boolean,
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
        calculaDims() {
            document.getElementById('inicio').style.margin = '0px'
            document.getElementById('inicio').style.padding = '0px'
            document.getElementById('inicio').style.top = '0px'
            document.getElementById('inicio').style.left = '0px'
            document.getElementById('inicio').style.overflow = 'hidden'
            document.getElementById('inicio').style.width = document.documentElement.clientWidth + 'px'
            document.getElementById('inicio').style.height = document.documentElement.clientHeight + 'px'
        }
    }

}
</script>