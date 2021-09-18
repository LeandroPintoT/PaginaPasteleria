<template>
    <div>
        <header-main :navbarindex="0" :principal="true" />
        <div>
            <video-con-texto :videoSrc="require('@a/media/vid-tenedor.mp4')" :dataBtn="dataBtn" :isMob="isMobile()" />
        </div>
        <div>
            <h1 id="menu" class="fondo">Productos destacados</h1>
            <fila-cards :data="dataCards" :mostrarBtn="true" />
        </div>
        <div>
            <h1>¿Tienes dudas?</h1>
            <span><b>Envíanos un mensaje y te contactaremos a la brevedad</b></span>
            <br v-if="isMobile()">
            <br v-if="isMobile()">
            <contacto :isMob="isMobile()" />
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
                activo: false,
                texto: 'Agendar',
                textoCentral:   'Bienvenid@ a este pequeño rincón de sabor al que llamamos Cuarto Dulce, \
                                ¡Esperamos que tu experiencia sea tan buena como el sabor de nuestra pastelería, \
                                100% artesanal, pero con más encanto que nunca!',
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
                    let arrutas = []
                    for (let ruta of data.srutaimgproducto.split(',')) {
                        arrutas.push(require('@a/media/' + ruta))
                    }
                    this.dataCards.titulosCards.push(data.snombreproducto)
                    this.dataCards.desCortaCards.push(data.sdescortaproducto)
                    this.dataCards.desLargaCards.push(data.sdeslargaproducto)
                    this.dataCards.srcsCards.push(arrutas)
                    this.dataCards.ingredientes.push(data.singredientesproducto)
                    this.dataCards.idsCards.push(data.nidproducto)
                }
            }
        })
    },
    methods: {
        fnBtnVideo () {
             this.$router.push({ name: 'agendar' })
        },
        isMobile() {
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true
            } else {
                return false
            }
        }
    }

}
</script>

<style scoped>
h1 {
    font-family: "Architects Daughter", sans-serif;
    text-shadow: 1px 1px 1px #0a0a0a;
    padding: 5rem 0 1rem 0;
    color: green;
}

span {
    font-size: 1.5rem;
}
</style>
