<template>
<div class="p-3 card mb-4">
        <ToastMessage  />
        <br><br>
        <Toolbar class="mb-4">
            <template #start>
            <Button label="Nuevo Estudiante" icon="pi pi-plus" class="mr-5" @click="openNew"/>
         <Button label="Eliminar seleccionados" icon="pi pi-trash" class="p-button-danger mr-5" @click="confirmDeleteSelected" :disabled="!selectedProducts || !selectedProducts.length" />
               
               <span class="p-input-icon-left ml-5 " >
                        <i class="pi pi-search " />

                        <InputText v-model="filters['global'].value" placeholder="Buscar... "  />
                 </span>
            
            </template>

               <template #end>
               <Button label="Exportar" icon="pi pi-upload" class="p-button-help" @click="exportCSV($event)"  />
            </template>
        </Toolbar>
        <!-- cuerpo del data table -->
         
      <Dialog v-model:visible="deleteestudianteDialog" :style="{width: '450px'}" header="Confirmar" :modal="true">
            <div class="confirmation-content">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span v-if="datos">¿Deseas eliminar a <b>{{datos.nombre}}</b>?</span>
            </div>
            <template #footer>
                <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteestudianteDialog = false"/>
                <Button label="Si" icon="pi pi-check" class="p-button-text" @click="eliminarEstudiantes" />
            </template>
        </Dialog>
        
        <Dialog v-model:visible="deleteProductsDialog" :style="{width: '580px'}" header="Confirm" :modal="true">
            <div class="confirmation-content">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span v-if="datos">¿Deseas eliminar todos los estudiantes seleccionados?</span>
            </div>
            <template #footer>
                <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductsDialog = false"/>
                <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteSelectedProducts" />
            </template>
        </Dialog>



  
    
        <Dialog v-model:visible="estudianteDialog" header="Añadir nuevo estudiante"  :breakpoints="{ '960px': '80vw' }" :style="{ width: '30vw' }" position="center">
            <div class="card">
                <div class="field">
                        
                    <h5 class="text-left">Nombre</h5>
                    <InputText id="nombreform" v-model.trim="datos.nombre" required="true" autofocus :class="{'p-invalid': submitted && !datos.nombre}" />
                    <small class="p-error" v-if="submitted && !datos.nombre"><h5 class="text-left">Hace falta el Nombre</h5></small>
                 <div class="field">
                        
                    <h5 class="text-left">Apellido</h5>
                    <InputText id="apellidosform" v-model.trim="datos.apellidos" required="true" autofocus :class="{'p-invalid': submitted && !datos.apellidos}" />
                    <small class="p-error" v-if="submitted && !datos.apellidos"><h5 class="text-left">Hace falta el Apellido</h5></small>

                </div>
                 <div class="field">
                        
                 <h5 class="text-left">Carnet</h5>

                    <InputText id="carnetEstudianteform" v-model.trim="datos.carnetEstudiante" required="true" autofocus :class="{'p-invalid': submitted && !datos.carnetEstudiante}" />
                    <small class="p-error" v-if="submitted && !datos.carnetEstudiante"><h5 class="text-left">Hace falta el Carnet</h5></small>
              
               </div>
                 <div class="field">
                        
                    <h5 class="text-left">Grupo</h5>

                  <Dropdown v-model="datos.opcionesgrupos" :options="grupos" :editable="true" optionLabel="label" placeholder="Selecciona un grupo" />
                <small class="p-error" v-if="submitted && !datos.opcionesgrupos"><h5 class="text-left">Hace falta el grupo</h5></small>

               </div>
                
                <div class="field"> 
                      <h5 class="text-left">Departamento</h5>

                  <Dropdown v-model="datos.opciondepartamento" :options="ciudades" :editable="true" optionLabel="label" placeholder="Selecciona un departamento" />
                        <small class="p-error" v-if="submitted && !datos.opciondepartamento"><h5 class="text-left">Hace falta el departamento</h5></small>

                 </div>
                 
             </div>
         </div>
            <template #footer>
                <div class="flex justify-content-center">
                    <Button label="Guardar" @click="guardarestudiante" class="p-button-text" />
                    <Button label="Cancelar" @click="estudianteDialog = false" class="p-button-text" />

                </div>
            </template>
            
        </Dialog>
        


        


<DataTable ref="dt" :value="Estudiant_table" sortMode="multiple" editMode="cell" @cell-edit-complete="onCellEditComplete"
                    v-model:selection="selectedProducts" :paginator="true" :rows="5" :first="firstRecordIndex" :filters="filters"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
                    currentPageReportTemplate="Mostrando {first} de {totalRecords} Estudiantes" 
                    class="editable-cells-table"
                    :globalFilterFields="['nombre','apellidos','idEstudiante','carnetEstudiante','NombreGrupo','ciudadDepartamento']"
                    :v-model:filters="filters" editable:true>
    <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
    <Column field="idEstudiante" header="Id" :sortable="true" ></Column>
    <Column field="nombre" header="Nombre" :sortable="true"  >
     <template #editor="{ data, field }">
                        <InputText v-model="data[field]" autofocus />
                    </template></Column>
    <Column field="apellidos" header="Apellidos" :sortable="true" >
     <template #editor="{ data, field }">
                        <InputText v-model="data[field]" autofocus />
                    </template></Column>
    <Column field="carnetEstudiante" header="Carnet" :sortable="true " >
     <template #editor="{ data, field }">
                        <InputText v-model="data[field]" autofocus />
                    </template>
    </Column>
    <Column field="NombreGrupo" header="Grupo" :sortable="true" >
     <template #editor="{ data, field }">
                        <InputText v-model="data[field]" autofocus />
                    </template> </Column> 
    <Column field="ciudadDepartamento" header="Departamento" :sortable="true" >
    
     <template #editor="{ data, field }">
                        <InputText v-model="data[field]" autofocus />
                    </template></Column>
   <Column :rowEditor="true" style="width:10%; min-width:8rem" bodyStyle="text-align:center"></Column>
   
    <!--    <Column header="Opciones" :exportable="false" style="min-width:8rem">
              <template #body="datos">
               <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2" @click="EditarEstudiantes(datos)" />
                <Button icon="pi pi-trash" class="p-button-danger" @click="deleteestudianteDialog = true" />
              </template>
     </Column> 
-->
</DataTable>

        <!-- fin del cuerpo del data table -->
    </div>



    
</template>

<script>
import {FilterMatchMode} from 'primevue/api';
import Estudiantes from '@/service/Estudiantes';
import Dialog from 'primevue/dialog';


import Dropdown from 'primevue/dropdown';

export default {
    components: {
        Estudiantes,
        Dialog,
        Dropdown
    },
    data(){
        return {
            Estudiant_table: null,
            deleteProductsDialog:false,
            displayModal: false,
            filters: {},
            messages: [],
            columns:null,
            submitted: false,
            estudianteDialog: false,
            selectedProducts: null,
            deleteestudianteDialog: false,
            confirmarborrardialogo : false,
            datos:{},
            opciondepartamento:null,
            opcionesgrupos:null,
            grupos: [
				{label: '1ro A', value: '1ro A'},
				{label: '1ro B', value: '1ro B'},
				{label: '2do A', value: '2do A'},
                {label: '2do B', value: '2do B'},
                {label: '3ro A', value: '3ro A'},
				{label: '3ro B', value: '3ro B'},
				{label: '4to A', value: '4to A'},
                {label: '4to B', value: '4to B'},
                {label: '5to A', value: '5to A'},
                {label: '5to B', value: '5to B'},
            ],
            ciudades: [
				{label: 'Carazo', value: 'Carazo'},
				{label: 'Managua', value: 'Managua'},
				{label: 'Masaya', value: 'Masaya'},
                {label: 'Granada', value: 'Granada'},
            ],

      
  
        }
    },
   

  
    created(){
        this.Estudiantes = new Estudiantes();
        this.initFilters();
    },

    mounted(){
     
        this.Estudiantes.getEstudiantes().then(data => this.Estudiant_table = data);
        this.originaldata = this.data;
        
        },
    computed:{
        bindings(){
            return {
                columns:['id','nombre','apellidos'],
                data:[
                    {"id":12, "nombre":"saul isaac", "apellidos":"lopez rios"}
                    ]
            }
        }
    },
    methods: {
        
        hideDialog() {
            this.estudianteDialog = false;
     
        },
        openNew() {
            this.datos = {};
            this.submitted = false;
            this.estudianteDialog = true;
        },
        exportCSV(){
            this.$refs.dt.exportCSV();
        },
        deleteSelectedProducts() {
            this.Estudiant_table = this.Estudiant_table.filter(val => !this.selectedProducts.includes(val));
            this.deleteProductsDialog = false;
            this.selectedProducts = null;
            this.$toast.add({severity:'success', summary: 'Successful', detail: 'Estudiantes eliminados', life: 3000});
        },
         eliminarEstudiantes() {
            this.Estudiant_table = this.Estudiant_table.filter(val => val.id !== this.datos.id);
            this.deleteestudianteDialog = false;
            this.datos = {};
            this.$toast.add({severity:'success', summary: 'Listo!', detail: 'Estudiante eliminado', life: 3000});
        },
         confirmarborrardialogo() {
            this.datos = datos;
            this.deleteestudianteDialog = true;
        },
          confirmDeleteSelected() {
            this.deleteProductsDialog = true;
        },
       onCellEditComplete(event) {
            let { data, newValue, field } = event;

            switch (field) {
                case 'quantity':
                case 'price':
                    if (this.isPositiveInteger(newValue))
                        data[field] = newValue;
                    else
                        event.preventDefault();
                break;

                default:
                    if (newValue.trim().length > 0)
                        data[field] = newValue;
                    else
                        event.preventDefault();
                break;
            }
        },
        guardarestudiante(){
            this.submitted = true;
            if (this.datos.nombre.trim()) {
                if (this.datos.idEstudiante) {
                    this.datos.nombre = this.datos.nombre;
                    this.datos.apellidos = this.datos.apellidos;
                    this.datos.carnetEstudiante = this.datos.carnetEstudiante ? this.datos.correo.carnetEstudiante : 'sin carnet';
                    this.datos.NombreGrupo = this.datos.NombreGrupo;
                    this.datos.ciudadDepartamento = this.datos.ciudadDepartamento;
                    this.Estudiant_table[this.findIndexById(this.datos.idestudiante)] = this.datos;
                    this.$toast.add({severity:'success', summary: 'Successful', detail: 'Estudiante Actualizado', life: 3000});
                }
                else {
                    this.datos.idEstudiante = this.createId();
                    this.datos.nombre = this.datos.nombre;
                    this.datos.apellidos = this.datos.apellidos;
                    this.datos.carnetEstudiante = this.datos.carnetEstudiante ;
                    this.datos.NombreGrupo = this.datos.opcionesgrupos.value;
                    this.datos.ciudadDepartamento = this.datos.opciondepartamento.value;
                    this.Estudiant_table.push(this.datos);
                    this.$toast.add({severity:'success', summary: 'Listo!', detail: 'Estudiante Añadido', life: 3000});
                    this.estudianteDialog = false;                }

            }
        },
        createId() {
            let id = '';
            var chars = 'ABCDEFGEHIJKLMNOPQRSTUVWXYZ1234567890';
            for ( var i = 0; i < 5; i++ ) {
                id += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return id;
        },
         findIndexById(id) {
            let index = -1;
            for (let i = 0; i < this.Estudiant_table.length; i++) {
                if (this.Estudiant_table[i].id === id) {
                    index = i;
                    break;
                }
            }

            return index;
        },
        initFilters() {
            this.filters = {
                'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
            }
        }
    }
}
</script>