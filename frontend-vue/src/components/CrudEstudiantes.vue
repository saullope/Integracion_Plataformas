<template>
<div class="p-3 card mb-4">
        <ToastMessage  />
        <br><br>
        <Toolbar class="mb-4">
        <div>{{nombre}}</div>
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
                    <span v-if="estudiant">¿Desea eliminar este dato? <b><!--{{}}--></b></span>
                </div>
                <template #footer>
                    <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteestudianteDialog = false"/>
                    <Button label="Si" icon="pi pi-check" class="p-button-text" @click="hideDialog" />
                </template>
            </Dialog>




  
    
        <Dialog v-model:visible="estudianteDialog" header="Añadir nuevo estudiante" :modal="true" :breakpoints="{ '960px': '80vw' }" :style="{ width: '50vw' }" position="center">
            <div class="card">
                <div class="grid p-3">
                    <div class="col-12 md:col-6 p-2">
                        <label for="basic" class="mr-2">Nombre</label>
                        <InputText id="basic" v-model="nombre" autocomplete="off" />
                    </div>
                    <div class="col-12 md:col-6 p-2">
                        <label for="basic" class="mr-2">Apellidos</label>
                        <InputText id="basic" v-model="nombre" autocomplete="off" />
                    </div>
                    <div class="col-12 md:col-6 p-2">
                        <label for="basic" class="mr-2">Grupos</label>
                        <MultiSelect v-model="selectedCities2" :options="grupos" optionLabel="name" placeholder="Select Cities" display="chip" />

                    </div>

            </div>
            </div>
            <template #footer>
                <div class="flex justify-content-center">
                    <Button label="Guardar" @click="toggleDialog" class="p-button-outlined" />
                    <Button label="Cancelar" @click="estudianteDialog = false" class="p-button-outlined p-button-danger" />

                </div>
            </template>
            
        </Dialog>


    


        


<DataTable ref="dt" :value="Estudiant_table" sortMode="multiple" v-model:selection="selectedProducts" :paginator="true" :rows="5" :first="firstRecordIndex" :filters="filters"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
                    currentPageReportTemplate="Mostrando {first} de {totalRecords} Estudiantes" 
                    :globalFilterFields="['nombre','apellidos','idEstudiante','carnetEstudiante','NombreGrupo','ciudadDepartamento']"
                    :v-model:filters="filters">
    <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
    <Column field="idEstudiante" header="Id" :sortable="true"></Column>
    <Column field="nombre" header="Nombre" :sortable="true"></Column>
    <Column field="apellidos" header="Apellidos" :sortable="true"></Column>
    <Column field="carnetEstudiante" header="Carnet" :sortable="true"></Column>
    <Column field="NombreGrupo" header="Grupo" :sortable="true"></Column>
    <Column field="ciudadDepartamento" header="Departamento" :sortable="true"></Column>
 
     <Column header="Opciones" :exportable="false" style="min-width:8rem">
              <template #body="estudiantes">
               <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2" @click="editProduct(estudiantes)" />
               <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="deleteestudiante" />
              </template>
     </Column>

</DataTable>

        <!-- fin del cuerpo del data table -->
    </div>



    
</template>

<script>
import {FilterMatchMode} from 'primevue/api';
import Estudiantes from '@/service/Estudiantes';
import Dialog from 'primevue/dialog';
import { global } from '../global';

export default {
    components: {
        Estudiantes,
        Dialog
    },
    data(){
        return {
            datos: global,
            Estudiant_table: null,
            originaldata:[],
            displayModal: false,
            filters: {},
            messages: [],
            columns:null,
            submitted: false,
            estudianteDialog: false,
            selectedProducts: null,
            deleteestudianteDialog: false,
            submitted: false,
            grupos: [
				{label: '3ro A', value: '3ro A'},
				{label: '3ro B', value: '3ro B'},
				{label: '4to A', value: '4to A'},
                {label: '4to B', value: '4to B'},
                {label: '5to A', value: '5to A'},
            ],
            ciudades: [
				{label: 'Carazo', value: 'Carazo'},
				{label: 'Managua', value: 'Managua'},
				{label: 'Masaya', value: 'Masaya'},
                {label: 'Granada', value: 'Granada'},
                {label: 'Leon', value: 'Leon'},
                {label: 'Chinandega', value: 'Chinandega'},
                {label: 'Boaco', value: 'Boaco'},
                {label: 'Esteli', value: 'Esteli'},
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
            
            this.submitted = false;
            this.estudianteDialog = true;
        },
        exportCSV(){
            this.$refs.dt.exportCSV();
        },

        
        initFilters() {
            this.filters = {
                'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
            }
        }
    }
}
</script>