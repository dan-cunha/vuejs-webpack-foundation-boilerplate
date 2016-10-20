<template>
  <div class="row">
    <div class="small-6 small-offset-3 columns">
      <div class="text-center">
        <img class="logo" src="~assets/logo.png">
      </div>
      <hr />
      <div class="primary callout large" data-closable>
        <p>
          This is a fork of the fantastic <a href="http://vuejs-templates.github.io/webpack" target="_blank">VueJS Webpack Boilerplate</a>, which includes:
        </p>
        <ul class="text-left">
          <li><a href="http://foundation.zurb.com/" target="_blank">Foundation for Sites</a> as a front-end framework
          <li><a href="http://fontawesome.io/" target="_blank">Font Awesome</a> for icons
          <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a> for routing
          <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a> for state management
          <li><a href="https://github.com/vuejs/vue-resource" target="_blank">vue-resource</a> for web request/response handling
          <li><a href="https://github.com/vuejs/vue-validator" target="_blank">vue-validator</a> for form validation
        </ul>
        <button class="close-button" aria-label="Dismiss alert" type="button" data-close>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <p>
        To get a better understanding of how the original boilerplate works, check out
        <a href="http://vuejs-templates.github.io/webpack" target="_blank">its documentation</a>.
        It is also recommended to go through the docs for
        <a href="http://webpack.github.io/" target="_blank">Webpack</a> and
        <a href="http://vuejs.github.io/vue-loader/" target="_blank">vue-loader</a>.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
  .callout {
    a { color: #039; text-decoration: underline; }
  }
</style>
