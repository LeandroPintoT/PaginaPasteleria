<template>
    <b-container>
        <h2 class="texto-titulo">{{ data.tituloCard }}</h2>
        <br>
        <b-row>
            <b-col>
                <!--<img class="img-detalle-producto" :src="data.srcCard">-->
                <b-carousel
                    id="carousel-1"
                    :interval="4000"
                    controls
                    indicators
                    background="#ababab"
                    img-width="300"
                    img-height="200"
                >
                    <b-carousel-slide
                        v-bind:key="'slide_' + key"
                        v-for="(src, key) in data.srcCard"
                        :img-src="src"
                    ></b-carousel-slide>
                </b-carousel>
                <p class="texto-detalle"><b>{{ data.desLargaCard }}</b></p>
                <p class="texto-detalle"><b>Valor: {{ data.precio }}</b></p>
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