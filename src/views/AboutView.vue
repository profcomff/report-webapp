<template>
  <div class="layout">
    <span>До конференции осталось</span>
    <div class="home">
      <TimerComponent />
    </div>
    <a href="#report" style="text-decoration: underline; text-align: center;">Ознакомиться<br>с повесткой</a>
  </div>
  <div class="layout" id="report" style="padding-top: 66px;">
    <span  style="color:#ff8b00; font-size: 7vh; font-weight: 700;">Повестка</span>
    <ul>
      <li>Отчет Профкома студентов</li>
      <li >Отчет контрольно-ревизионной комиссии Профкома студентов</li>
      <li>Выборы председателя Профкома студентов</li>
      <li >Выборы членов Профкома студентов</li>
      <li>Выборы контрольно-ревизионной комиссии Профкома студентов</li>
      <li >Выборы делегатов на Профсоюзную конференцию Профкома МГУ</li>
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
  justify-content: space-evenly;
  min-height: 90vh;
}

span {
  text-transform: uppercase;
  color: white;
  text-align: center;
  font-size: 4.6vh;
  flex: 2 2 2;
}

a {
  text-transform: uppercase;
  color: white;
  font-size: 3vh;
  flex: 2 2 2;
}
ul{
  display: flex;
  flex-direction: column;
  gap: 5vh
}
li{
  color: white;
  font-size: 2.5vh;
  font-weight: 400;
  list-style-type: decimal;
  width: 90%;

}
</style>
