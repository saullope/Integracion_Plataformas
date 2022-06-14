<template>
<div class="block-content">
        <div style="overflow: hidden;">
            <div class="min-h-screen flex relative lg:static surface-ground">
                <!-- cargando el sidebar -->
                <Sidebar></Sidebar>
                <!-- cierre del Sidebar -->

                <!-- contenedor del header y el area de trabajo -->
                <div class="min-h-screen flex flex-column relative flex-auto">
                    <HeaderWorkspace></HeaderWorkspace>

                    <!-- Inicio del cuerpo del area de trabajo -->
                    <div class="p-3 flex flex-column flex-auto">
                        <div class="border-2 border-solid surface-border border-round surface-section flex-auto">
                            <!-- Aqui va todo el contenido del area de trabajo -->
                            <div class="p-5">
                                <FullCalendar 
                                :events="events" 
                                :options="options"
                                 />
                            </div>
                            <!--------------------------------------------------->
                        </div>
                    </div>
                    <!-- Fin del area de trabajo -->
                </div>
                <!-- fin del header y el area de trabajo-->
            </div>
        </div>    
    </div>    
</template>

<script>


import Sidebar from '@/components/Sidebar.vue'
import HeaderWorkspace from '@/components/HeaderWorkspace.vue'
import '@fullcalendar/core';
import FullCalendar from '@fullcalendar/vue3/dist/FullCalendar'
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list'
import EventService from '../service/EventService';


export default {
    name: "EvaluacionDatos",
    props: [],
    components :{
    Sidebar,
    HeaderWorkspace,
    FullCalendar
},
    data() {
        return {
            options: {
                locale:"es",
                plugins:[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin],
                headerToolbar: {
                    left: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
                    center: 'title',
                    right: 'prev today next'
                },
                buttonText : {
                    today: 'Hoy',
                    month: 'Mes',
                    week: 'Semana',
                    day: 'Dia',
                    list: 'Lista Semana'
                },
                weekends: true,

                editable: true,
                selectable:true, 
                selectMirror: true, 
                dayMaxEvents: true,
                events: null
            },
            
        }
    },    
    eventService: null,
    created(){
        this.eventService = new EventService();
    },
    mounted(){
        this.eventService.getEvent().then(data => this.options.events = data);
    }
    
    
}
</script>