<template>
<ConfirmDialog></ConfirmDialog>
    <div class="flex justify-content-between align-items-center px-5 surface-section relative lg:static border-bottom-1 surface-border" style="height: 60px;">
        <div class="flex">
            <a class="cursor-pointer block lg:hidden text-700 mr-3 mt-1 p-ripple">
                <i class="pi pi-bars text-4xl"></i>
                <span class="p-ink"></span>
            </a>
            <!--<span class="p-input-icon-left">
            <i class="pi pi-search"></i>
            <input class="p-inputtext p-component border-none w-10rem sm:w-20rem border-none w-10rem sm:w-20rem" type="text" placeholder="Search"></span>
            -->
            </div>
                <a class="cursor-pointer block lg:hidden text-700 p-ripple">
                    <i class="pi pi-ellipsis-v text-2xl"></i>
                    <span class="p-ink"></span>
                </a>
                <div class="flex justify-content-end flex-wrap card-container green-container">
            <div class="flex align-items-center justify-content-center font-bold text-white border-round m-2 mr-5">
                <SplitButton icon="pi pi-user" class="p-button-rounded p-button-primary" :model="account_options"></SplitButton>>
            </div>
        </div>
            </div>
</template>

<script>

export default {
    data(){
        return {
            account_options : [
                {
                    label: "Informacion Personal",
                    icon: "pi pi-user"
                },
                {
                    label: "Cerrar Session",
                    icon: "pi pi-sign-out",
                    command: () => {
                        this.$confirm.require({
                        message: '¿Seguro quieres salir?',
                        header: 'Cerrar Session',
                        icon: 'pi pi-exclamation-triangle',
                        accept: () => {
                            window.location.href="http://localhost:8080/loginDoc"
                        },
                        reject: () => {
                        //callback to execute when user rejects the action
                        }
            });
                    }
                }
            ]
        }
    }
}
</script>