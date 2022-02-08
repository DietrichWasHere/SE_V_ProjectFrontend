<template>
    <v-container>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-navigation-drawer
            v-model="drawer"
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
                        <v-list-item-title><a :key="testPage"><router-link :to="{ name: link.link, params: link.params }">
                            {{link.displayText}}</router-link></a></v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </v-container>
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
    }
}
</script>
