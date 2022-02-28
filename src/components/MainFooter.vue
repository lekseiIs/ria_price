<template>
  <div>
    <footer class="footer">
      <div class="container">
        <div class="footer__inner">
          <img class="logo" src="../assets/logo.svg" alt="">
          <span class="copy">© 2014-2022 RIA.com</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'MainFooter',
};
</script>

<style scoped lang="scss">
.footer {
  &__inner{
    display: flex;
    align-items: center;
    height: 51px;
  }

  .logo {
    margin-right: 30px;
  }
}
</style>
