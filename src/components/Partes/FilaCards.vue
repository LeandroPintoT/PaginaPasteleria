<template>
    <b-container>
        <b-row align-h="center">
            <!-- QUITAR LA CLASE dim-img-card PARA QUE LAS CARTAS TENGAN UN TAMAÑO DEPENDIENDO DE CUANTAS HAY EN UNA FILA -->
            <!-- O CAMBIAR EL TAMAÑO DE CADA UNA EN EL custom-css.css -->
            <div v-bind:key="'carta_' + key" v-for="(nlinea, key) in range(data.srcsCards.length)">
                <b-card
                    :title="data.titulosCards[key]"
                    :img-src="data.srcsCards[key][0]"
                    :img-alt="'imgejemplo' + key"
                    img-top
                    img-height="270"
                    img-width="200"
                    class="mb-2 dim-img-card puntero"
                    @click="funcClick(key)"
                >
                    <b-card-text>
                        {{ data.desCortaCards[key] }} <br>
                        <span>Valor: </span>
                        <span v-bind:key="'valor_' + key" v-for="(valor, key) in data.precios[key].split(',').slice(0, data.precios[key].split(',').length-1)">${{ formatoPeso(valor) }} - </span>
                        <span v-bind:key="'valor_ult_' + key" v-for="(valor, key) in data.precios[key].split(',').slice(data.precios[key].split(',').length-1)">${{ formatoPeso(valor) }}</span>
                    </b-card-text>
                </b-card>
            </div>
        </b-row>
        <b-modal
            ref="modal-detalle-prod"
            hide-footer
            hide-header
            centered
            size="lg"
            content-class="centra-txt fondo"
        >
            <detalle-producto :data="dataClicked" />
            <br>
            <div style="text-align: right">
                <b-button variant="primary" @click="$refs['modal-detalle-prod'].hide()">Cerrar</b-button>
            </div>
        </b-modal>
        <b-button v-if="mostrarBtn" variant="primary" class="boton-grande" @click="irMenuCompleto">Ir al Menú Completo</b-button>
    </b-container>
</template>

<script>
import DetalleProducto from './DetalleProducto.vue'

export default {
    name: 'FilaCards',
    components: {
        DetalleProducto
    },
    props: [
        'data', 'mostrarBtn'
    ],
    data() {
        return {
            dataClicked: {
                tituloCard: null,
                desCortaCard: null,
                desLargaCard: null,
                srcCard: null,
                ingredientes: null,
                idCard: null,
                precio: 0,
            }
        }
    },
    created() {
        
    },
    mounted() {
        
    },
    methods: {
        irMenuCompleto () {
            this.$router.push({ name: 'menu' })
        },
        funcClick (id) {
            this.dataClicked.tituloCard = this.data.titulosCards[id]
            this.dataClicked.desCortaCard = this.data.desCortaCards[id]
            this.dataClicked.desLargaCard = this.data.desLargaCards[id]
            this.dataClicked.srcCard = this.data.srcsCards[id]
            this.dataClicked.ingredientes = this.data.ingredientes[id]
            this.dataClicked.idCard = id
            this.dataClicked.precio = this.data.precios[id]
            this.$refs['modal-detalle-prod'].show()
        },
        range(start, stop, step) {
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