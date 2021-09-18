<template>
    <div>
        <div v-if="!isMobile() && postxt == 'right'" class="div-sep-nos center-item-hor">
            <div class="text-block-nosotros tb-center-nosotros">
                <b-row style="width: 100%" class="quita-margen">
                    <b-col style="text-align: right; padding: 0px">
                        <img :src="srcimg" class="img-custom-right-left">
                    </b-col>
                    <b-col style="text-align: justify; width: 100%">
                        <p class="center-item-vert-nos">{{ texto }}</p>
                    </b-col>
                </b-row>
            </div>
            <!--<b-card no-body class="overflow-hidden" style="max-width: 100%;">
                <b-row no-gutters>
                    <b-col md="6">
                        <b-card-img :src="srcimg" alt="Image" class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                        <b-card-body>
                            <b-card-text>
                                {{ texto }}
                            </b-card-text>
                        </b-card-body>
                    </b-col>
                </b-row>
            </b-card>-->
        </div>
        <div v-if="!isMobile() && postxt == 'left'" class="div-sep-nos center-item-hor">
            <div class="text-block-nosotros tb-center-nosotros">
                <b-row style="width: 100%" class="quita-margen">
                    <b-col style="text-align: justify; width: 100%">
                        <p class="center-item-vert-nos">{{ texto }}</p>
                    </b-col>
                    <b-col style="text-align: left; padding: 0px">
                        <img :src="srcimg" class="img-custom-right-left">
                    </b-col>
                </b-row>
            </div>
        </div>
        <div v-if="!isMobile() && postxt == 'up'" class="div-sep-nos center-item-hor">
            <div class="text-block-nosotros tb-center-nosotros">
                <b-row style="width: 100%" class="quita-margen centra-txt">
                    <p class="center-item-hor">{{ texto }}</p>
                </b-row>
                <b-row style="text-align: left; padding: 0px">
                    <img :src="srcimg" class="img-custom-up-down center-item-hor">
                </b-row>
            </div>
        </div>
        <div v-if="!isMobile() && postxt == 'down'" class="div-sep-nos center-item-hor">
            <div class="text-block-nosotros tb-center-nosotros">
                <b-row class="quita-margen">
                    <img :src="srcimg" class="img-custom-up-down center-item-hor">
                </b-row>
                <b-row style="width: 100%; padding: 1rem 1rem 1rem 1rem" class="quita-margen centra-txt">
                    <p class="center-item-hor quita-margen">{{ texto }}</p>
                </b-row>
            </div>
        </div>
        <div v-if="isMobile()" class="div-sep-nos center-item-hor" style="width: 100%">
            <b-row class="quita-margen">
                <img :src="srcimg" class="img-custom-up-down-mobile">
            </b-row>
            <b-row class="quita-margen centra-txt">
                <p class="center-item-hor" style="width: 80%;">{{ texto }}</p>
            </b-row>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ImgTexto',
    components: {
        
    },
    props: {
        postxt: String,
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
        isMobile() {
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true
            } else {
                return false
            }
        }
    }

}
</script>

<style scope>
.img-custom-right-left {
    min-width: 10%;
    max-width: 100%;
    min-height: 10%;
    max-height: 100%;
}

.img-custom-up-down {
    min-width: 10%;
    max-width: 100%;
    min-height: 10%;
    max-height: 100%;
}

.img-custom-up-down-mobile {
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
}
</style>