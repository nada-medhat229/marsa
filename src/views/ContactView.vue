<script setup>
import Header from "../components/Header.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const name = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");

const submitForm = () => {
  router.push("/");
};
</script>
<template>
  <section>
    <Header />
    <h2 class="main-heading">Contact Us</h2>
    <v-container>
      <v-row class="pt-5 mt-3">
        <v-col cols="12" md="6">
          <v-form>
            <v-text-field
              class="mb-4"
              label="Your Name"
              v-model="name"
              variant="outlined"
              required
              hide-details="auto"
            ></v-text-field>
            <v-text-field
              label="Your Email"
              v-model="email"
              variant="outlined"
              required
              type="email"
              class="mb-4"
              hide-details="auto"
            ></v-text-field>
            <v-text-field
              label="Subject"
              v-model="subject"
              variant="outlined"
              required
              hide-details="auto"
              class="mb-4"
            ></v-text-field>
            <v-textarea
              label="Your Message"
              v-model="message"
              variant="outlined"
              required
              hide-details="auto"
              class="mb-4"
            ></v-textarea>
            <v-card-actions>
              <v-btn class="actionbtn" @click="submitForm">Send Message</v-btn>
            </v-card-actions>
          </v-form>
        </v-col>
        <v-col cols="12" md="6">
          <h3>Contact Us</h3>
          <p>
            Nullam fermentum ullamcorper diam ut porta. Etiam ac ex vel velit
            ullamcorper tempus. Mauris vel iaculis leo. Nulla facilisi. Morbi
            vel velit mi. Donec vel felis felis.
          </p>
          <v-row class="py-5">
            <v-col cols="12" md="6" class="d-flex">
              <v-icon color="#00425adb">mdi-phone-outline</v-icon>
              <div class="mx-1">
                <strong>Call Us:</strong>
                <p>+123 456 7890</p>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="d-flex">
              <v-icon color="#00425adb">mdi-email-open-outline</v-icon>
              <div class="mx-1">
                <strong>Email Us:</strong>
                <p>info@yourwebsite.com</p>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="d-flex">
              <v-icon color="#00425adb">mdi-web</v-icon>
              <div class="mx-1">
                <strong>Website:</strong>
                <p>www.yourwebsite.com</p>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="d-flex">
              <v-icon color="#00425adb">mdi-map-marker-outline</v-icon>
              <div class="mx-1">
                <strong>Address:</strong>
                <p>99 Roving St., Big City, NY 12345</p>
              </div>
            </v-col>
          </v-row>

          <div>
            <h4>Follow Us On</h4>
            <div class="d-flex">
              <div class="icon">
                <v-icon color="#fff">mdi-facebook</v-icon>
              </div>
              <div class="icon">
                <v-icon color="#fff">mdi-twitter</v-icon>
              </div>
              <div class="icon">
                <v-icon color="#fff">mdi-linkedin</v-icon>
              </div>
              <div class="icon">
                <v-icon color="#fff">mdi-instagram</v-icon>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style lang="scss" scoped>
.actionbtn {
  background-color: #00425adb;
  color: white;
  padding: 0 15px;
}
.icon {
  background-color: #00425adb;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  margin: 0 5px;
  i {
    font-size: 20px;
  }
}
</style>
<style>
.v-field.v-field--focused .v-field__outline,
.v-input.v-input--error .v-field__outline {
  --v-field-border-opacity: 0.4 !important;
}
.main-heading {
  width: 100%;
  padding: 20px 0;
  text-align: center;
  background: #1f8a6f28;
  color: #00425a;
}
</style>
