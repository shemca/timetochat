import Vue from 'vue/dist/vue.esm';
import TurbolinksAdapter from 'vue-turbolinks';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(TurbolinksAdapter);

document.addEventListener('turbolinks:load', function() {
    Vue.http.headers.common['X-CSRF-Token'] = document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute('content');

    const element = document.getElementById('message-form');

    if (element !== null) {
        let app;
        const Message = JSON.parse(element.dataset.document);

        return app = new Vue({
            el: element,

            data() {
                return { document: Message };
            },

            methods: { Submit() {
                    if (ourDocument.id === null) {
                        this.$http // New action
                            .post('/roommessages', {message: this.document})
                            .then(function(response) {
                                Turbolinks.visit(`/roommessages/${response.body.id}`);
                            });
                        (function(response) {
                            this.errors = response.data.errors;
                        });
                    } else {
                        this.$http // Edit action
                            .put(`/roommessages/${document.id}`, {message: this.document})
                            .then(function(response) {
                                Turbolinks.visit(`/roommessages/${response.body.id}`);
                            });
                        (function(response) {
                            this.errors = response.data.errors;
                        });
                    }
                }
            }
        });
    }
});
