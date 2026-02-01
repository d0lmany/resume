<script setup lang="ts">
// @ts-ignore
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiEmail, mdiTools } from '@mdi/js';
</script>
<template>
<div>
    <SemanticHeader/>
    <main class="container d-flex fd-column gap-2">
        <section id="home" class="hero d-flex jc-between wrap">
            <div class="d-flex fd-column jc-between gap-1">
                <h1 class="h1" style="font-size: 44px">
                    Привет, я <span class="hero-badge primary">d0lmany</span><br>
                    Делаю классные сайты<br>
                    и веб-приложения,<br>
                    которые <span class="hero-badge secondary">нравятся людям</span>
                </h1>
                <h3 class="h3" style="font-weight: 500; font-size: 28px">
                    Потому что они решают задачи —<br> а не усложняют их
                </h3>
                <div class="d-flex gap-1">
                    <hd-button size="large" tag="a" href="#contacts" type="primary">
                        <template #icon>
                            <svg-icon
                                type="mdi"
                                :size="20"
                                :path="mdiEmail"
                            />
                        </template>
                        Контакты
                    </hd-button>
                    <nuxt-link class="hd-button secondary large" to="/services">
                            <svg-icon
                                type="mdi"
                                :size="20"
                                :path="mdiTools"
                            />
                        Услуги
                    </nuxt-link>
                </div>
            </div>
            <img src="/img/flower.webp" alt="A Cute Flower">
        </section>
        <section id="about">
            //
        </section>
    </main>
</div>
</template>
<style scoped>
section {
    background: linear-gradient(
        90deg,
        var(--primary-50),
        var(--secondary-100)
    );
    scroll-margin-top: 60px;
    border-radius: 16px;
    padding: 60px;
}
.hero img {
    min-width: 345px;
    max-width: 40%;
    height: auto;
    filter: hue-rotate(200deg);
    transition: .2s var(--tr);
}
.hero img:hover {
    filter: hue-rotate(200deg) drop-shadow(0 0 3px var(--secondary-400));
}
.hero :is(h1, h3) {
    margin: 0;
}
.hero-badge {
    background: var(--bg-badge);
    border-radius: 100px;
    padding-inline: 1rem;
    color: var(--white);
    transition: var(--tr) .2s;
}
.hero-badge:hover {
    background: var(--bg-hover-badge);
}
.hero-badge.primary {
    --bg-badge: var(--primary-400);
    --bg-hover-badge: var(--primary-500);
}
.hero-badge.secondary {
    --bg-badge: var(--secondary-400);
    --bg-hover-badge: var(--secondary-500);
}
</style>