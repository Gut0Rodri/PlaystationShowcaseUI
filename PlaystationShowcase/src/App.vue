<script setup>
import gameList from "./data/datagames.json";
import socialList from "./data/socialmedia.json";
import Banners from "./components/Banners.vue";
import Social from "./components/Social.vue";
import { ref } from "vue";

const activeGame = ref(null);
</script>

<template>
  <main :class="{ 'game-active': activeGame !== null }">
    <Banners
      v-for="game in gameList.games"
      :key="game.id"
      :name="game.name"
      :metacritic="game.metacritic"
      :platforms="game.platforms"
      :synopsis="game.synopsis"
      :images="game.images"
      :id="game.id"
      :is-active="activeGame === game.id"
      @open="activeGame = game.id"
      @close="activeGame = null"
    />

    <div class="container-social-media">
      <Social
        v-for="social in socialList.social"
        :key="social.id"
        :social="social.name"
        :href="social.href"
      />
    </div>
  </main>
</template>

<style scoped>
.container-social-media {
  position: absolute;
  bottom: 32px;
  left: 32px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  background-color: var(--Black);

  box-shadow: 1px 1px 5px var(--White), -1px -1px 5px var(--White);
  border-radius: 1000px;

  padding: 8px;

  opacity: 0;

  animation: fade 0.6s ease-in-out 1.2s forwards;
}

@media screen and (max-width: 1440px) {
  .container-social-media {
    gap: 8px !important;

    padding: 4px !important;
  }
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
