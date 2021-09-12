<template>
    <div>
        <header-main :navbarindex="0" :principal="true" />
        <div>
            <video-con-texto :videoSrc="require('@a/media/vid-tenedor.mp4')" :dataBtn="dataBtn" />
        </div>
        <div>
            <h1 id="menu" class="fondo">Productos destacados</h1>
            <fila-cards :data="dataCards" :mostrarBtn="true" />
        </div>
        <div>
            <h1 id="contacto" class="fondo">Contáctanos</h1>
            <contacto />
        </div>
    </div>
</template>

<script>
import VideoConTexto from './Partes/VideoConTexto.vue'
import HeaderMain from './Partes/Header.vue'
import FilaCards from './Partes/FilaCards.vue'
import Contacto from './Partes/Contacto.vue'
import axios from 'axios'

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
            server_ip: process.env.VUE_APP_SERVER_IP,
            server_port: process.env.VUE_APP_SERVER_PORT,
            dataCards: {
                titulosCards: [],
                desCortaCards: [],
                desLargaCards: [],
                srcsCards: [],
                ingredientes: [],
                idsCards: [],
            },
            dataBtn: {
                activo: true,
                texto: 'Agendar',
                textoCentral: 'Aquí iria algun texto de bienvenida, aunque también se puede quitar y dejar solo \
                            el video si es que está bien editado y tiene letras o imagenes que quieres que se vean.',
                funcion: this.fnBtnVideo,
                variante: 'success'
            },
        }
    },
    created() {
        
    },
    mounted() {
        window.scrollTo(0, 0)
        axios.get(this.server_ip + (this.server_port ? (':' + this.server_port) : '') + '/api/prodsdestacados', {
                params: {}
        }).then((res) => {
            if (res.data.sNumError === '0') {
                for (let data of res.data['data']) {
                    this.dataCards.titulosCards.push(data.snombreproducto)
                    this.dataCards.desCortaCards.push(data.sdescortaproducto)
                    this.dataCards.desLargaCards.push(data.sdeslargaproducto)
                    this.dataCards.srcsCards.push(require('@a/' + data.srutaimgproducto))
                    this.dataCards.ingredientes.push(data.singredientesproducto)
                    this.dataCards.idsCards.push(data.nidproducto)
                }
            }
        })
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
    font-family: "Architects Daughter", sans-serif;
    text-shadow: 1px 1px 1px #0a0a0a;
    padding: 5rem 0 3rem 0;
    color: green;
}
</style>
