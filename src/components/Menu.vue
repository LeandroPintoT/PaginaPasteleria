<template>
    <div class="sep-sup">
        <!-- El index 1 es la opcion de menu -->
        <Header :navbarindex="1" :principal="false" />
        <h1>¡Mira todas las posibilidades que tenemos para tí!</h1>
        <div>
            <fila-cards :data="dataCards" :mostrarBtn="false" />
        </div>
    </div>
</template>

<script>
import Header from './Partes/Header.vue'
import FilaCards from './Partes/FilaCards.vue'
import axios from 'axios'

export default {
    name: 'Menu',
    props: {
        
    },
    components: {
        Header,
        FilaCards,
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
                precios: [],
            }
        }
    },
    mounted() {
        window.scrollTo(0, 0)
        axios.get(this.server_ip + (this.server_port ? (':' + this.server_port) : '') + '/api/productos', {
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
                    this.dataCards.precios.push(data.sprecio)
                }
            }
        })
    },
    methods: {
        
    }

}
</script>

<style scoped>
h1 {
    padding: 1rem 0 3rem 0;
}
</style>