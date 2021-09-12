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
            }
        }
    },
    mounted() {
        window.scrollTo(0, 0)
        axios.get(this.server_ip + (this.server_port ? (':' + this.server_port) : '') + '/api/productos', {
                params: {}
        }).then((res) => {
            for (let data of res.data['data']) {
                this.dataCards.titulosCards.push(data.snombreproducto)
                this.dataCards.desCortaCards.push(data.sdescortaproducto)
                this.dataCards.desLargaCards.push(data.sdeslargaproducto)
                this.dataCards.srcsCards.push(require('@a/' + data.srutaimgproducto))
                this.dataCards.ingredientes.push(data.singredientesproducto)
                this.dataCards.idsCards.push(data.nidproducto)
            }
        })
    },
    methods: {
        
    }

}
</script>

<style scope>
.sep-sup {
    padding: 5rem 0rem 5rem 0rem;
}

h1 {
    padding: 1rem 0 3rem 0;
}
</style>