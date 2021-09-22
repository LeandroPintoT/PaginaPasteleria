<template>
    <b-container style="margin-bottom: 5rem">
        <b-row align-v="center">
            <b-col v-if="!isMob">
                <b-row>
                    <b-col>
                        <img src="@a/logo.png" class="img-pedido">
                    </b-col>
                </b-row>
            </b-col>
            <b-col class="caja-shadow">
                <b-card-body class="text-center">
                    <b-row>
                        <b-col style="text-align: left">
                            <span><b>Nombre:</b></span>
                            <b-form-input
                                :type="'text'"
                                placeholder="Ej: Benjamín González"
                                id="nombre"
                                v-model="form.nombre"></b-form-input>
                        </b-col>
                    </b-row>
                    <br>
                    <b-row>
                        <b-col style="text-align: left">
                            <span><b>Correo electrónico:</b></span>
                            <b-form-input
                                :type="'text'"
                                placeholder="Ej: correo@ejemplo.com"
                                id="email"
                                v-model="form.email"></b-form-input>
                        </b-col>
                    </b-row>
                    <br>
                    <b-row>
                        <b-col style="text-align: left">
                            <span><b>Mensaje:</b></span>
                            <b-form-textarea
                                placeholder=""
                                id="mensaje"
                                v-model="form.mensaje"
                                rows="4"
                                max-rows="5"></b-form-textarea>
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
import axios from 'axios'
import Swal from 'sweetalert2'
import qs from 'qs'

export default {
    name: 'Contacto',
    props: {
        isMob: Boolean
    },
    components: {
        
    },
    data() {
        return {
            server_ip: process.env.VUE_APP_SERVER_IP,
            server_port: process.env.VUE_APP_SERVER_PORT,
            form: {
                nombre: '',
                email: '',
                mensaje: ''
            }
        }
    },
    created() {
        
    },
    mounted() {
        
    },
    methods: {
        enviarFormulario () {
            let validado = this.validarCamposPedido()
            if(validado[0]) {
                let data = qs.stringify(this.form)
                axios.post(this.server_ip + (this.server_port ? (':' + this.server_port) : '') + '/api/contacto', data).then((res) => {
                    if (res.data['sNumError'] === '0') {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Su mensaje fue enviado correctamente',
                            text: '¡Gracias por interesarse por nosotros! Pronto recibirá un correo con la respuesta a su mensaje.',
                            confirmButtonColor: '#3085d6',
                            showConfirmButton: true
                        }).then(() => {
                            this.limpiarCampos()
                        })
                    } else {
                        Swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: '¡Oops!',
                            text: 'Ocurrió un error durante el proceso de contacto. Error: ' + res.data['sMensajeError'],
                            showConfirmButton: true
                        })
                    }
                }).catch((err) => {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: '¡Error!',
                        text: 'Ocurrió un error de comunicación con el servidor.' + err,
                        showConfirmButton: true
                    })
                })
            } else {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: '¡Cuidado!',
                    text: 'Ha ingresado información inválida. Corrija el campo ' + validado[1] + '.',
                    showConfirmButton: true
                })
            }
        },
        validarCamposPedido () {
            let lleno = true
            let campo = ''
            if(this.form.nombre === '') {
                lleno = false
                campo = 'nombre'
            }
            if(!this.validarCorreo() && lleno) {
                lleno = false
                campo = 'correo'
            }
            if(this.form.mensaje === '' && lleno) {
                lleno = false
                campo = 'mensaje'
            }
            if(lleno) {
                return [true]
            }
            return [false, campo]
        },
        validarCorreo() {
            return /^[a-z0-9][a-z0-9-_]{1,}[a-z0-9-_]@[a-z0-9][a-z0-9-_]{1,61}[a-z0-9]\.[a-z]{2,4}$/i.test(this.form.email)
        }
    },
    computed: {
        
    }

}
</script>

<style scoped>
.img-pedido {
    max-width: 100%;
    max-height: 100%;
}

h2 {
    color: green;
}
</style>