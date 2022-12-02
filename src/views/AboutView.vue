<template>
  <OrderComponent v-if="this.enddate > this.date" />
  <div v-else>
    <ReportComponent id="report" :report="this.reports[this.index]" :key="this.index" />
    <div class="layout">
      <span style="color:#ff8b00; font-size: 5vh; font-weight: 700;">Все отчёты</span>
      <ul>
        <li v-for="(report, index) in this.reports" :key="index"><a href="#report" @click="this.index = index">{{report.short_name}}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import OrderComponent from '@/components/OrderComponent.vue'
import ReportComponent from '@/components/ReportComponent.vue'
import common from '@/assets/texts/common.txt'
import scolarship from '@/assets/texts/scolarship.txt'
import social from '@/assets/texts/social.txt'
import student from '@/assets/texts/student.txt'
import useful from '@/assets/texts/useful.txt'
import law from '@/assets/texts/law.txt'
import unk from '@/assets/texts/unk.txt'
import kmk from '@/assets/texts/kmk.txt'
import sport from '@/assets/texts/sport.txt'
import media from '@/assets/texts/media.txt'
import drive from '@/assets/texts/drive.txt'
import socpartner from '@/assets/texts/socpartner.txt'
import design from '@/assets/texts/design.txt'
import tech from '@/assets/texts/tech.txt'
import itgroup from '@/assets/texts/itgroup.txt'
export default {
  name: 'AboutView',
  components: {
    OrderComponent,
    ReportComponent
  },
  data() {
    return {
      date: new Date(),
      enddate: new Date('Dec 2 2022, 17:30 GMT+0300'),
      index: 0,
      reports: [
        {
          name: 'Отчет о работе Профкома студентов Физического факультета МГУ имени М.В. Ломоносова  за ноябрь 2021 г. – ноябрь 2022 г.',
          short_name: 'Общие дела',
          text: common.split('\n'),
          folder: 'common',
          num_of_slides: 6,
        },
        {
          name: 'Студенческая стипендиальная комиссия',
          short_name: 'Студенческая стипендиальная комиссия',
          text: scolarship.split('\n'),
          folder: 'scolarship',
          num_of_slides: 8,
        },
        {
          name: 'Социальная комиссия',
          short_name: 'Социальная комиссия',
          text: social.split('\n'),
          folder: 'social',
          num_of_slides: 9,
        },
        {
          name: 'Комиссия по работе со студентами и абитуриентами',
          short_name: 'Студенты и абитуриенты',
          text: student.split('\n'),
          folder: 'student',
          num_of_slides: 8,
        },
        {
          name: 'Комиссия по общественно полезным делам',
          short_name: 'Общественно полезная',
          text: useful.split('\n'),
          folder: 'useful',
          num_of_slides: 5,
        },
        {
          name: 'Правовая комиссия',
          short_name: 'Правовая',
          text: law.split('\n'),
          folder: 'law',
          num_of_slides: 6,
        },
        {
          name: 'Учебно-научная комиссия',
          short_name: 'Учебно-научная',
          text: unk.split('\n'),
          folder: 'unk',
          num_of_slides: 6,
        },
        {
          name: 'Культурно-массовая комиссия',
          short_name: 'Культурно-массовая',
          text: kmk.split('\n'),
          folder: 'kmk',
          num_of_slides: 10,
        },
        {
          name: 'Спортивная комиссия',
          short_name: 'Спортивная',
          text: sport.split('\n'),
          folder: 'sport',
          num_of_slides: 9,
        },
        {
          name: 'Группа Медиа',
          short_name: 'Медиа',
          text: media.split('\n'),
          folder: 'media',
          num_of_slides: 9,
        },
        {
          name: 'Группа выездных мероприятий и школ актива',
          short_name: 'Выездные',
          text: drive.split('\n'),
          folder: 'drive',
          num_of_slides: 4,
        },
        {
          name: 'Комиссия по социальному партнерству',
          short_name: 'Соц.партнёрство',
          text: socpartner.split('\n'),
          folder: 'socpartner',
          num_of_slides: 3,
        },
        {
          name: 'Группа дизайна',
          short_name: 'Дизайн',
          text: design.split('\n'),
          folder: 'design',
          num_of_slides: 5,
        },
        {
          name: 'Группа техники',
          short_name: 'Техника',
          text: tech.split('\n'),
          folder: 'tech',
          num_of_slides: 4,
        },
        {
          name: 'IT-группа',
          short_name: 'Программисты',
          text: itgroup.split('\n'),
          folder: 'itgroup',
          num_of_slides: 6,
        }
      ]
    }
  }
}
</script>
<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 90vw;
  margin: auto;
  padding: 5vh;
}

span {
  text-transform: uppercase;
  color: white;
  text-align: center;
  font-size: 4.6vh;
  flex: 2 2 2;
}
a {
  color: white;
  font-size: 2.5vh;
  font-weight: 400;
  width: 90%;
  text-decoration: underline;
}
ul {
  display: flex;
  flex-direction: column;
  gap: 2vh
}

li {
  color: white;
  list-style-type: decimal;
}
</style>
