<script setup lang="ts">
const route = useRoute()
const isHome = computed(() => route.path === '/')
</script>
<template>
<header class="container d-flex wrap jc-between ai-center w-full">
    <!-- TODO: выровнять шапку в мобильной версии -->
    <nuxt-link to="/#home" class="logo h2">
        d0lmany
    </nuxt-link>
    <!-- TODO: <nav> -->
    <hd-button-group v-if="isHome" plain>
        <hd-button tag="a" href="#about">
            Обо мне
        </hd-button>
        <hd-button tag="a" href="#services">
            Род занятий
        </hd-button>
        <hd-button tag="a" href="#contacts">
            Контакты
        </hd-button>
    </hd-button-group>
    <nav v-else>
        lol
    </nav>
    <div>
    <!-- TODO: поставить тогглер темы -->
    <!-- TODO: скрывать в мобильной версии -->
        future-toggler
    </div>
    <!-- TODO: по наведению на лого, пусть будет классная анимация -->
</header>
</template>
<style scoped>
.logo {
    text-decoration: none;
}
header {
    position: fixed;
    z-index: 999;
    box-sizing: border-box;
    backdrop-filter: blur(4px);
    border-bottom: 1px solid var(--primary-50);
}
</style>