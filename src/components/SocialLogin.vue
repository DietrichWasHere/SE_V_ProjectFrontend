<template>

    <div>
      <br>
        <div id="fb-root"></div>
        <v-btn  href="#" :color="this.btncolor" @click.prevent="loginWithGoogle">
          <span>{{this.btntext}}</span>
        </v-btn>
    </div>
</template>

<script>

//import router from '@/router/router'
import UserServices from '@/services/UserServices.js';
import StudentServices from '@/services/StudentServices.js';

export default {
  name: 'social_login',
  props: ['orgID', 'orgName', 'btncolor', 'btntext'],
  data: () => ({
    user: {},
    presence: false,
    studentRoles: {},
    unauthorized: false
  }),
  methods: {
    loginWithGoogle () {
      this.$gAuth
        .signIn()
        .then(GoogleUser => {
          // on success do something
          console.log('GoogleUser', GoogleUser)
          console.log('getId', GoogleUser.getId())
          console.log('basicprofile', GoogleUser.getBasicProfile().getName())
          console.log('getBasicProfile', GoogleUser.getBasicProfile())
          console.log('getAuthResponse', GoogleUser.getAuthResponse())
          var userInfo = {
            loginType: 'google',
            google: {
              auth: GoogleUser.getAuthResponse(),
              user: {
                name: GoogleUser.getBasicProfile().getName(),
                email: GoogleUser.getBasicProfile().getEmail(),
                profileImage: GoogleUser.getBasicProfile().getImageUrl()
              }
            }
          }
          window.localStorage.setItem('token', JSON.stringify({token: userInfo.google.auth.id_token}))
          window.localStorage.setItem('user', JSON.stringify(userInfo))
          console.log(window.localStorage.getItem('user'))
          //console.log("0")
          //this.$store.commit('setLoginUser', userInfo)
          
          UserServices.getCurrentUser()
          .then(response => {
            this.user = response.data;
            console.log("test");
            console.log(this.user.user.roles);
            // https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript
            if (!this.user.user.roles.length){
              if (this.orgID) {
                console.log("1.");
                console.log(this.user);
                var that = this;
                UserServices.addUser({fName: this.user.fName, lName: this.user.lName, email: this.user.email}, this.orgID).then(function() {
                //console.log("orgID: " + this.orgID)
                that.$router.push('/' + that.orgName + '/studentContract');
                })
              }
              else {
                this.unauthorized = true;
                console.log('Unauthorized login');
              }
            }
            else if (this.user.user.roles[0].role == "admin") this.$router.push('/' + this.orgName + '/orgs');
            else if (this.user.user.roles.filter(a => a.role == 'supervisor').length) this.$router.push('/' + this.orgName +'/calendars');
            else if (this.user.user.roles.filter(a => a.role == 'tutor').length) this.$router.push('/' + this.orgName +'/calendar');
            else {
              StudentServices.getStudentsByUser(this.user.user.id)
              .then(response => {
                this.studentRoles = response.data;
                if (!this.studentRoles[0].dateAgreementSigned) {
                  this.$router.push('/' + this.orgName + '/studentContract');
                }
                else this.$router.push('/' + this.orgName + '/calendars');
              })
            }

          })
        })
        .catch(error => {
          console.log('error', error)
          this.$router.push('/' + this.orgName + '/calendar')
        })
    }
  }
}
</script>
<style scoped>

.signuptext
{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  border-radius: 25px;
  background: #5100c2;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  color: white;
  font-size: 40px;
}
span{
    color: white;
}
</style>