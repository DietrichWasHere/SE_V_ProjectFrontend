<template>
  <div class="hello">
    <social-login/>
    <p>{{this.orgs}}</p>
  </div>
</template>

<script>
import SocialLogin from '@/components/SocialLogin.vue';
import OrgServices from '@/services/OrgServices.js';

export default {
  name: 'HelloWorld',
  components: {
    SocialLogin
  },
  props: {
    msg: String
  },
  data() {
    return {
      orgs: []
    };
  },
  created() {
    OrgServices.getOrgs()
    .then(response => {
      this.orgs = response.data
    })
    .catch(error => {
      console.log('There was an error:', error.response)
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
