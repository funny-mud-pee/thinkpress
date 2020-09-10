<template>
  <div>
    <header class="fixed-top shadow-sm bg-white">
      <div class="container">
        <b-navbar toggleable="lg">
          <b-navbar-brand>
            <b-img src="~/static/logo.png" fluid alt="GO FOR HISTORY" style="height: 50px"></b-img>
          </b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-5">
              <b-nav-item href="#">Link</b-nav-item>
              <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              </b-nav-form>
              <b-nav-item>
                <nuxt-link to="/user/sign-in">
                  <b-button v-b-modal.sign-in-modal size="sm">Sign in</b-button>
                </nuxt-link>
              </b-nav-item>
              <!--              <b-nav-item-dropdown right no-caret>-->
              <!--                &lt;!&ndash; Using 'button-content' slot &ndash;&gt;-->
              <!--                <template v-slot:button-content>-->
              <!--&lt;!&ndash;                  src or text&ndash;&gt;-->
              <!--                  <b-avatar size="2rem"></b-avatar>-->
              <!--                </template>-->
              <!--                <b-dropdown-item href="#">Profile</b-dropdown-item>-->
              <!--                <b-dropdown-item href="#">Sign Out</b-dropdown-item>-->
              <!--              </b-nav-item-dropdown>-->
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </header>
    <Nuxt/>
    <footer class="container">2020@goforhistory.com</footer>
  </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
    }
</script>

<style>
  body {
    background-color: rgb(245, 245, 245);
  }
</style>
