<template>
<div class="p-3 card mb-4">
        <ToastMessage  />
        <br><br>
        <Toolbar class="mb-4">
            <template #start>
            <Button label="Nuevo Estudiante" icon="pi pi-plus" class="mr-2" @click="openModal"/>
         
               <span class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText  placeholder="Buscar..." />
                 </span>
            
            </template>

               <template #end>
               <Button label="Exportar" icon="pi pi-upload" class="p-button-help" @click="exportCSV($event)"  />
            </template>
        </Toolbar>
        <!-- cuerpo del data table -->
         

<DataTable ref="dt" :value="estudiantes" sortMode="multiple" :paginator="true" :rows="5" :first="firstRecordIndex" :filters="filters"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
                    currentPageReportTemplate="Mostrando {first} de {totalRecords} Estudiantes" responsiveLayout="scroll"
                    :globalFilterFields="['nombre','apellidos','id','grupo','direccion.ciudad']"
                    :v-model:filters="filters">
    
    
    <Column field="id" header="Id" :sortable="true"></Column>
    <Column field="nombre" header="Nombre" :sortable="true"></Column>
    <Column field="apellidos" header="Apellidos" :sortable="true"></Column>
    <Column field="grupo" header="Grupo" :sortable="true"></Column>
    <Column field="correo" header="Correo" :sortable="true"></Column>
    <Column field="direccion.ciudad" header="Domicilio" :sortable="true"></Column>
     <Column header="Opciones" :exportable="false" style="min-width:8rem">
                    <template #body="estudiantes">
                        <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2" @click="editProduct(estudiantes)" />
                        <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDeleteProduct(estudiantes)" />
                    </template>
                </Column>

</DataTable>

        <!-- fin del cuerpo del data table -->
    </div>
    <!-- modal para agregar estudiantes -->
    <Dialog header="Agregar nuevo estudiante" v-model:visible="displayModal" :style="{width: '50vw'}" :modal="true">
            <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <template #footer>
                <Button label="Cancelar" icon="pi pi-times" @click="closeModal" class="p-button-text"/>
                <Button label="Guardar" icon="pi pi-check" @click="saveInfo" autofocus />
            </template>
    </Dialog>
</template>

<script>
import InformacionEstudiantes from '@/service/InformacionEstudiantes'

export default {
    components: {
        InformacionEstudiantes
    },
    data(){
        return {
            originaldata:[],
            displayModal: false,
            messages: [],
            columns:null,
            estudiantes:null,

            dialog: false,
      dialogDelete: false,
   
      headers: [
        {
          text: 'Id',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { text: 'Nombre', value: 'nombre' },
        { text: 'Apellido', value: 'apellidos' },
        { text: 'Grupo', value: 'grupo' },
        { text: 'Correo', value: 'correo' },
        { text: 'Domicilio', value: 'direccion.ciudad', sortable: false },
      ],
      
      estudiantess: [],
      editedIndex: -1,
      editedItem: {
        nombre: '',
        apellidos: "",
        grupo: "",
        correo: "",
        protein: 0,
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
        }
    },
    InformacionEstudiantes:null,

  
    created(){
        this.InformacionEstudiantes = new InformacionEstudiantes();
        
       /* this.columns = [
            //el field es el elemento dentro del json, o sea, la variable
            //el header es lo que se muestra en la pantalla
    {field:"id", header:"ID"},
    {field:"nombre", header:"Nombre"},
    {field:"apellidos", header:"Apellidos"},
    {field:"grupo", header:"Grupo"},
    {field:"correo",header:"Correo"},
    //aqui lleva un punto direccion, por que dentro de ella hay ciudad y nacionaliodad, y solo ocuparemos ciudad
    {field:"direccion.ciudad",header:"Dirreccion"},
    {field:"", header:"Opciones"}

        ]*/

    },

    mounted(){
        //como estaba nulo le asignamos el listado de estudiantes segun la api
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
        openModal(){
            this.displayModal = true
        },
        closeModal(){
            this.displayModal = false
        },
        saveInfo(){
            this.displayModal = false
            this.$toast.add({severity: 'success', summary: 'Agregado con Exito', detail: 'El estudiante ha sido agregado con exito.', life: 3000});

        },
        searchtable(){
            var event =  event.target.value;
            var response = [];
            if(event != ""){
                for(data of this.data){
                    for(value of object.values(data)){
                        if(value.indexof(event>=0 )){
                        response.push(data);
                        }
                    }
                }
                this.data = response;
            } else{
                this.data = this.originaldata; 
            }

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
    }
}
</script>