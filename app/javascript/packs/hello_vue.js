import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'
import App from '../app.vue'
import Roombox from './components/roomlist.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.use(TurbolinksAdapter);

document.addEventListener('turbolinks:load', () => {
    // Vue.http.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    // const elementer = document.getElementById('message-form');
    // if(elementer !=null) {
        // const room_message = JSON.parse(elementer.dataset.RoomMessages)

        // const app = new Vue({
        //     el:elementer,

        // })
    // }


    // const element = document.getElementById('roombox'),
    //       props = JSON.parse(element.getAttribute('data'))
    // if (element != null && props != null) {
    //   const roomBox = new Vue ({
    //     el: '#roombox',
    //     render: h => h(Roombox, { props }),
    //     components: { Roombox },
    //
    //   })
    // }

    // const app = new Vue({
    //     el: '#hello',
    //     data: () => {
    //         return {
    //             message: "Can you say hello?"
    //         }
    //     },
    //     components: { App }
    // })

})
