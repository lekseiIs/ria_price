<template>
    <div class="accordion">
        <h3 class="accordion_titlee">Ключові фактори, які впливають на ціну вживаного авто:</h3>
        <AccordionEl>
            <AccordionItem v-for="el in this.data" :key="el[0]">
                <template slot="accordion-trigger">
                    <h3 class="accordion_title">{{el[1]}}</h3>
                </template>
                <template slot="accordion-content">
                    <span class="accordion_text">{{el[2]}}</span>
                </template>
            </AccordionItem>
        </AccordionEl>
    </div>
</template>

<script>
import AccordionEl from '@/components/Accordion/AccordionEl.vue';
import AccordionItem from '@/components/Accordion/AccordionItem.vue';
import acData from '../../../accordionData';

export default {
  name: 'AccordionComponent',
  data() {
    return {
      data: [],
    };
  },
  components: {
    AccordionEl,
    AccordionItem,
  },
  computed: {
  },
  created() {
    this.data = acData;
  },
};
</script>

<style lang="scss">
.accordion_titlee {
    display: flex;
    justify-content: center;
    margin-top: 14px;
    margin-bottom: 10px;
    color: #777;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 18px;
    padding: 0 14px;
}
.accordion {
    margin: 14px 0;
}
.accordion_title {
    line-height: 22px;
    font-size: 15px;
    margin: 0;
    color: #777;
}
.accordion_text {
    font-size: 14px;
    color: #777;
}
</style>
