<template>
    <b-container>
        <b-row align-h="center">
            <!-- QUITAR LA CLASE dim-img-card PARA QUE LAS CARTAS TENGAN UN TAMAÑO DEPENDIENDO DE CUANTAS HAY EN UNA FILA -->
            <!-- O CAMBIAR EL TAMAÑO DE CADA UNA EN EL custom-css.css -->
            <b-col v-bind:key="'carta_' + key" v-for="(nlinea, key) in range(data.srcsCards.length)">
                <b-card
                    :title="data.titulosCards[key]"
                    :img-src="data.srcsCards[key]"
                    :img-alt="'imgejemplo' + key"
                    img-top
                    img-height="200"
                    img-width="100"
                    class="mb-2 dim-img-card custom-card"
                    @click="funcClick(key)"
                >
                    <b-card-text>
                        {{ data.desCortaCards[key] }}
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>
        <b-modal
            ref="modal-detalle-prod"
            hide-footer
            hide-header
            centered
            size="lg"
            content-class="centra-txt"
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
                idCard: null
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
    }

}
</script>

<style scope>

</style>