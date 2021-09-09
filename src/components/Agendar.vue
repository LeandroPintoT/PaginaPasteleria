<template>
    <div class="sep-sup">
        <!-- El index 2 es la opcion de calendarizacion -->
        <header-sec :navbarindex="2" />
        <h1>¡Agenda tu pedido aquí!</h1>
        <div class="cont">
            <b-container>
                <b-form @submit="enviarFormulario" @reset="onReset" v-if="show">
                    <b-form-group
                        id="input-group-1"
                        label="Nombre:"
                        label-for="input-1"
                    >
                        <b-form-input
                            id="input-1"
                            v-model="form.nombre"
                            placeholder="Ej. Pablo Pizarro"
                            required
                            autofocus
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group
                        id="input-group-2"
                        label="Correo electrónico:"
                        label-for="input-2"
                    >
                        <b-form-input
                            id="input-2"
                            v-model="form.email"
                            :state="checkMail"
                            placeholder="Ej. ejemplo@mail.com"
                            required
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group
                        id="input-group-3"
                        label="Teléfono:"
                        label-for="input-3"
                    >
                        <b-form-input
                            id="input-3"
                            v-model="form.telefono"
                            placeholder="Ej. +56912345678 o 322123456"
                            required
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group
                        id="input-group-5"
                        label="Fecha de entrega:"
                        label-for="input-5"
                    >
                        <b-form-datepicker
                            v-model="form.fecha"
                            :min="datemin"
                            :max="datemax"
                            locale="es"
                            placeholder="No se ha seleccionado una fecha"
                            required
                        ></b-form-datepicker>
                    </b-form-group>
                    <b-form-group
                        id="input-group-4"
                        label="Pedido:"
                        label-for="input-4"
                    >
                        <b-form-textarea
                            id="input-4"
                            v-model="form.pedido"
                            placeholder="Ingresa tu pedido..."
                            rows="5"
                            max-rows="6"
                        ></b-form-textarea>
                    </b-form-group>
                    <b-button type="submit" variant="primary">Enviar</b-button>
                    <b-button type="reset" variant="danger">Limpiar</b-button>
                </b-form>
            </b-container>
        </div>
    </div>
</template>

<script>
import HeaderSec from './Headers/HeaderSec.vue'

export default {
    name: 'Calendarizacion',
    components: {
        HeaderSec,
    },
    data() {
        return {
            form: {
                nombre: '',
                email: '',
                telefono: '',
                pedido: '',
                fecha: '',
            },
            show: true,
            datemin: null,
            datemax: null,
        }
    },
    created() {
        /* SETEA LA FECHA MINIMA Y MÁXIMA DEL DATEPICKER */
        let now = new Date()
        /*                                 ?                                                            :                                                           */
        this.datemin = now.getHours() < 13 ? new Date(now.getFullYear(), now.getMonth(), now.getDate()) : new Date(now.getFullYear(), now.getMonth(), now.getDate()+1)
        this.datemax = new Date(this.datemin.getFullYear(), this.datemin.getMonth() + 1, this.datemin.getDate())
    },
    mounted() {
        
    },
    methods: {
        enviarFormulario (event) {
            event.preventDefault()
            let data = JSON.stringify(this.form)
            console.log(data)
        },
        onReset(event) {
            event.preventDefault()
            // Reset our form values
            this.form.nombre = ''
            this.form.email = ''
            this.form.telefono = ''
            this.form.fecha = null
            this.form.pedido = ''
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        }
    },
    computed: {
        checkMail () {
            if (this.form.email === '') return null
            return /^[a-z0-9][a-z0-9-_.]{1,}[a-z0-9-_.]@[a-z0-9][a-z0-9-_.]{1,61}[a-z0-9.]\.[a-z]{2,4}$/i.test(this.form.email)
        }
    }

}
</script>

<style scope>
.cont {
    text-align: left !important;
}

.sep-sup {
    padding-top: 5rem;
}

h1 {
    font-family: "Sofia", sans-serif;
    text-shadow: 1px 1px 1px #0a0a0a;
    color: green;
}
</style>