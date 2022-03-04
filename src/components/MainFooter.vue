<template>
  <div>
    <footer class="footer">
      <div class="container">
        <div class="footer__inner">
          <span class="footer__copy">© 2014-2022 RIA.com</span>
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
    text-align: center;
    height: 31px;
    align-items: center;
  }
  &__copy{
    font-size: 13px;
    font-weight: 500;
    color: #023b56;
  }

}
</style>
