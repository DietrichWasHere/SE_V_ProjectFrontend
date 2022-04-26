<template>
   <v-app>
    <v-container>
    </v-container>

 
        <v-card width="400" height="300" class="mx-auto mt-5"   elevation="15"
    outlined
    shaped
    >
            <v-card-title>
                 <h1>Login To Your Account </h1>
            </v-card-title>
            
            <v-divider>
            </v-divider>
            <br><br>
                <v-card-actions>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                     <v-btn
                      color="primary"
                        elevation="8"
                        x-large>
                        <p>
                        Log In</p>
                         <social-login :orgID.sync = 'this.orgID' :orgName="this.orgName"/>
                     </v-btn>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                     <v-btn
                        color="grey"
                        elevation="8"
                        x-large>
                        <p>
                        Sign Up</p>
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
        orgID: 0,
        orgName: ''
    }),
    async created() {
            
        this.$forceUpdate();

        this.orgID = (await OrgServices.getOrganizationByName(this.orgName)).data[0].orgID;


        console.log(this.orgName);
    }
}
</script>

<style scoped>
h1{
     font-size: 150%;
    font-style: sans-serif;
    font-weight: normal;
   
}
p{
    color: white;
     font-weight: normal;
}
</style>