<template lang="pug">
#app
  router-link(to="/")
    img.logo(src="@/assets/images/logo.png")
  router-view
</template>

<style lang="scss">
@import "./assets/scss/_variables.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: url("./assets/images/background.png");
  font-family: $font-stack;
}

a {
  text-decoration: none;
}

#app {
  margin: 3rem 0;
}

.logo {
  width: 200px;
  height: auto;
  display: block;
  margin: 0 auto;
}
</style>
