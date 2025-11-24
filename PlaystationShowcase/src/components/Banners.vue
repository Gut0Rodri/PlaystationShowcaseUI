<script setup>
import closeButton from "/images/icons/close.svg";
import metacritic from "/images/icons/metacritic.png";
import psfour from "/images/icons/ps4.svg";
import psfive from "/images/icons/ps5.svg";
import steam from "/images/icons/steam.svg";
import epicgames from "/images/icons/epicgames.svg";

// Props para receber dados do componente "pai"
const propsGames = defineProps({
  id: Number,
  name: String,
  metacritic: Number,
  platforms: Array,
  synopsis: Array,
  images: Array,
  isActive: Boolean,
});

// Redirecionar para a imagem correta
const platformIcons = {
  PS4: psfour,
  PS5: psfive,
  Steam: steam,
  EpicGames: epicgames,
};

// Funções para o componente "pai" receber informações sobre o componente "filho"
const emit = defineEmits(["open", "close"]);
</script>

<template>
  <section
    :class="[{ active: propsGames.isActive }, 'game-section']"
    :style="`--background-game: url(${
      propsGames.isActive
        ? propsGames.images[0].page
        : propsGames.images[0].banner
    })`"
    @click="!propsGames.isActive ? emit('open') : null"
  >
    <img
      v-if="propsGames.isActive"
      class="btn-close"
      :src="closeButton"
      alt="Close"
      @click.stop="emit('close')"
    />

    <div v-if="propsGames.isActive" class="name-content-game">
      <h1 class="name-game">
        {{ propsGames.name.line1 }}<br />
        <span>{{ propsGames.name.line2 }}</span>
      </h1>

      <div class="content">
        <div class="text">
          <p>{{ propsGames.synopsis[0].first }}</p>
          <p>{{ propsGames.synopsis[0].second }}</p>
        </div>

        <div class="metacritic-platforms">
          <div class="metacritic">
            <img :src="metacritic" alt="Metacritic" />
            <p>{{ propsGames.metacritic }}</p>
          </div>

          <div class="platforms">
            <img
              v-for="(platform, index) in propsGames.platforms"
              :key="index"
              :src="platformIcons[platform]"
              :alt="platform"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.game-section {
  position: relative;
  background-image: var(--background-game);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  flex-grow: 1;

  filter: grayscale(100%);

  transition: all 0.6s;

  cursor: pointer;
}

.game-section:hover {
  filter: grayscale(0);
}

.game-section::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: var(--Black);

  animation: heightImage 0.6s ease-in-out forwards;
}

.game-section:nth-child(2):after {
  animation-delay: 0.2s;
}

.game-section:nth-child(3):after {
  animation-delay: 0.4s;
}

.game-section:nth-child(4):after {
  animation-delay: 0.6s;
}

.game-section:nth-child(5):after {
  animation-delay: 0.8s;
}

.game-active .game-section:not(.active) {
  width: 96px;
}

.game-section.active {
  filter: grayscale(0);
  cursor: default;

  padding-bottom: 96px;
  & .btn-close {
    position: absolute;
    top: 32px;
    left: 32px;

    transition: all 0.6s;

    opacity: 0;
    animation: fade 0.6s ease-in-out 1.4s forwards;

    cursor: pointer;
  }

  & .btn-close:hover {
    transform: scale(1.05);
  }

  & .name-content-game {
    margin-top: 96px;
    margin-right: 96px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    gap: 32px;

    & .name-game {
      font-family: var(--Teko);
      font-size: 160px;
      font-weight: 400;

      text-shadow: var(--Black) 2px 2px;
      text-transform: uppercase;
      text-align: end;
      color: var(--White);

      line-height: 112px;

      opacity: 0;
      animation: slidefade 0.6s ease-in-out 0.6s forwards;
    }

    & .content {
      display: flex;
      flex-direction: column;
      gap: 16px;

      & .text {
        width: 512px;
        display: inherit;
        flex-direction: inherit;

        gap: 24px;

        padding: 16px;

        background-color: var(--Black-Opacity-75);

        border-radius: 16px;

        opacity: 0;
        animation: fadeUp 0.6s ease-in-out 1s forwards;

        & p {
          max-width: fit-content;
          word-wrap: break-word;
          font-size: 18px;
          font-family: var(--Inter);
          font-weight: 300;

          line-height: 1.5;
          color: var(--White);
        }

        & p:nth-child(1) {
          font-style: italic;
          font-weight: 100;
        }
      }

      & .metacritic-platforms {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 8px 16px;

        background-color: var(--Black-Opacity-90);

        border-radius: 16px;

        opacity: 0;
        animation: fadeUp 0.6s ease-in-out 1.2s forwards;

        & .metacritic {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 12px;

          & img {
            width: 36px;
          }

          & p {
            font-family: var(--Inter);
            font-weight: bold;
            font-size: 28px;
            color: var(--White);
          }
        }

        & .platforms {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 16px;
        }
      }
    }
  }
}

@media screen and (max-width: 1440px) {
  .game-section.active {
    & .btn-close {
      width: 28px;
    }

    & .name-content-game {
      top: 64px;
      right: 64px;
    }

    & .name-game {
      font-size: 128px !important;
      line-height: 90px !important;
    }

    & .text {
      & p {
        font-size: 14px !important;
      }
    }

    & .metacritic-platforms {
      & .metacritic {
        & img {
          width: 28px !important;
          height: 28px !important;
        }
        & p {
          font-size: 20px !important;
        }
      }

      & .platforms {
        img {
          width: 28px !important;
          height: 28px !important;
        }
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .game-section.active {
    & .btn-close {
      width: 24px;
    }

    & .name-content-game {
      top: 32px;
      right: 32px;
    }

    & .name-game {
      font-size: 96px !important;
      line-height: 70px !important;
    }

    & .text {
      width: 384px !important;
    }

    & .metacritic-platforms {
      & .metacritic {
        gap: 6px !important;

        & img {
          width: 24px !important;
          height: 24px !important;
        }
        & p {
          font-size: 18px !important;
        }
      }

      & .platforms {
        img {
          width: 28px !important;
          height: 28px !important;
        }
      }
    }
  }
}

@keyframes slidefade {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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

@keyframes heightImage {
  from {
    height: 100%;
  }
  to {
    height: 0%;
  }
}
</style>
