<template>
  <div>
    <!-- BANNER -->
    <v-card
      class="mb-12"
      flat
      height="528"
      tile
    >
      <v-img
        class="align-center text-center"
        cover
        src="/images/home.jpeg"
      >
        <h1 class="text-h1 font-weight-medium">
          <div>THE</div>
          <span class="text-white">TAL</span>
          <span>A</span>
          <span class="text-white">N</span>
          <div>GROUP</div>
        </h1>
        <h2 class="text-h4 text-white mt-8 mb-2">Helping Clients Build Successful Organization</h2>
        <v-divider
          class="mb-4 mx-auto"
          length="836"
          thickness="5"
        />
        <BtnContact
          color="white"
          text-color="primary"
        />
        <template v-slot:placeholder>
          <ImageHolder />
        </template>
      </v-img>
    </v-card>

    <v-container class="pt-0">
      <!-- WHO WE ARE -->
      <v-row
        no-gutters
        class="mb-12"
      >
        <v-col
          cols="6"
          class="text-h2 font-weight-bold"
        >
          Secure your ideal candidate & grow your team with us.
        </v-col>
        <v-col cols="6">
          <p class="text-h6 ml-13">
            We are a boutique firm who specializes in clinical research, finance, and tech placements. We help clients
            build successful organizations by focusing on the best talent and culture fit. We work with our clients to
            hire, retain, and motivate their greatest asset - their people. We advise managers on how to develop and
            reward their workforce to build careers.
          </p>
        </v-col>
      </v-row>

      <v-img
        class="mb-12"
        cover
        height="645"
        src="/images/people.jpeg"
      >
        <template v-slot:placeholder>
          <image-holder />
        </template>
      </v-img>

      <!--WHAT WE OFFER-->

      <v-row>
        <v-col cols="12"><p class="text-h2 font-weight-bold mb-6">What We Offer</p></v-col>
        <v-col cols="4">
          <v-card
            class="text-white"
            color="secondary"
            height="100%"
          >
            <v-row
              class="my-3"
              no-gutters
            >
              <v-col cols="2">
                <v-icon class="ml-4">mdi-cube</v-icon>
              </v-col>
              <v-col cols="10">
                <p class="text-white font-weight-bold mb-4">Talent Acquisition</p>
                <p class="mb-4 mr-4">
                  We believe in being an extension of your HR team, working closely to attract and retain talent at
                  levels of the organization.
                </p>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="4">
          <v-card
            class="text-white"
            color="primary"
            height="100%"
          >
            <v-row
              class="my-3 fill-height"
              no-gutters
            >
              <v-col cols="2">
                <v-icon class="ml-4">mdi-cube</v-icon>
              </v-col>
              <v-col cols="10">
                <p class="text-white font-weight-bold mb-4">Human Resource Consulting</p>
                <p class="mb-4 mr-4">We offer full HR advisory for executives, managers, and candidates</p>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="4">
          <v-card
            color="accent"
            height="100%"
          >
            <v-row
              class="my-3"
              no-gutters
            >
              <v-col cols="2">
                <v-icon class="ml-4">mdi-cube</v-icon>
              </v-col>
              <v-col cols="10">
                <p class="font-weight-bold mb-4">Clinical Research</p>
                <p class="mb-4 mr-4">
                  Partnered with BKS Clinical, we provide monitoring oversight, inspection readiness,
                  and contract CRAs
                </p>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style>
.font-18 {
  font-size: 18px;
}
</style>
