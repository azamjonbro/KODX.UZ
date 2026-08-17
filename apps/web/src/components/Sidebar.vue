<template>
  <aside class="w-72 border-r border-surface-800 bg-surface-950/90 backdrop-blur-md p-4 min-h-[calc(100vh-65px)] sticky top-[65px] flex flex-col overflow-y-auto">
    <!-- Course Title / Header -->
    <div class="mb-4 px-2 flex items-center justify-between">
      <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-brand-400">
        {{ courseData?.title ? courseData.title.split('—')[0] : sectionName.toUpperCase() }} MAVZULARI
      </h2>
      <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-surface-800 text-surface-400">
        {{ allLessonsCount }} dars
      </span>
    </div>

    <!-- Modules / Topics Navigation List -->
    <nav class="space-y-4 flex-1">
      <!-- If API modules are available -->
      <div
        v-for="mod in courseModules"
        :key="mod.id"
        class="space-y-1.5"
      >
        <div class="px-2 pt-2 text-[11px] font-semibold text-surface-400 uppercase tracking-wider flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
          {{ mod.title }}
        </div>

        <div class="space-y-1 pl-1">
          <router-link
            v-for="lesson in mod.lessons"
            :key="lesson.slug"
            :to="`/${sectionName}/${lesson.slug.replace(`${sectionName}-`, '')}`"
            class="flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg transition-all text-surface-300 hover:text-white hover:bg-surface-900 group"
            active-class="!bg-brand-500/10 !text-brand-400 !font-bold border-l-2 border-brand-500 rounded-l-none pl-2.5"
          >
            <span class="truncate">{{ lesson.title }}</span>
            <span class="text-[10px] font-mono text-surface-500 group-hover:text-surface-400 whitespace-nowrap ml-2">
              {{ lesson.estimatedMinutes }} daq
            </span>
          </router-link>
        </div>
      </div>

      <!-- Fallback to local static topics if API is loading or offline -->
      <div v-if="courseModules.length === 0" class="space-y-1">
        <router-link
          v-for="topic in fallbackTopics"
          :key="topic.path"
          :to="topic.path"
          class="flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg transition-all text-surface-300 hover:text-white hover:bg-surface-900"
          active-class="!bg-brand-500/10 !text-brand-400 !font-bold border-l-2 border-brand-500 rounded-l-none pl-2.5"
        >
          <span>{{ topic.title }}</span>
        </router-link>
      </div>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { topics } from '../data/topics';
import { apiClient } from '../services/api';

const route = useRoute();

interface ModuleItem {
  id: string;
  title: string;
  order: number;
  lessons: {
    id: string;
    slug: string;
    title: string;
    estimatedMinutes: number;
    order: number;
  }[];
}

interface CourseResponse {
  id: string;
  slug: string;
  title: string;
  modules: ModuleItem[];
}

const courseData = ref<CourseResponse | null>(null);
const courseModules = ref<ModuleItem[]>([]);

const sectionName = computed(() => {
  const segment = route.path.split('/')[1] as keyof typeof topics;
  return segment || 'html';
});

const fallbackTopics = computed(() => {
  return topics[sectionName.value] || [];
});

const allLessonsCount = computed(() => {
  if (courseModules.value.length > 0) {
    return courseModules.value.reduce((acc, m) => acc + (m.lessons?.length || 0), 0);
  }
  return fallbackTopics.value.length;
});

async function fetchCourseDetails(slug: string) {
  try {
    const res = await apiClient.get<{ success: boolean; data: CourseResponse }>(`/courses/${slug}`);
    if (res.data?.success && res.data.data) {
      courseData.value = res.data.data;
      courseModules.value = res.data.data.modules || [];
    }
  } catch (_error) {
    // Silently fall back to topics.ts
    courseModules.value = [];
  }
}

onMounted(() => {
  fetchCourseDetails(sectionName.value);
});

watch(sectionName, (newSection) => {
  fetchCourseDetails(newSection);
});
</script>
