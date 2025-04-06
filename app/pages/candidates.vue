<template>
  <v-container class="mt-12">
    <v-row>
      <v-col
        cols="7"
        class="text-center px-16"
      >
        <h2 class="text-h2 font-weight-bold mb-12">Candidates</h2>
        <p class="text-h6">
          We believe that your next opportunity should be align with your career path and goals. Our recruiters place
          professionals in firms where the fit and match works for our candidates as well as our clients. Looking for
          your next perfect match opportunity - submit resumes to

          <a
            href="mailto:recruiting@thetalangroup.com"
            class="d-block mt-6"
            >recruiting@thetalangroup.com</a
          >
        </p>
      </v-col>
      <v-col cols="4" offset="1">
        <v-img class="mt-12" cover height="300" src="/images/candidate.jpeg">
          <template v-slot:placeholder>
            <image-holder />
          </template>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
