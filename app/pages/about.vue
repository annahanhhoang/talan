<template>
  <div>
    <div class="bg-light-grey">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="10"
            lg="8"
            class="py-lg-12 mx-auto text-md-center"
          >
            <h2 class="text-h4 text-md-h2 font-weight-bold mb-lg-9">What We Do Best</h2>
            <p class="text-h6">
              The Talan Group is a boutique firm started with a mission to provide better talent solutions for
              companies. We believe in curation versus mass resume dumps and culture fit versus placement. Our model
              allows us to work with clients who need assistance in unique talent placement, weeding out fraudulent
              candidates, or help an over capacity HR team.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="8"
          lg="6"
          class="py-lg-12 mx-auto text-md-center"
        >
          <h2 class="text-h4 text-md-h2 font-weight-bold mb-lg-9">Our Experts</h2>
          <p class="text-h6 mb-3 mb-lg-9">
            Our recruiting and relationship managers ensure clients are heard every step of the way. We bring new
            insights and approach to talent pipelines and we love to part of your success! Let us know how we can help
            you today!
          </p>
          <btn-contact />
        </v-col>
      </v-row>
    </v-container>
    <TalanImage
      img-src="/images/about.jpeg"
      alt="Talan Group about us"
    />
  </div>
</template>
