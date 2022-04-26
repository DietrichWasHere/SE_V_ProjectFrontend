<template>
   <v-app>

    <v-container>
    </v-container>
    <v-row >
        <v-col align="center"
      justify="center">
        <v-card width="400" height="250" class="mx-auto mt-5"   elevation="20"
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
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    
                         <social-login :orgID.sync = 'this.orgID' :orgName="this.orgName" btncolor="primary" btntext="Log In" />
                  
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    
                        <social-login :orgID.sync = 'this.orgID' :orgName="this.orgName" btncolor="grey" btntext="Sign Up"/>
                    
                </v-card-actions>
        </v-card>
            <img width="153" height="46" src= "../assets/christian.png" alt=""  >
            </v-col>
    </v-row>

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
    color : rgb(80, 80, 80);
   
}
p{
    color: white;
    font-weight: normal;
}
</style>