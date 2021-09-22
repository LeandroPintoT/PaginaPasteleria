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
                <p class="texto-detalle"><b><span>Valor: </span>
                <span v-bind:key="'valor_' + key" v-for="(valor, key) in data.precio.split(',').slice(0, data.precio.split(',').length-1)">${{ formatoPeso(valor) }} - </span>
                <span v-bind:key="'valor_ult_' + key" v-for="(valor, key) in data.precio.split(',').slice(data.precio.split(',').length-1)">${{ formatoPeso(valor) }}</span></b></p>
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
        range (start, stop, step) {
            if (typeof stop == 'undefined') {
                // one param defined
                stop = start;
                start = 0;
            }

            if (typeof step == 'undefined') {
                step = 1;
            }

            if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
                return [];
            }

            var result = [];
            for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
                result.push(i);
            }

            return result;
        },
        formatoPeso(valor) {
            let cont = 0
            let num = valor.toString()
            let strnum = []
            for (let i of this.range(num.length).reverse()) {
                if (cont === 3) {
                    strnum.push('.')
                    cont = 0
                }
                strnum.push(num[i])
                cont += 1
            }
            return strnum.reverse().join('')
        }
    }
}
</script>

<style scoped>

</style>