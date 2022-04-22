<template>
   <v-app>
           <v-container>
    </v-container>

        <v-card width="400" class="mx-auto mt-5">
            <v-card-title>
                 <h1 class="display-1">Login</h1>
            </v-card-title>
           
            <v-divider>
            </v-divider>
                <v-card-actions>
                     <v-btn
                      color="primary"
                        elevation="8"
                        x-large>
                        Log In
                         <social-login :orgID.sync = 'this.orgID' :orgName="this.orgName"/>
                     </v-btn>
                     <v-spacer></v-spacer>
                     <v-btn
                      color="primary"
                        elevation="8"
                        x-large>
                        Sign Up
                        <social-login :orgID.sync = 'this.orgID' :orgName="this.orgName"/>
                     </v-btn>
                </v-card-actions>
        </v-card>
    </v-app>
</template>
<script>
import SocialLogin from '../components/SocialLogin'
import OrgServices from '../services/OrgServices'

export default {
    name: 'login_page',
    components: { SocialLogin},
    props: ['orgName'],
    data: () => ({
        orgID: 0
    }),
    async created() {
        this.orgID = (await OrgServices.getOrganizationByName(this.orgName)).data[0].orgID;
        console.log(this.orgID);
    }
}
</script>