import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'  //icons
import 'primeflex/primeflex.css'

import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Menubar from 'primevue/menubar'
import Panel from 'primevue/panel'
import Image from 'primevue/image'
import Checkbox from 'primevue/checkbox'
import Password from 'primevue/password'
import Sidebar from 'primevue/sidebar'
import PanelMenu from 'primevue/panelmenu'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup'     //optional for column grouping
import Row from 'primevue/row'
import Calendar from 'primevue/calendar'
import InputNumber from 'primevue/inputnumber'
import DropDown from 'primevue/dropdown'
import Slider from 'primevue/slider'
import ProgressBar from 'primevue/progressbar'
import Toolbar from 'primevue/toolbar'
import Dialog from 'primevue/dialog'
import FileUpload from 'primevue/fileupload'
import Rating from 'primevue/rating'
import ToastMessage from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import SplitButton from 'primevue/splitbutton'
import ConfirmationService from 'primevue/confirmationservice'
import ConfirmDialog from 'primevue/confirmdialog'
import Card from 'primevue/card'
import Message from 'primevue/message'
import Breadcrumb from 'primevue/breadcrumb'
import Steps from 'primevue/steps'
import MultiSelect from 'primevue/multiselect'

const app = createApp(App)
    .use(store)
    .use(router)

app.use(PrimeVue, {ripple: true})
app.use(ToastService)
app.use(ConfirmationService)
app.component('MultiSelect', MultiSelect)
app.component('Message', Message)
app.component('Card',Card)
app.component('Steps', Steps)
app.component('ConfirmDialog',ConfirmDialog)
app.component('SplitButton',SplitButton)
app.component('ToastMessage', ToastMessage)
app.component('InputText', InputText)
app.component('Button', Button)
app.component('Menubar', Menubar)
app.component('Panel', Panel)
app.component('Image', Image)
app.component('Checkbox', Checkbox)
app.component('Password', Password)
app.component('Sidebar', Sidebar)
app.component('PanelMenu', PanelMenu)
app.component('TabView', TabView)
app.component('TabPanel', TabPanel)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('ColumnGroup', ColumnGroup)
app.component('Row', Row)
app.component('Calendar', Calendar)
app.component('InputNumber', InputNumber)
app.component('DropDown', DropDown)
app.component('Slider', Slider)
app.component('ProgressBar', ProgressBar)
app.component('Toolbar', Toolbar)
app.component('Dialog', Dialog)
app.component('FileUpload', FileUpload)
app.component('Rating', Rating)
app.component('Breadcrumb', Breadcrumb)

app.mount('#app')
