<template>
    <div class="layout">
        <img src="../assets/logo.png" alt="">
        <div class='name' style="display:inline-block">
            <span>
                Профком студентов<br>физического факультета
            </span>
        </div>
        <nav>
            <router-link to="/" class="button" active-class="button-active">Главная</router-link>
            <router-link to="/report" class="button" active-class="button-active">
                <span>63-я отчётно-выборная<br>конференция
                </span>
            </router-link>
            <a href="https://app.profcomff.com/apps" class="button" active-class="button-active">Приложение</a>
            <span class="button material-symbols-outlined" active-class="button-active" @click="this.showExtra = !this.showExtra">
                menu
            </span>
        </nav>
    </div>
    <div class="extra" v-if="this.showExtra">
        <router-link to="/structure" class="button" active-class="button-active">Структура</router-link>
    </div>
</template>
<script>

export default {
    data(){
        return{
            showExtra: false,
        }
    }

}
</script>
<style scoped>
div {
    background-color: #00004B;
    display: flex;
}

img {
    height: 50px;
    width: auto;
}

nav {
    display: flex;
    flex-direction: row;
    margin-left: auto;
}
.extra{
    display: block;
    z-index: 2;
    position: fixed;
    top: 58px;
    right: 0px;
    border-bottom: 2px solid #FF8B00;
}
.name {
    color: white;
    font-weight: 200;
    font-size: 16px;
    line-height: 56px;
    text-transform: uppercase;
    justify-self: center;
    vertical-align:     middle;
}

.layout {
    height: 56px;
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    border-bottom: 2px solid #FF8B00;
}

.button {
    border-left: 2px solid #FF8B00;
    padding: 10px 2rem;
    height: 37px;
    line-height: 37px;
    font-size: 16px;
    color: white;
    text-decoration: none;
    text-align: center;
    font-weight: 600;
}

.button:hover,
.button-active {
    color: #00004B;
    background: #FF8B00;
}

span {
    display: inline-block;
    vertical-align: middle;
    line-height: 18px;
    /* <-- adjust this */
}
</style>>
