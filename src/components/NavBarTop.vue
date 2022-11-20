<template>
    <div class="layout" ref='foo'>
        <img src="../assets/logo.png" alt="" class="noselect">
        <a href="https://profcomff.com" class='name' style="display:inline-block">
            <span>
                Профком студентов<br>физического факультета
            </span>
        </a>
        <nav v-if="!this.mobile">
            <router-link to="/" class="button" active-class="button-active">
                <span>63-я отчётно-выборная<br>конференция
                </span>
            </router-link>
            <a href="https://app.profcomff.com/apps" class="button" active-class="button-active" target="blank">Приложение</a>
            <router-link to="/structure" class="button" active-class="button-active">Структура</router-link>
        </nav>
        <span class="button material-symbols-outlined" active-class="button-active"
            @click="this.showExtra = !this.showExtra" style="margin-left:auto" v-else>
            menu
        </span>
    </div>
    <div class="extra" v-if="this.showExtra && this.mobile">
        <div class="extra-layout">
            <router-link to="/" class="button-extra" active-class="button-active">
                <span>63-я отчётно-выборная<br>конференция
                </span>
            </router-link>
            <a href="https://app.profcomff.com/apps" class="button-extra" active-class="button-active">Приложение</a>
            <router-link to="/structure" class="button-extra" active-class="button-active">Структура</router-link>
        </div>
    </div>
</template>
<script>

export default {

    data() {
        return {
            showExtra: false,
            mobile: true,
        }
    },
    methods: {
        isMobile() {
            if (
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                ) || document.documentElement.clientWidth < document.documentElement.clientHeight * 1.15
            ) {
                return true;
            } else {
                return false;
            }
        },
    },
    created(){
        this.mobile = this.isMobile()
        window.addEventListener('resize' , () => {
            this.mobile = this.isMobile()
        })
    }

}
</script>
<style scoped>
div {
    background-color: #00004B;
    display: flex;
}

img {
    height: 6vh;
    padding: 1vh;
    width: auto;
}

nav {
    display: flex;
    flex-direction: row;
    margin-left: auto;
}

.extra {
    display: block;
    z-index: 2;
    position: fixed;
    top: 8vh;
    right: 0px;
    left: 0px;
    border-bottom: 2px solid #FF8B00;

}
.extra-layout{
    display: flex;
    flex-direction: column;
    width: 100%;
}
.name {
    color: white;
    font-weight: 200;
    font-size: 2vh;
    line-height: 8vh;
    text-transform: uppercase;
    justify-self: center;
    vertical-align: middle;
}

.layout {
    height: 8vh;
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 0px;
    left: 0px;
    width:100%;
    border-bottom: 2px solid #FF8B00;
}

.button {
    border-left: 2px solid #FF8B00;
    padding: 1.4vh 4vh;
    height: 5.5vh;
    line-height: 5.5vh;
    font-size: 2vh;
    color: white;
    text-decoration: none;
    text-align: center;
    font-weight: 600;
}
.button-extra {
    padding: 1.4vh 4vh;
    height: 5.5vh;
    line-height: 5.5vh;
    font-size: 2vh;
    color: white;
    text-decoration: none;
    text-align: center;
    font-weight: 600;
}

.button:hover,
.button-active, .button-extra:hover {
    color: #00004B;
    background: #FF8B00;
}

span {
    display: inline-block;
    vertical-align: middle;
    line-height: 2.5vh;
    /* <-- adjust this */
}
</style>>
