<template>
<div class="p-3 card mb-4">
        <ToastMessage  />
        <br><br>
        <Toolbar class="mb-4">
            <template #start>
            <Button label="Nuevo Estudiante" icon="pi pi-plus" class="mr-2" @click="openNew"/>
         
               <span class="p-input-icon-left">
                        <i class="pi pi-search" />

                        <InputText v-model="filters['global'].value" placeholder="Buscar..." />
                 </span>
            
            </template>

               <template #end>
               <Button label="Exportar" icon="pi pi-upload" class="p-button-help" @click="exportCSV($event)"  />
            </template>
        </Toolbar>
        <!-- cuerpo del data table -->
         
      <Dialog  :visible="deleteestudianteDialog" :style="{width: '450px'}" header="Confirmar"  :modal="true" @update:visible="handleClose"  >
                <div class="confirmation-content">
                    <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                    <span v-if="estudiantes">¿Desea eliminar este dato? <b>{{}}</b></span>
                </div>
                <template #footer>
                    <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteestudianteDialog = false"/>
                    <Button label="Si" icon="pi pi-check" class="p-button-text" @click="hideDialog" />
                </template>
            </Dialog>




         <Dialog  :visible="estudianteDiaalog" :style="{width: '450px'}" header="Detalle de estudiante" :modal="true" class="p-fluid">
                <div class=" field ">
                <label for="nombre">Nombre</label>
                <InputText id="nombre" v-model.trim="nombre" required="true" autofocus :class="{'p-invalid': submitted && !nombre}" />
                <small class="p-error" v-if="submitted && !Apellidos">Es requerido un nombre.</small>
               
               
            </div>
            <div class="field "> 
                <label for="Apellidos">Apellido</label>
                <InputText id="Apellidos" v-model.trim="Apellidos" required="true" autofocus :class="{'p-invalid': submitted && !Apellidos}" />
                <small class="p-error" v-if="submitted && !Apellidos">Es requerido un Apellido.</small>
            </div>
             <div class="field ">
                <label for="correo">Correo</label>
                <InputText id="correo" v-model.trim="correo" required="true" autofocus :class="{'p-invalid': submitted && !correo}" />
                <small class="p-error" v-if="submitted && !correo">Es requerido un Correo.</small>
               
            </div>

            <template #footer>
                <Button label="Cancelar" icon="pi pi-times" class="p-button-text" @click="estudianteDialog = false"/>
                <Button label="Guardar" icon="pi pi-check" class="p-button-text" @click="hideDialog " />
            </template>
        </Dialog>



<DataTable ref="dt" :value="estudiantes" sortMode="multiple" :selection="selectedProducts" :paginator="true" :rows="5" :first="firstRecordIndex" :filters="filters"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
                    currentPageReportTemplate="Mostrando {first} de {totalRecords} Estudiantes" 
                    :globalFilterFields="['nombre','apellidos','id','carnet','grupo','direccion.ciudad']"
                    :v-model:filters="filters">
    
    <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
    <Column field="id" header="Id" :sortable="true"></Column>
    <Column field="nombre" header="Nombre" :sortable="true"></Column>
    <Column field="apellidos" header="Apellidos" :sortable="true"></Column>
    <Column field="carnet" header="Carnet" :sortable="true"></Column>
    <Column field="grupo" header="Grupo" :sortable="true"></Column>
    <Column field="correo" header="Correo" :sortable="true"></Column>
    <Column field="direccion.ciudad" header="Domicilio" :sortable="true"></Column>
     <Column header="Opciones" :exportable="false" style="min-width:8rem">
              <template #body="estudiantes">
               <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2" @click="editProduct(estudiantes)" />
               <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="deleteestudiante" />
              </template>
     </Column>

</DataTable>

        <!-- fin del cuerpo del data table -->
    </div>

 <!--  <Dialog header="Agregar nuevo estudiante" v-model:visible="estudianteDialog" :style="{width: '50vw'}" :modal="true">
            <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <template #footer>
                <Button label="Cancelar" icon="pi pi-times" @click="estudianteDialog= false" class="p-button-text"/>
                <Button label="Guardar" icon="pi pi-check" @click="saveInfo" autofocus />
            </template>
    </Dialog> 
 -->

    
</template>

<script>
import {FilterMatchMode} from 'primevue/api';
import InformacionEstudiantes from '@/service/InformacionEstudiantes'
import Dialog from 'primevue/dialog';

export default {
    components: {
        InformacionEstudiantes
    },
    data(){
        return {
            originaldata:[],
            displayModal: false,
            filters: {},
            messages: [],
            columns:null,
            submitted: false,
            estudiantes:null,
            estudianteDialog: false,
            selectedProducts: null,
            deleteestudianteDialog: false,
            grupos: [
				{label: '1 A', value: '1 A'},
				{label: '1 B', value: '1 B'},
				{label: '2 A', value: '2 A'},
                {label: '2 B', value: '2 B'},
            ],
            ciudades: [
				{label: 'Carazo', value: 'Carazo'},
				{label: 'Managua', value: 'Managua'},
				{label: 'Masaya', value: 'Masaya'},
                {label: 'Granada', value: 'Granada'},
            ],

      
  
        }
    },
    InformacionEstudiantes:null,

  
    created(){
        this.InformacionEstudiantes = new InformacionEstudiantes();
        this.initFilters();
    },

    mounted(){
     
        this.InformacionEstudiantes.getStudents().then(data => this.estudiantes = data);
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
            this.estudiantes = {};
            this.submitted = false;
            this.estudianteDialog = true;
        },
        exportCSV(){
            this.$refs.dt.exportCSV();
        },

         editProduct(estudiantes) {
            this.estudiantes = {...estudiantes};
            this.productDialog = true;
        },
        confirmDeleteProduct(estudiantes) {
            this.estudiantes = estudiantes;
            this.deleteProductDialog = true;
        },
        deleteProduct() {
            this.estudiantes = this.estudiantes.filter(val => val.id !== this.product.id);
            this.deleteProductDialog = false;
            this.estudiante = {};
            this.$toast.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
        },
        deleteestudiante() {
            this.deleteestudianteDialog = true;
        },
        initFilters() {
            this.filters = {
                'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
            }
        }
    }
}
</script>