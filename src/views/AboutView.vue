<template>
  <div class="layout" style="justify-content: center; height: 70vh;">
    <span>До конференции осталось</span>
    <div class="home">
      <TimerComponent />
    </div>
    <a href="#report" style="text-decoration: underline; text-align: center;">Ознакомиться<br>с повесткой</a>
  </div>
  <div class="layout" id="report" style="justify-content;:flex-start;">
    <span style="color:#ff8b00; font-size: 66px; font-weight: 700;">Повестка</span>
    <ul>
      <li>Отчет Профкома студентов</li>
      <li style="align-self:flex-end">Отчет контрольно-ревизионной комиссии Профкома студентов</li>
      <li>Выборы председателя Профкома студентов</li>
      <li style="align-self:flex-end">Выборы членов Профкома студентов</li>
      <li>Выборы контрольно-ревизионной комиссии Профкома студентов</li>
      <li style="align-self:flex-end">Выборы делегатов на Профсоюзную конференцию Профкома МГУ</li>
      <li>Разное</li>
    </ul>
  </div>
</template>

<script>
import TimerComponent from '@/components/TimerComponent.vue'

export default {
  name: 'HomeView',
  components: {
    TimerComponent
  }
}
</script>
<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10vh;
  gap: 10vh;

}

span {
  text-transform: uppercase;
  color: white;
  font-size: 36px;
  flex: 2 2 2;
}

a {
  text-transform: uppercase;
  color: white;
  font-size: 26px;
  flex: 2 2 2;
}
ul{
  display: flex;
  flex-direction: column;
  gap: 5vh
}
li{
  color: white;
  font-size: 24px;
  font-weight: 400;
  list-style-type: none;
  width: 70%;

}
</style>
