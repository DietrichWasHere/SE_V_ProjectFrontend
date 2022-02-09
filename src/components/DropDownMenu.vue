<template>
        <!--
            https://www.digitalocean.com/community/tutorials/how-to-add-v-model-support-to-custom-vue-js-components
            https://stackoverflow.com/questions/46258763/vuejs-v-model-in-custom-component
        -->
        <v-navigation-drawer
            @input="handleDrawer"
            absolute
            bottom
            temporary
            
            >
            <v-list
                nav
                dense
                >
                <v-list-item-group
                    v-model="group"
                    active-class="deep-purple--text text--accent-4"
                    >
                    <v-list-item>baaaaaaaaaaaaa</v-list-item>
                    <v-list-item v-for="link in links" :key="link.link">>
                        <v-list-item-title><a ><router-link :to="{ name: link.link, params: link.params }">
                            {{link.displayText}}</router-link></a></v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
    name: 'DropDownMenu',
    props: {
        pageName: String
        //pageType: String? Might be needed later
    },
    data () {
        return {
            links: [
            {
                link: 'testPage',
                displayText: 'Test'
                //roles: ['admin', 'advisor', 'student', 'none']
            }]
        }
    },
    methods: {
        handleDrawer (e) {
            this.$emit('drawer', this.content)
        }
    }
}
</script>
