<script setup>
import github from '../assets/images/icons/github.svg';
import linkedin from '../assets/images/icons/linkedin.svg';
import figma from '../assets/images/icons/figma.svg';

const propsSocial = defineProps({
    social: String,
    href: String,
});

const socialIcons = {
    Github: github,
    Linkedin: linkedin,
    Figma: figma
}

</script>

<template>
    <a :href="propsSocial.href" target="_blank" rel="noopener" class="social-media">
        <img :src="socialIcons[propsSocial.social]" :alt="propsSocial.social">
    </a>
</template>

<style scoped>
.social-media {
    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color: var(--White);

    padding: 4px 16px;

    border-radius: 1000px;

    opacity: 0;

    animation: slidefade .2s ease-in-out 1.6s forwards;

    & img {
        width: 16px;
    }
}

.social-media:nth-child(2) {
    animation-delay: 1.8s;
}

.social-media:nth-child(3) {
    animation-delay: 2s;
}

@media screen and (max-width: 1440px) {
    .social-media {
        padding: 4px 12px !important;

        & img {
            width: 12px !important;
        }
    }
}

@keyframes slidefade {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>