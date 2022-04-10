<template>
  <li class="accordion__item">
    <div
      class="accordion__trigger"
      :class="{'accordion__trigger_active': visible}"
      @click="open"
      v-on:keyup.enter="open"
      >
      <slot name="accordion-trigger"></slot>
      <div class="cross">+</div>
    </div>

    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end">
      <div class="accordion__content"
        v-show="visible">
        <ul>
          <slot name="accordion-content"></slot>
        </ul>
      </div>
    </transition>
  </li>
</template>

<script>
export default {
  props: {},
  inject: ['Accordion'],
  data() {
    return {
      index: null,
    };
  },
  computed: {
    visible() {
      return this.index === this.Accordion.active;
    },
  },
  methods: {
    open() {
      if (this.visible) {
        this.Accordion.active = null;
      } else {
        this.Accordion.active = this.index;
      }
    },
    start(el) {
      el.style.height = `${el.scrollHeight}px`;
    },
    end(el) {
      el.style.height = '';
    },
  },
  created() {
    this.index = this.Accordion.count++;
  },
};
</script>

<style lang="scss" scoped>
.cross {
    font-size: 20px;
    color: #777;
}

.accordion__trigger_active .cross {
    transform: rotate(45deg);
    transition: 0.5s;
}

.accordion__item {
  cursor: pointer;
  padding: 10px 14px;
  position: relative;
}

.accordion__item:hover {
    background-color: #dbdbdb;
}

.accordion__trigger {
  display: flex;
  justify-content: space-between;
}

.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
