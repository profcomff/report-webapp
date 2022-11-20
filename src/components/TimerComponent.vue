<template>
  <div id="timer" class="timer col noselect">
    <div class="timer-section">
      <div class="days-block">
        <span class="days">00</span>
      </div>
      <span class="uncorrectDays">ДНЕЙ</span>
    </div>

    <div class="timer-section">
      <div class="hours-block">
        <span class="hours">00</span>
      </div>
      <span class="uncorrectHours">ЧАСОВ</span>
    </div>

    <div class="timer-section">
      <div class="minutes-block">
        <span class="minutes">00</span>
      </div>
      <span class="uncorrectMinutes">МИНУТ</span>
    </div>

    <div class="timer-section">
      <div class="seconds-block">
        <span class="seconds">00</span>
      </div>
      <span class="uncorrectSeconds">СЕКУНД</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimerComponent',
  data() {
    return {
      endtime: 'Dec 2 2022, 17:30 GMT+0400',
      timer: null,
    }

  },
  methods: {

    // инициализация таймера на самом сайте
    setTime(id, timesup) {
      let days = document.querySelector('.days'),
        hours = document.querySelector('.hours'),
        minutes = document.querySelector('.minutes'),
        seconds = document.querySelector('.seconds');
      // обновление таймера каждые 1000мс
      this.timer = setInterval(update, 1000);

      function makeCorrectDate(uncorrectDate) {
        let correctDate = uncorrectDate;
        if (uncorrectDate < 10) {
          correctDate = '0' + uncorrectDate;
        }
        return correctDate;
      }

      function update() {
        // результат функции getDateRemaining
        var timeRemaining = new Date(timesup) - Date.now();
        var total = {
          seconds: Math.floor((timeRemaining / 1000) % 60),
          minutes: Math.floor((timeRemaining / 1000 / 60) % 60),
          hours: Math.floor((timeRemaining / (1000 * 60 * 60)) % 24),
          days: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
        }
        // Проверка на ноль

        if (timeRemaining) {
          days.textContent = makeCorrectDate(total.days);
          hours.textContent = makeCorrectDate(total.hours);
          minutes.textContent = makeCorrectDate(total.minutes);
          seconds.textContent = makeCorrectDate(total.seconds);
        } else {
          days.textContent = 0;
          hours.textContent = 0;
          minutes.textContent = 0;
          seconds.textContent = 0;
        }


        // Окончания часов
        switch (total.days) {
          case 1:
          case 21:
          case 31:
          case 41:
          case 51:
            var correctDays = "ДЕНЬ";
            break;
          case 2:
          case 3:
          case 4:
          case 22:
          case 23:
          case 24:
          case 32:
          case 33:
          case 34:
          case 42:
          case 43:
          case 44:
          case 52:
          case 53:
          case 54:
            correctDays = "ДНЯ";
            break;
          default:
            correctDays = "ДНЕЙ";
        }
        document.querySelector('.uncorrectDays').textContent = correctDays;

        // Окончания часов
        switch (total.hours) {
          case 1:
          case 21:
          case 31:
          case 41:
          case 51:
            var correctHours = "ЧАС";
            break;
          case 2:
          case 3:
          case 4:
          case 22:
          case 23:
          case 24:
          case 32:
          case 33:
          case 34:
          case 42:
          case 43:
          case 44:
          case 52:
          case 53:
          case 54:
            correctHours = "ЧАСА";
            break;
          default:
            correctHours = "ЧАСОВ";
        }
        document.querySelector('.uncorrectHours').textContent = correctHours;

        // Окончания минут
        switch (total.minutes) {
          case 1:
          case 21:
          case 31:
          case 41:
          case 51:
            var correctMinutes = "МИНУТА";
            // console.log(total.minutes, correctMinutes); // DEBUG
            break;
          case 2:
          case 3:
          case 4:
          case 22:
          case 23:
          case 24:
          case 32:
          case 33:
          case 34:
          case 42:
          case 43:
          case 44:
          case 52:
          case 53:
          case 54:
            correctMinutes = "МИНУТЫ";
            // console.log(total.minutes, correctMinutes); // DEBUG
            break;
          default:
            correctMinutes = "МИНУТ";
          // console.log(total.minutes, correctMinutes); // DEBUG
        }
        document.querySelector('.uncorrectMinutes').textContent = correctMinutes;

        // Окончания секунд
        switch (total.seconds) {
          case 1:
          case 21:
          case 31:
          case 41:
          case 51:
            var correctSeconds = "СЕКУНДА";
            break;
          case 2:
          case 3:
          case 4:
          case 22:
          case 23:
          case 24:
          case 32:
          case 33:
          case 34:
          case 42:
          case 43:
          case 44:
          case 52:
          case 53:
          case 54:
            correctSeconds = "СЕКУНДЫ";
            break;
          default:
            correctSeconds = "СЕКУНД";
          // console.log(total.seconds, correctSeconds); // DEBUG
        }
        document.querySelector('.uncorrectSeconds').textContent = correctSeconds;
      }
    }
  },
  mounted() {
    this.setTime('timer', this.endtime);
  },
  unmounted() {
    clearInterval(this.timer);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.timer {
  text-align: center;
  margin: 0 auto;
  cursor: default;
}

/*       текст под цифрами       */
.days,
.hours,
.minutes,
.seconds {
  font-size: 10vh;
  color: #00004b;
  font-weight: 600;
  margin: 0 auto;
}

/*         цифры таймера         */
.uncorrectDays,
.uncorrectHours,
.uncorrectMinutes,
.uncorrectSeconds {
  font-size: 1.5 em;
  font-family: 'Montserrat', sans-serif;
  color: #FF8B00;
}

/*      блоки хранящие цифры      */
.days-block,
.hours-block,
.minutes-block,
.seconds-block {
  background: #FF8B00;
  margin: 1.5vh;
  padding: 0.8vh;
  border-radius: 3vh;
  width: 15vh;
  height: 15vh;
  display: flex;
  align-items: center;
}

.timer-section {
  display: inline-block;
}

.timer-text {
  display: block;
  font-size: 4vh;
}
</style>
