<template>
  <div class="container" style="padding-top: 90px">
    <b-row class="justify-content-center">
      <b-col cols="8">
        <b-card
          align="left"
          no-body
          class="card-appearance"
        >
          <b-row>
            <b-col cols="8">
              <b-card-header header-bg-variant="white" header-tag="h5">
                <span class="header-text">Sign in</span>
                <span>Or click here to<a>sign up</a><nuxt-link to="/user/sign-up"></nuxt-link></span>
              </b-card-header>
            </b-col>
            <b-col cols="4">right</b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>

  </div>
</template>

<script>
    export default {
        layout: 'default',
        data() {
            return {

            }
        },
    }
</script>
