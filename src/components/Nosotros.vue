<template>
    <div class="sep-sup">
        <!-- El index 1 es la opcion de menu -->
        <Header :navbarindex="3" :principal="false" />
        <h1>Este es el proyecto</h1>
        <img-texto
            :postxt="'right'"
            :srcimg="require('@a/media/diego-batiendo.jpg')"
            :texto="'Mi nombre es Diego, soy pastelero, y vengo a contarte un poquito \
                    acerca de este proyecto. Este cuartito lleno de sabor, color y sueños.'" />
        <img-texto
            :postxt="'down'"
            :srcimg="require('@a/media/torta-coco-chocolate-blanco.jpg')"
            :texto="'Cuarto Dulce parte como una necesidad. Una necesidad de crear, de \
                    buscar productos que me dejaran satisfecho y que dejaran satisfecho a todo el que los probara.'" />
        <img-texto
            :postxt="'down'"
            :srcimg="require('@a/media/diego-premio.jpg')"
            :texto="'Desde que partí en el mundo de la gastronomía me llamó la atención la \
                    infinidad de posibilidades disponibles a la hora de crear, de reinventar. \
                    Y ahí empezó mi sueño, llegar a formar un proyecto en el que pudiera sacarle \
                    provecho a esas chances para mostrarle a la gente que la pastelería no es \
                    solamente algo que se toma con un té para cortar el apetito, si no que existe \
                    algo distinto para cada ocasión y, según mi filosofía… La mejor pastelería es \
                    la que te deja pidiendo más.'" />
        <img-texto
            :postxt="'left'"
            :srcimg="require('@a/media/muffin-chocolate.jpg')"
            :texto="'La pastelería chilena tiene muchos productos que, hoy en día, son favoritos de \
                    muchos, pero nunca evoluciona. La idea de Cuarto Dulce es mejorar estos productos \
                    y llevarlos a los hogares chilenos, ayudando a mejorar la gastronomía un pasito a la vez.'" />
        <br><br>
        <h1>¡Anímate y prueba lo nuevo combinado con lo clásico, 100% hecho en casa!</h1>
    </div>
</template>

<script>
import Header from './Partes/Header.vue'
import ImgTexto from './Partes/ImgTexto.vue'

export default {
    name: 'Nosotros',
    components: {
        Header,
        ImgTexto
    },
    props: [
        
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

<style scoped>
h1 {
    padding-top: 1rem;
    padding-bottom: 0rem;
}
</style>