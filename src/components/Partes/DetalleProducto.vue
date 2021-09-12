<template>
    <b-container>
        <h2 class="texto-titulo">{{ data.tituloCard }}</h2>
        <br>
        <b-row>
            <b-col>
                <img class="img-detalle-producto" :src="data.srcCard">
                <p>{{ data.desLargaCard }}</p>
            </b-col>
            <b-col>
                <h4>Contiene:</h4>
                <p class="quita-margen" v-bind:key="'ingrediente_' + key" v-for="(ing, key) in data.ingredientes.split(',')">{{ ing }}</p>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'DetalleProducto',
    components: {
        
    },
    props: [
        'data'
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