<template>
    <div class="sep-sup">
        <!-- El index 2 es la opcion de calendarizacion -->
        <Header :navbarindex="2" :principal="false" />
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
                            :formatter="formatearTelefono"
                            placeholder="Ej. 56912345678 o 322123456"
                            required
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group
                        id="input-group-4"
                        :label="'Productos (máximo ' + this.maxproductos + '):'"
                        label-for="input-4"
                        v-if="!isMobile()"
                    >
                        <b-row v-bind:key="'select-' + key" v-for="(key) in range(clamp(pedidoaux.length, 1, this.maxproductos))">
                            <b-col>
                                <b-form-select
                                    :id="'input-4-' + key"
                                    v-model="pedidoaux[key]"
                                    :options="nombresProductos"
                                    value-field="value"
                                    text-field="text"
                                    disabled-field="notEnabled"
                                    @change="quitaElegido"
                                >Seleccione un producto</b-form-select>
                            </b-col>
                            <b-col cols="2" v-if="pedidoaux[key] && pedidoaux[key] != 9999" style="padding: 0px;">
                                <b-form-spinbutton
                                    :id="'spin_' + key"
                                    v-model="auxcantidades[key]"
                                    @change="quitaElegido"
                                    min="1"
                                    max="20"
                                    wrap
                                ></b-form-spinbutton>
                            </b-col>
                            <b-col cols="1" v-if="pedidoaux[key]">
                                <b-button variant="danger" @click="quitaElegidoBtn(key)">X</b-button>
                            </b-col>
                        </b-row>
                    </b-form-group>
                    <b-form-group
                        id="input-group-4"
                        :label="'Productos (máximo ' + this.maxproductos + '):'"
                        label-for="input-4"
                        v-if="isMobile()"
                    >
                        <b-row v-bind:key="'select-' + key" v-for="(key) in range(clamp(pedidoaux.length, 1, this.maxproductos))">
                            <b-col>
                                <b-form-select
                                    :id="'input-4-' + key"
                                    v-model="pedidoaux[key]"
                                    :options="nombresProductos"
                                    value-field="value"
                                    text-field="text"
                                    disabled-field="notEnabled"
                                    @change="quitaElegido"
                                >Seleccione un producto</b-form-select>
                            </b-col>
                            <b-col cols="4" v-if="pedidoaux[key] && pedidoaux[key] != 9999" style="padding: 0px;">
                                <b-form-spinbutton
                                    :id="'spin_' + key"
                                    v-model="auxcantidades[key]"
                                    @change="quitaElegido"
                                    min="1"
                                    max="20"
                                    wrap
                                ></b-form-spinbutton>
                            </b-col>
                            <b-col cols="2" v-if="pedidoaux[key]">
                                <b-button variant="danger" @click="quitaElegidoBtn(key)">X</b-button>
                            </b-col>
                        </b-row>
                    </b-form-group>
                    <b-form-group
                        id="input-group-5"
                        label="Fecha de entrega:"
                        label-for="input-5-1"
                    >
                        <b-form-datepicker
                            id="input-5-1"
                            v-model="form.fecha"
                            :min="datemin"
                            :max="datemax"
                            locale="es"
                            placeholder="No se ha seleccionado una fecha"
                            required
                        ></b-form-datepicker>
                        <b-form-select
                            id="input-5-2"
                            v-model="form.hora"
                            :options="horasValidas"
                            value-field="value"
                            text-field="text"
                        >Seleccione una hora</b-form-select>
                        <span style="color: red">*Recuerda que los pedidos personalizados deben agendarse con 48 horas de anticipación.</span><br>
                        <span style="color: red">**Después de las 17:00 hrs. solo se podrán agendar pedidos para dos o más días a contar de la fecha actual.</span>
                    </b-form-group>
                    <b-form-group
                        id="input-group-5"
                        label="Comentarios (opcional):"
                        label-for="input-5"
                    >
                        <b-form-textarea
                            id="input-5"
                            v-model="form.comentario"
                            placeholder="Escriba algo..."
                            rows="3"
                            max-rows="6"
                        ></b-form-textarea>
                    </b-form-group>
                    <h3>Subtotal: ${{ formatoPeso(subtotal) }}</h3>
                    <b-button type="submit" variant="primary">Enviar</b-button>
                    <b-button type="reset" variant="danger">Limpiar</b-button>
                </b-form>
            </b-container>
        </div>
    </div>
</template>

<script>
import Header from './Partes/Header.vue'
import axios from 'axios'
import Swal from 'sweetalert2'
import qs from 'qs'

export default {
    name: 'Calendarizacion',
    components: {
        Header,
    },
    data() {
        return {
            server_ip: process.env.VUE_APP_SERVER_IP,
            server_port: process.env.VUE_APP_SERVER_PORT,
            form: {
                nombre: '',
                email: '',
                telefono: '',
                pedido: [null],
                cantidades: [1],
                fecha: null,
                hora: '13:00',
                comentario: '',
                total: 0,
            },
            pedidoaux: [null],
            auxcantidades: [1],
            show: true,
            datemin: null,
            datemax: null,
            maxproductos: 5,
            nombresProductos: [{ value: null, text: 'Selecciona un producto', notEnabled: false }],
            preciosProductos: [],
            subtotal: 0,
            horasValidas: [ '10:00', '10:30', '11:00', '11:30', '12:00',
                            '12:30', '13:00', '13:30', '14:00', '14:30',
                            '15:00', '15:30', '16:00', '16:30', '17:00',
                            '17:30', '18:00', '18:30']
        }
    },
    created() {
        /* SETEA LA FECHA MINIMA Y MÁXIMA DEL DATEPICKER */
        let now = new Date()
        this.datemin = new Date(now.getFullYear(), now.getMonth(), now.getHours()+1 > 17 ? now.getDate()+2 : now.getDate()+1)
        this.datemax = new Date(this.datemin.getFullYear(), this.datemin.getMonth() + 1, this.datemin.getDate())
    },
    mounted() {
        window.scrollTo(0, 0)
        axios.get((this.server_ip != 'www.cuartodulce.cl' ? (this.server_ip + (this.server_port ? (':' + this.server_port) : '')) : '') + '/api/nombreproductos', {
                params: {}
        }).then((res) => {
            if (res.data.sNumError === '0') {
                for (let data of res.data['data']) {
                    this.nombresProductos.push({ value: data.nidproducto, text: data.snombreproducto, notEnabled: false })
                    this.preciosProductos.push(data.sprecio)
                }
            }
        })
    },
    methods: {
        enviarFormulario (event) {
            event.preventDefault()
            this.form.pedido = this.pedidoaux.filter((elem) => elem)
            this.form.cantidades = this.auxcantidades.filter((elem) => elem != 0)
            this.form.cantidades = this.auxcantidades.slice(0, this.form.pedido.length)
            this.form.total = this.subtotal
            if (!this.form.fecha) {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Error',
                    text: 'Debe definir una fecha de entrega',
                    showConfirmButton: true
                })
            } else if (this.form.pedido.length < 1) {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Error',
                    text: 'Debe seleccionar al menos 1 producto',
                    showConfirmButton: true
                })
            } else {
                Swal.fire({
                    position: 'center',
                    icon: 'question',
                    title: 'Confirmación',
                    text: '¿Son correctos los datos ingresados?',
                    confirmButtonColor: '#3085d6',
                    showConfirmButton: true,
                    confirmButtonText: 'Enviar',
                    showCancelButton: true,
                    cancelButtonText: 'Cancelar'
                }).then((res) => {
                    if (res.isConfirmed) {
                        this.form.pedido = this.form.pedido.join(',')
                        this.form.cantidades = this.form.cantidades.join(',')
                        let data = qs.stringify(this.form)
                        axios.post((this.server_ip != 'www.cuartodulce.cl' ? (this.server_ip + (this.server_port ? (':' + this.server_port) : '')) : '') + '/api/agendapedido', data).then((res) => {
                            if (res.data['sNumError'] === '0') {
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Agendado exitósamente',
                                    html: '<p>Su pedido fue realizado con éxito.</p><p><b>Se le enviará un correo con las instrucciones de pago.</b></p>',
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
                                    text: 'Ocurrió un error durante el proceso de agendado. ' + res.data['sMensajeError'],
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
                    }
                })
            }
        },
        onReset(event) {
            event.preventDefault()
            // Llama a limpiar los campos
            this.limpiarCampos()
        },
        limpiarCampos() {
            // Reset our form values
            this.form.nombre = ''
            this.form.email = ''
            this.form.telefono = ''
            this.form.fecha = null
            this.form.hora = '13:00'
            this.pedidoaux = [null]
            this.auxcantidades = [1]
            this.form.comentario = ''
            this.subtotal = 0
            this.quitaElegido()
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        },
        quitaElegido () {
            for (let id in this.pedidoaux) {
                if (!this.pedidoaux[id]) {
                    this.auxcantidades[id] = 0
                }
            }
            this.pedidoaux = this.pedidoaux.filter((elem) => elem)
            this.auxcantidades = this.auxcantidades.filter((elem) => elem != 0)
            for (let key in this.nombresProductos) {
                if (this.pedidoaux.includes(this.nombresProductos[key].value)) {
                    this.nombresProductos[key].notEnabled = true
                } else {
                    this.nombresProductos[key].notEnabled = false
                }
            }
            if (this.pedidoaux.length === 0 || this.pedidoaux[this.pedidoaux.length - 1]) {
                this.pedidoaux.push(null)
                this.auxcantidades.push(1)
            }
            this.subtotal = 0
            for (let key in this.nombresProductos) {
                if (key > 0) {
                    if (this.pedidoaux.includes(this.nombresProductos[key].value)) {
                        this.subtotal += parseInt(this.preciosProductos[key - 1] * this.auxcantidades[this.pedidoaux.indexOf(this.nombresProductos[key].value)])
                    }
                }
            }
            // SETEA LA FECHA MINIMA DEL DATAPICKER
            let now = new Date()
            if (this.pedidoaux.includes(9999)) {
                this.form.fecha = null
                this.datemin = new Date(now.getFullYear(), now.getMonth(), now.getHours()+1 > 17 ? now.getDate()+3 : now.getDate()+2)
            } else {
                this.datemin = new Date(now.getFullYear(), now.getMonth(), now.getHours()+1 > 17 ? now.getDate()+2 : now.getDate()+1)
            }
        },
        quitaElegidoBtn (id) {
            this.pedidoaux = this.pedidoaux.slice(0, id).concat(this.pedidoaux.slice(id + 1))
            this.auxcantidades = this.auxcantidades.slice(0, id).concat(this.auxcantidades.slice(id + 1))
            this.quitaElegido()
        },
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
        isMobile() {
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true
            } else {
                return false
            }
        },
        clamp (num, min, max) {
            return num < min ? 0 : (num > max ? max : num)
        },
        formatearTelefono(value) {
            return /^[0-9]*$/i.test(value) ? value : value.slice(0, value.length - 1)
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
    },
    computed: {
        checkMail () {
            if (this.form.email === '') return null
            return /^[a-z0-9][a-z0-9-_.]{1,}[a-z0-9-_.]@[a-z0-9][a-z0-9-_.]{1,61}[a-z0-9.]\.[a-z]{2,4}$/i.test(this.form.email)
        }
    }

}
</script>

<style scoped>
.cont {
    text-align: left !important;
}

.sep-sup {
    padding-top: 5rem;
}

h1 {
    text-shadow: 1px 1px 1px #0a0a0a;
    color: green;
}
</style>