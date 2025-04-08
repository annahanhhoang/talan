<template>
  <div>
    <v-container>
      <h1 class="text-h4 text-md-h2 font-weight-bold">Contact Us</h1>
    </v-container>

    <TalanImage
      img-src="/v1744181787/contact_izuqfg.jpg"
      alt="contact photo"
      :is-bg="true"
    >
      <v-container class="fill-height">
        <v-row
          align-content="center"
          justify="space-between"
          class="fill-height text-center"
        >
          <v-col
            cols="12"
            md="auto"
          >
            <v-icon
              icon="mdi-email"
              class="text-primary mb-1"
            />
            <h2 class="text-h6 font-weight-bold mb-3">Email</h2>
            <div class="mb-3">
              <p>Contact us for more information</p>

              <a href="mailto:contacts@thetalangroup.com">contacts@thetalangroup.com</a>
            </div>

            <div class="mb-3">
              <p>Candidate resume submission</p>
              <a href="mailto:recruiting@thetalangroup.com">recruiting@thetalangroup.com</a>
            </div>
          </v-col>

          <v-col
            cols="12"
            md="auto"
          >
            <div class="mb-3">
              <v-icon
                icon="mdi-phone"
                class="text-primary mb-1"
              />
              <h2 class="text-h6 font-weight-bold mb-3">Phone</h2>
              <div>
                <p>Leave us a message</p>

                <a href="tel:+12145642760"> + 1 (214) 564 2760</a>
              </div>
            </div>
          </v-col>

          <v-col
            cols="12"
            md="auto"
          >
            <v-icon
              icon="mdi-map-marker"
              class="text-primary mb-1"
            />
            <h2 class="text-h5 font-weight-bold mb-3">Office</h2>
            <div>The Talan Group</div>
            <a
              href="https://www.google.com/maps/place/11625+Custer+Rd+110+241,+Frisco,+TX+75035/@33.1729745,-96.7358306,17z/data=!3m1!4b1!4m5!3m4!1s0x864c15e40343b27d:0x4ceb2c8ee453f24b!8m2!3d33.1729745!4d-96.7336419"
            >
              11625 Custer Rd Ste 110 #241 <br />
              Frisco, TX 75035
            </a>
          </v-col>
        </v-row>
      </v-container>
    </TalanImage>
  </div>
</template>
