<template>
  <OrderComponent v-if="this.enddate > this.date"/>
  <ReportComponent :report="this.reports[0]" v-else />
</template>

<script>
import OrderComponent from '@/components/OrderComponent.vue'
import ReportComponent from '@/components/ReportComponent.vue'
import common from '@/assets/texts/common.txt'
export default {
  name: 'AboutView',
  components: {
    OrderComponent,
    ReportComponent
  },
  data(){
    return{
      date: new Date(),
      enddate: new Date('Dec 2 2022, 01:00 GMT+0300'),
      reports:[
        {
          name: 'Отчет о работе Профкома студентов Физического факультета МГУ имени М.В. Ломоносова  за ноябрь 2021 г. – ноябрь 2022 г.',
          text: common.split('\n'),
          folder: 'common',
          num_of_slides: 6,
        }
      ]
    }
  }
}
</script>
<style scoped>

</style>
