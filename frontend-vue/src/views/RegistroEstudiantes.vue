<template>
    <div>
        <SideHeader></SideHeader>
    </div>
    <div class="card">
        Estas en la vista registro estudiantes
    </div>
</template>

<script>
import SideHeader from '@/components/SideHeader.vue'

export default {
    props: [],
    components :{
    SideHeader
},
    data() {
        return {
        }
    }
}
</script>