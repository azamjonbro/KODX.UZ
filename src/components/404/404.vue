<template>
  <div class="relative min-h-screen w-full bg-black text-white flex items-center justify-center">
    <!-- Background Image -->
    <div class="absolute inset-0 bg-space"></div>

    <!-- Falling Stars -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        v-for="star in stars"
        :key="star.id"
        :class="star.direction === 'topLeft' ? 'absolute animate-fall-topLeft' : 'absolute animate-fall-topRight'"
        :style="{
          top: star.top,
          left: star.left,
          width: `${star.size}px`,
          height: `${star.size}px`,
          animationDuration: `${star.duration}s`,
          animationDelay: `${star.delay}s`,
        }"
      >
        <div class="h-full w-full rounded-full bg-white opacity-80" />
      </div>
    </div>

    <!-- UFO -->
    <div class="ufo">
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8794272-p5k6GdbD8O2RIat5GWtUGJGkDgXoxf.png"
        alt="UFO"
        width="300"
        height="150"
      />
    </div>

    <!-- Content -->
    <div class="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
      <h1 class="mb-2 text-7xl font-bold text-white">404</h1>
      <p class="mb-8 text-xl text-gray-300">Oops! Looks like this page got lost in space</p>
      <RouterLink to="/" class="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
        Return Home
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeUnmount, ref } from "vue";

interface Star {
  id: number;
  size: number;
  top: string;
  left: string;
  duration: number;
  delay: number;
  direction: "topLeft" | "topRight";
}

const stars = ref<Star[]>([]);

function generateStars(count: number): Star[] {
  return Array.from({ length: count }, (_, i) => ({
    id: Date.now() + i + Math.random(),
    size: Math.random() * 2 + 1, // 1-3px
    top: `${Math.random() * 50}%`,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 3 + 4,
    delay: Math.random() * 4,
    direction: Math.random() > 0.5 ? "topLeft" : "topRight",
  }));
}

let interval: number;

onMounted(() => {
  stars.value = generateStars(30);
  interval = window.setInterval(() => {
    stars.value = [...stars.value.slice(-20), ...generateStars(10)];
  }, 4000);
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css");

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}
.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes tilt {
  0%,
  100% {
    transform: rotate(-2deg);
  }
  50% {
    transform: rotate(2deg);
  }
}
.animate-tilt {
  animation: tilt 6s ease-in-out infinite;
}

@keyframes fallTopLeft {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translate(-100px, 100vh);
    opacity: 0;
  }
}
@keyframes fallTopRight {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translate(100px, 100vh);
    opacity: 0;
  }
}
.animate-fall-topLeft {
  animation: fallTopLeft 5s linear infinite;
}
.animate-fall-topRight {
  animation: fallTopRight 5s linear infinite;
}

.bg-space {
  background: url("")
    no-repeat center center/cover;
}

.ufo {
  position: absolute;
  top: 33%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: float 6s ease-in-out infinite, tilt 6s ease-in-out infinite;
}
</style>
