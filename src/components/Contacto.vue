<template>
    <b-container>
        <b-row class="justify-content-md-right">
            <b-col col lg="6">
                <b-row>
                    <b-col>
                        <h2>¿Tienes dudas?</h2>
                        <p>Envíanos un mensaje y te contactaremos a la brevedad</p>
                        <img src="@a/media/img-pedido.jpg" class="img-pedido">
                    </b-col>
                </b-row>
            </b-col>
            <b-col col lg="6">
                <b-card-body class="text-center">
                    <b-row>
                        <b-col>
                            <b-form-input
                                :type="'text'"
                                aria-describedby="nombreHelp"
                                placeholder="Nombre y apellido:"
                                id="nombre"
                                v-model="nombre"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-form-input
                                :type="'text'"
                                aria-describedby="emailHelp"
                                placeholder="Email:"
                                id="email"
                                v-model="email"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-form-input
                                :type="'text'"
                                aria-describedby="telefonoHelp"
                                placeholder="Teléfono:"
                                id="telefono"
                                v-model="telefono"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-form-textarea
                                :type="'text'"
                                aria-describedby="mensajeHelp"
                                placeholder="Mensaje:"
                                id="mensaje"
                                v-model="mensaje"
                                rows="5"
                                max-rows="5"
                                v-on:keyup.enter="enviarFormulario"></b-form-textarea>
                        </b-col>
                    </b-row>
                    <br>
                    <input type="button" class="btn btn-primary" @click="enviarFormulario" value="Enviar">
                </b-card-body>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'Contacto',
    components: {
        
    },
    data() {
        return {
            nombre: '',
            email: '',
            telefono: '',
            mensaje: ''
        }
    },
    created() {
        
    },
    mounted() {
        
    },
    methods: {
        enviarFormulario () {
            if(this.validarCamposPedido()) {
                console.log('ta bien')
            } else {
                console.log('ta mal')
            }
        },
        validarCamposPedido () {
            var lleno = true
            if(this.nombre === '') {
                document.getElementById('nombreHelp').hidden = false
                lleno = false
            } else {
                document.getElementById('nombreHelp').hidden = true
            }
            if(!this.validarCorreo()) {
                document.getElementById('emailHelp').hidden = false
                lleno = false
            } else {
                document.getElementById('emailHelp').hidden = true
            }
            if(this.telefono === '') {
                document.getElementById('telefonoHelp').hidden = false
                lleno = false
            } else {
                document.getElementById('telefonoHelp').hidden = true
            }
            if(this.mensaje === '') {
                document.getElementById('mensajeHelp').hidden = false
                lleno = false
            } else {
                document.getElementById('mensajeHelp').hidden = true
            }
            if(lleno) {
                return true
            }
            return false
        },
        validarCorreo() {
            return /^[a-z0-9][a-z0-9-_]{1,}[a-z0-9-_]@[a-z0-9][a-z0-9-_]{1,61}[a-z0-9]\.[a-z]{2,4}$/i.test(this.email)
        }
    },
    computed: {
        
    }

}
</script>

<style scope>
.img-pedido {
    min-width: 100%;
    max-width: 100%;
    min-height: 50%;
    max-height: 50%;
}

h2 {
    color: green;
}
</style>