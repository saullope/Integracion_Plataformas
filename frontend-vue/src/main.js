import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'  //icons
import 'primeflex/primeflex.css'

import InputText from 'primevue/inputtext'
import ButtonTest from 'primevue/button'
import MenuBar from 'primevue/menubar'
import PanelTest from 'primevue/panel'
import ImageTest from 'primevue/image'
import CheckBox from 'primevue/checkbox'
import PasswordTest from 'primevue/password'
import SidebarTest from 'primevue/sidebar'
import PanelMenu from 'primevue/panelmenu'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import DataTable from 'primevue/datatable'
import ColumnTest from 'primevue/column'
import ColumnGroup from 'primevue/columngroup';     //optional for column grouping
import RowTest from 'primevue/row'

const app = createApp(App).use(store).use(router)

app.use(PrimeVue, {ripple: true})
app.component('InputText', InputText)
app.component('ButtonTest', ButtonTest)
app.component('MenuBar', MenuBar)
app.component('PanelTest', PanelTest)
app.component('ImageTest', ImageTest)
app.component('CheckBox', CheckBox)
app.component('PasswordTest', PasswordTest)
app.component('SidebarTest', SidebarTest)
app.component('PanelMenu', PanelMenu)
app.component('TabView', TabView)
app.component('TabPanel', TabPanel)
app.component('DataTable', DataTable)
app.component('ColumnTest', ColumnTest)
app.component('ColumnGroup', ColumnGroup)
app.component('RowTest', RowTest)

app.mount('#app')
