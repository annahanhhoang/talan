<template>
  <div>
    <v-container class="mt-6">
      <v-row align="center">
        <v-col cols="6"> <h2 class="text-h2 font-weight-bold">Our Clients</h2> </v-col>
        <v-col cols="6">
          <p class="text-h6">
            We understand the difficulty in a broad approach to obtaining talent, so we tailor our approach to fit each
            individual client's need. Our clients work with an experience HR Advisor to understand the business
            objective. Our HR Advisor will create a talent pipeline utilizing our extensive network of professionals
            ensuring each placement results in an ideal match.
          </p>
        </v-col>
      </v-row>
    </v-container>
    <v-img src="/images/client.jpeg" class="my-12" cover height="645">
      <template v-slot:placeholder>
        <image-holder />
      </template>
    </v-img>
    <div class="mx-auto w-31 text-center">
      <p class="text-h6 mb-4">
        Become our client and get expertise recruitment, HR Advisory, and curated resumes to fit your needs. If you'd
        like to learn more on how we an help you find talent!
      </p>

      <div>
        <btn-contact />
      </div>
    </div>
  </div>
</template>

<style scoped>
.w-31 {
  width: 31%;
}
</style>
