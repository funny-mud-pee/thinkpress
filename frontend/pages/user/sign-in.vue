<template>
  <div class="container" style="padding-top: 90px">
    <b-row class="justify-content-center">
      <b-col cols="7">
        <b-card
          align="left"
          no-body
          class="card-appearance card-sign-in-appearance"
        >
          <b-row class="justify-content-center py-4">
            <b-col cols="7">
              <b-card-header header-bg-variant="white" class="border-0" header-tag="h5">
                Sign in
                <small class="float-right">Or go to
                  <nuxt-link to="/user/sign-up"> sign up</nuxt-link>
                </small>
              </b-card-header>
              <b-form @submit="onSubmit" class="mt-3">
                <b-form-group
                >
                  <b-form-input
                    id="account"
                    v-model="form.account"
                    type="text"
                    required
                    placeholder="Enter email or username"
                  ></b-form-input>
                </b-form-group>
                <b-form-group>
                  <b-form-input
                    id="password"
                    v-model="form.password"
                    type="password"
                    required
                    placeholder="Enter password"
                  ></b-form-input>
                </b-form-group>
                <b-form-group>
                  <vueTencentCaptcha appid="2015470704" :options="captchaOptions" @callback="captchaCallback">
                    <b-button variant="white" block class="tcaptcha-button ready">
                      <div class="tcaptcha-icon"><i></i></div>
                      <span>Click to verify</span>
                    </b-button>
                  </vueTencentCaptcha>
                </b-form-group>
                <b-form-group id="input-group-4">
                  <b-form-checkbox value="1" v-model="form.remember">Remember me</b-form-checkbox>
                </b-form-group>
                <b-button type="submit" variant="primary" block>Submit</b-button>
              </b-form>
            </b-col>
            <b-col cols="4">
              <b-card-header header-bg-variant="white" class="border-0" header-tag="h5">
                Social account
              </b-card-header>
              <div class="mt-3">
                <b-button block style="background: #00c250" class="border-0 mb-3">Wechat</b-button>
                <b-button block style="background: #24292e" class="border-0 mb-3">Github</b-button>
              </div>
            </b-col>
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
                form: {
                    account: '',
                    password: '',
                    remember: 0
                },
                captchaOptions: {}
            }
        },
        methods: {
            captchaCallback(res) {
                console.log(res)
                this.$api.verify.tcaptcha(res.ticket);
            },
            onSubmit(evt) {
                evt.preventDefault();
                alert(JSON.stringify(this.form))
            }
        }
    }
</script>
