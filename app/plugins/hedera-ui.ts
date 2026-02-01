import HederaUI from 'hedera-ui'
import 'hedera-ui/index.css'

export default defineNuxtPlugin(app => {
    app.vueApp.use(HederaUI)
})