<template>
  <v-app id="inspire">


    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-sheet
        color="deep-purple darken-3"
        class="pa-4"
      >
        <v-avatar
          class="mb-4"
          color="grey darken-1"
          size="64">     
          <img src="@/assets/dietrich.jpg" alt="">
        </v-avatar>

        <div><p style="color:white; font-size:30px;">
            SEV Inbox</p></div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="[icon, text] in links"
          :key="icon"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card"
            cols="12"
          >
            <v-card>
              <v-subheader>{{ card }}</v-subheader>

                  <v-list-item
                    :key="n"
                  >
                    <v-list-item-avatar >
                        <v-avatar
                        class="ma-2"
                        color="grey darken-1"
                        size="40">     
                        <img src="@/assets/eddiegomez.jpg" alt="">
                      </v-avatar>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>Accept Tutor Request with Eddie Gomez?</v-list-item-title>

                      <v-list-item-subtitle>
                        I need help with my calculus homework.
                      </v-list-item-subtitle>
                          <div>
                        <v-btn
                          class="ma-2"
                          text
                          icon
                          color="blue lighten-2"
                          to="/contract"                        >
                          <v-icon>mdi-thumb-up</v-icon>
                          
                        </v-btn>
                        <v-btn
                          class="ma-2"
                          text
                          icon
                          color="grey lighten-2"
                        >
                          <v-icon>mdi-thumb-down</v-icon>
                        </v-btn>
                      </div>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider
                    v-if="n !== 2"
                    :key="`divider-${n}`"
                    inset
                  ></v-divider>
                
              <v-list two-line>
                <template v-for="n in 3">
                  <v-list-item
                    :key="n"
                  >
                    <v-list-item-avatar color="grey darken-1">
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>Accept Tutor Request with user {{ n }}?</v-list-item-title>

                      <v-list-item-subtitle>
                        This is a place where the notes the student wrote for the tutor wil be displayed.
                      </v-list-item-subtitle>
                          <div>
                        <v-btn
                          class="ma-2"
                          text
                          icon
                          color="blue lighten-2"
                        >
                          <v-icon>mdi-thumb-up</v-icon>
                        </v-btn>
                        <v-btn
                          class="ma-2"
                          text
                          icon
                          color="grey lighten-2"
                        >
                          <v-icon>mdi-thumb-down</v-icon>
                        </v-btn>
                      </div>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider
                    v-if="n !== 2"
                    :key="`divider-${n}`"
                    inset
                  ></v-divider>
                </template>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>


export default {
    name: 'mssgInbox',
     props: {
    msg: String
  },

    data: () => ({
      cards: ['Today'/*, 'Yesterday'*/],
      drawer: null,
      links: [
        ['mdi-inbox-arrow-down', 'Inbox'],
      //  ['mdi-send', 'Send'],
      ],
    }),
}


// wireframe credit : https://github.com/vuetifyjs/vuetify/blob/master/packages/docs/src/examples/wireframes/inbox.vue
</script>