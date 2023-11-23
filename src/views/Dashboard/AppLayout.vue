<template>


    <div class="antialiased bg-gray-50 dark:bg-gray-900">

        <Nav></Nav>
        <!-- Sidebar -->

        <Sidebar></Sidebar>

        <main class="p-4 md:ml-64 h-auto pt-20">
            <slot></slot>
        </main>
    </div>
</template>

<script setup>

import Nav from './Components/Nav.vue';
import Sidebar from './Components/Sidebar.vue';

import { onMounted } from 'vue'
import {
  initAccordions,
  initCarousels,
  initCollapses,
  initDials,
  initDismisses,
  initDrawers,
  initDropdowns,
  initModals,
  initPopovers,
  initTabs,
  initTooltips
} from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initAccordions();
  initCarousels();
  initCollapses();
  initDials();
  initDismisses();
  initDrawers();
  initDropdowns();
  initModals();
  initPopovers();
  initTabs();
  initTooltips();
})
</script>

<style></style>
