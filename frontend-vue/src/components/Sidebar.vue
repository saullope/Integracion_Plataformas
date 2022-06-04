<template>
    <div id="app-sidebar-9" class="h-screen surface-section hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border w-18rem lg:w-7rem select-none">
        <div class="flex flex-column h-full">
            <!-- inicio del sidebar con el logo -->
            <div class="flex align-items-center justify-content-center flex-shrink-0" style="height: 60px;">
                <img src="" alt="imagen">
            </div>
                <div class="mt-3">
                    <ul class="list-none p-0 m-0">
                        <li>
                            <a @click="principal" class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3        lg:justify-content-center text-cyan-600 border-left-2 border-cyan-600 hover:border-300      transition-duration-150 transition-colors p-ripple">
                                <i class="pi pi-home mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                                <span class="font-medium inline text-base lg:text-xs lg:block">Home</span>
                                <span class="p-ink" style="height: 111px; width: 111px; top: 0.461639px; left: 9.39236px;"></span>
                            </a>
                        </li>
                        <li>
                            <a @click="plataformas" class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3        lg:justify-content-center text-cyan-600 border-left-2 border-cyan-600 hover:border-300      transition-duration-150 transition-colors p-ripple">
                                <i class="pi pi-fw pi-box mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                                <span class="font-medium inline text-base lg:text-xs lg:block">Plataformas</span>
                                <span class="p-ink" style="height: 111px; width: 111px; top: 0.461639px; left: 9.39236px;"></span>
                            </a>
                        </li>
                        <li>
                            <a @click="evaluaciones" class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3        lg:justify-content-center text-cyan-600 border-left-2 border-cyan-600 hover:border-300      transition-duration-150 transition-colors p-ripple">
                                <i class="pi pi-fw pi-book mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                                <span class="font-medium inline text-base lg:text-xs lg:block">Evaluaciones</span>
                                <span class="p-ink" style="height: 111px; width: 111px; top: 0.461639px; left: 9.39236px;"></span>
                            </a>
                        </li>
                         <li>
                            <a @click="grupos" class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3        lg:justify-content-center text-cyan-600 border-left-2 border-cyan-600 hover:border-300      transition-duration-150 transition-colors p-ripple">
                                <i class="pi pi-fw pi-users mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                                <span class="font-medium inline text-base lg:text-xs lg:block">Grupos</span>
                                <span class="p-ink" style="height: 111px; width: 111px; top: 0.461639px; left: 9.39236px;"></span>
                            </a>
                        </li>
                         <li>
                            <a @click="estudiantes" class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3        lg:justify-content-center text-cyan-600 border-left-2 border-cyan-600 hover:border-300      transition-duration-150 transition-colors p-ripple">
                                <i class="pi pi-fw pi-user mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                                <span class="font-medium inline text-base lg:text-xs lg:block">Estudiantes</span>
                                <span class="p-ink" style="height: 111px; width: 111px; top: 0.461639px; left: 9.39236px;"></span>
                            </a>
                        </li>
                        <li>
                            <a @click="reportes" class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3        lg:justify-content-center text-cyan-600 border-left-2 border-cyan-600 hover:border-300      transition-duration-150 transition-colors p-ripple">
                                <i class="pi pi-fw pi-chart-line mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                                <span class="font-medium inline text-base lg:text-xs lg:block">Reportes</span>
                                <span class="p-ink" style="height: 111px; width: 111px; top: 0.461639px; left: 9.39236px;"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            
        </div>
    </div>
</template>

<script>

export default {
    props: [],
    components: {},
    data(){
        return {
            
        }
    },
    methods:{
        principal(){
            this.$router.push('/principal')
        },
        plataformas(){
            this.$router.push('/plataformas')
        },
        evaluaciones(){
            this.$router.push('/evaluaciondatos')
        },
        grupos(){
            this.$router.push('/registro')
        },
        estudiantes(){
            this.$router.push('/registro-students')
        },
        reportes(){
            this.$router.push('/evaluaciondatos')
        }

    }
}
</script>