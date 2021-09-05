<template>
    <div style="text-align: center">
        <b-row v-bind:key="'fila_cartas_' + key1" v-for="(nlinea, key1) in range(srcs.length/cantidadPorLinea)" cantidadPorLinea>
            <b-col v-bind:key="'columna_cartas_' + (key2)" v-for="(titulo, key2) in titulos.slice(cantidadPorLinea * nlinea, cantidadPorLinea*(nlinea + 1))">
                <b-card
                    :title="titulos[cantidadPorLinea * nlinea + key2]"
                    :img-src="srcs[cantidadPorLinea * nlinea + key2]"
                    :img-alt="'imgejemplo' + cantidadPorLinea * nlinea + key2"
                    img-top
                    class="mb-2 dim-img-card"
                >
                    <b-card-text>
                        {{ descs[cantidadPorLinea * nlinea + key2] }}
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name: 'FilaCards',
    components: {
        
    },
    props: [
        'titulos', 'srcs', 'descs', 'cantidadPorLinea'
    ],
    data() {
        return {
            id_item: 0
        }
    },
    created() {
        
    },
    mounted() {
        
    },
    methods: {
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