<template>
  <div>
    <v-container class="mt-6">
      <v-row align="center">
        <v-col
          cols="12"
          md="6"
        >
          <h2 class="text-h4 text-md-h2 font-weight-bold">Our Clients</h2>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <p class="text-h6">
            We understand the difficulty in a broad approach to obtaining talent, so we tailor our approach to fit each
            individual client's need. Our clients work with an experience HR Advisor to understand the business
            objective. Our HR Advisor will create a talent pipeline utilizing our extensive network of professionals
            ensuring each placement results in an ideal match.
          </p>
        </v-col>
      </v-row>
    </v-container>
    <div class="my-lg-6">
      <TalanImage
        img-src="/images/client.jpeg"
        alt="client photo"
      />
    </div>

    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="8"
          offset-sm="2"
          lg="4"
          offset-lg="4"
          class="text-sm-center px-sm-6 px-md-16"
        >
          <p class="text-h6 mb-4">
            Become our client and get expertise recruitment, HR Advisory, and curated resumes to fit your needs. If
            you'd like to learn more on how we can help you find talent!
          </p>

          <div class="text-center">
            <btn-contact />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.w-31 {
  width: 31%;
}
</style>
