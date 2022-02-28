<template>
    <v-app>
        <social-login/>
    </v-app>
</template>

<script>
import SocialLogin from '../components/SocialLogin.vue'

export default {
    name: 'login_page',
    components: { SocialLogin },
    data: () => ({
        showPasswowrd: false
    }),
}
</script>