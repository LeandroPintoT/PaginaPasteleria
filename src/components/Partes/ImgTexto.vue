<template>
    <div>
        <b-row v-if="imgizq" style="width: 100vw">
            <b-col style="text-align: right; padding: 0px">
                <img :src="srcimg" class="img-custom">
            </b-col>
            <b-col style="text-align: left">
                <p>{{ texto }}</p>
            </b-col>
        </b-row>
        <b-row v-if="!imgizq" style="width: 100vw">
            <b-col style="text-align: right">
                <p>{{ texto }}</p>
            </b-col>
            <b-col style="text-align: left; padding: 0px">
                <img :src="srcimg" class="img-custom">
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name: 'ImgTexto',
    components: {
        
    },
    props: {
        imgizq: Boolean,
        srcimg: String,
        texto: String,
        
    },
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
.img-custom {
    min-width: 100%;
    max-width: 100%;
    min-height: 30vh;
    max-height: 30vh;
}
</style>