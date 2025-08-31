<!-- filepath: /Users/benjaminappiah-poku/TekLumen/-webApps/projects/naachiaa-website-v1/src/components/layout/Navigation.vue -->
<template>
  <!-- ===== NAACHIAA ESTATES NAVIGATION START ===== -->
  <!-- 
    Professional navigation for construction industry B2B website
    Optimized for Ghana's mobile-first users with touch-friendly interactions
    Features Naachiaa Estates branding and construction-focused navigation
  -->
  <nav class="bg-gray-800 shadow-lg border-b-2 border-blue-600 sticky z-index-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6  lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <!-- ===== COMPANY LOGO & BRANDING ===== -->
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/" class="flex items-center space-x-3 group">
              <!-- Naachiaa Logo -->
              <div
                class="w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200 bg-white">
                <img src="/NaachiaaLogo.webp" alt="Naachiaa Logo"
                  class="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-full shadow-sm" loading="lazy" />
              </div>
              <!-- Company Name -->
              <div class="flex flex-col">
                <span class="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-200">
                  Naachiaa
                </span>
                <span class="text-xs text-gray-400 -mt-1 group-hover:text-blue-400 transition-colors duration-200">
                  Estates
                </span>
              </div>
            </router-link>
          </div>

          <!-- ===== DESKTOP NAVIGATION MENU ===== -->
          <div class="hidden sm:ml-8 sm:flex sm:space-x-2">
            <router-link v-for="item in navItems" :key="item.path" :to="item.path" class="
                inline-flex items-center px-6 py-4 text-gray-200 relative group 
                transition-all duration-200 font-medium text-sm uppercase tracking-wide
                hover:text-white
              " :class="{
                'text-white': $route.path === item.path,
                'text-gray-200': $route.path !== item.path
              }">
              <!-- Navigation Item Text -->
              <span class="relative z-10 flex items-center gap-2">
                <!-- Navigation Icons -->
                <svg v-if="item.icon" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path :d="item.icon" />
                </svg>
                {{ item.name }}
              </span>

              <!-- Hover/Active Background Effect -->
              <div class="
                  absolute inset-x-2 inset-y-2 rounded-lg bg-blue-600 opacity-0 
                  group-hover:opacity-100 transition-all duration-200 
                  transform scale-95 group-hover:scale-100
                " :class="{
                  'opacity-100 scale-100 bg-blue-700': $route.path === item.path,
                  'opacity-0 scale-95': $route.path !== item.path
                }"></div>

              <!-- Active Route Indicator -->
              <div v-if="$route.path === item.path"
                class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-blue-400 rounded-t-full"></div>
            </router-link>
          </div>
        </div>

        <!-- ===== MOBILE MENU TOGGLE BUTTON ===== -->
        <div class="flex items-center sm:hidden">
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="
              inline-flex items-center justify-center p-3 rounded-lg 
              text-gray-300 hover:text-white hover:bg-gray-800 
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900
              transition-all duration-200
            " aria-controls="mobile-menu" :aria-expanded="isMobileMenuOpen" aria-label="Toggle navigation menu">
            <span class="sr-only">{{ isMobileMenuOpen ? 'Close' : 'Open' }} main menu</span>

            <!-- Hamburger Icon (when menu is closed) -->
            <svg v-if="!isMobileMenuOpen" class="h-6 w-6 transition-transform duration-200"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>

            <!-- X Icon (when menu is open) -->
            <svg v-else class="h-6 w-6 transition-transform duration-200 rotate-90" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- ===== MOBILE NAVIGATION MENU ===== -->
    <!-- Smooth slide-down animation optimized for mobile devices -->
    <transition enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0" enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in" leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0">
      <div v-show="isMobileMenuOpen" class="sm:hidden bg-gray-800 shadow-xl border-t border-gray-700" id="mobile-menu">
        <div class="px-4 pt-4 pb-6 space-y-2">
          <router-link v-for="item in navItems" :key="item.path" :to="item.path" class="
              text-gray-200 flex items-center gap-3 px-4 py-4 rounded-lg text-base font-medium 
              hover:bg-gray-700 hover:text-white active:bg-blue-600 active:text-white
              transition-all duration-200 touch-manipulation min-h-[48px]
            " :class="{
              'bg-blue-600 text-white shadow-md': $route.path === item.path,
              'bg-transparent': $route.path !== item.path
            }" @click="isMobileMenuOpen = false">
            <!-- Mobile Navigation Icons -->
            <svg v-if="item.icon" class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path :d="item.icon" />
            </svg>
            <span>{{ item.name }}</span>

            <!-- Active indicator for mobile -->
            <div v-if="$route.path === item.path" class="ml-auto w-2 h-2 bg-blue-300 rounded-full"></div>
          </router-link>

          <!-- ===== MOBILE CONTACT QUICK ACCESS ===== -->
          <div class="border-t border-gray-700 pt-4 mt-4">
            <div class="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-3 px-4">
              Quick Contact
            </div>
            <div class="space-y-2">
              <!-- WhatsApp Quick Contact -->
              <a href="https://wa.me/0244314463" target="_blank" rel="noopener noreferrer" class="
                  flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium
                  text-green-400 hover:bg-green-600 hover:text-white
                  transition-all duration-200 min-h-[44px]
                ">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                <span>WhatsApp Chat</span>
              </a>

              <!-- Phone Quick Contact -->
              <a href="tel:0244314463" class="
                  flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium
                  text-blue-400 hover:bg-blue-600 hover:text-white
                  transition-all duration-200 min-h-[44px]
                ">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </nav>
  <!-- ===== NAACHIAA ESTATES NAVIGATION END ===== -->
</template>

<script setup lang="ts">
// ===== Imports =====
import { ref } from 'vue'

// ===== State Management =====
/**
 * Mobile menu toggle state
 * Controls the visibility of mobile navigation menu
 */
const isMobileMenuOpen = ref(false)

// ===== Constants & Config =====
/**
 * Navigation items for Naachiaa Estates
 * Construction industry-focused navigation with icons and proper routing
 */
const navItems = [
  {
    name: 'Home',
    path: '/',
    icon: 'M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z'
  },
  {
    name: 'Products',
    path: '/products',
    icon: 'M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z'
  },
  {
    name: 'About Us',
    path: '/about',
    icon: 'M13 6a3 3 0 11-6 0 3 3 0 016 0zM9 12a6 6 0 016 6H3a6 6 0 016-6z'
  },
  {
    name: 'Contact',
    path: '/contact',
    icon: 'M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'
  }
]

// ===== Helper Functions =====
/**
 * Close mobile menu when clicking outside or on route change
 * Improves mobile user experience
 */
// function closeMobileMenu(): void {
//   isMobileMenuOpen.value = false
// }

// ===== Performance Optimization =====
/**
 * Navigation performance optimizations for Ghana's mobile users:
 * - Touch-optimized button sizes (48px minimum)
 * - Smooth animations with appropriate durations
 * - Reduced motion for users with motion preferences
 * - High contrast colors for outdoor visibility
 */

// ===== Accessibility Features =====
/**
 * Navigation accessibility features:
 * - Proper ARIA labels and expanded states
 * - Screen reader friendly text
 * - Keyboard navigation support
 * - High contrast colors for visibility
 * - Touch-friendly interaction targets
 * - Clear visual focus indicators
 */

// ===== Ghana-Specific Features =====
/**
 * Features optimized for Ghana market:
 * - WhatsApp quick contact in mobile menu
 * - Phone number click-to-call functionality
 * - Construction industry focused navigation structure
 * - Mobile-first design for Ghana's mobile-heavy usage
 */
</script>

<!-- 
  ===== DESIGN NOTES =====
  
  COLOR SCHEME:
  - Primary: Gray-900 background (professional construction industry)
  - Accent: Blue-600/700 for highlights and active states
  - Text: White/Gray-200 for good contrast on dark background
  - Hover: Blue-600 with smooth transitions
  
  MOBILE OPTIMIZATION:
  - Touch targets minimum 48px height
  - Smooth animations optimized for mobile performance
  - WhatsApp and phone quick access in mobile menu
  - Single-thumb navigation friendly
  
  CONSTRUCTION INDUSTRY FOCUS:
  - Professional color scheme (gray/blue)
  - Business-focused navigation items (Products, Projects, About Us)
  - Icons that represent construction/building concepts
  - B2B focused design language
  
  GHANA-SPECIFIC FEATURES:
  - WhatsApp integration (preferred communication method)
  - Click-to-call phone numbers
  - Mobile-first approach for Ghana's mobile usage patterns
  - High contrast for outdoor visibility
  
  NAACHIAA BRANDING:
  - Shield icon representing strength and reliability
  - Two-line company name (Naachiaa / Estates)
  - Professional construction industry styling
  - Blue accent color consistent with construction industry
-->