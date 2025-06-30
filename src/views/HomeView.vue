<!-- filepath: /Users/benjaminappiah-poku/TekLumen/-webApps/projects/naachiaa-website-v1/src/views/HomeView.vue -->
<template>
  <!-- ===== NAACHIAA ESTATES HOMEPAGE START ===== -->
  <!-- 
    Simplified homepage - mobile-first design for Ghana's construction market
    Follows Stratonea guidelines: offline-first, WhatsApp integration, touch-optimized
  -->
  <main class="min-h-screen bg-white" role="main" aria-label="Naachiaa Estates Homepage">
    
    <!-- ===== HERO SECTION ===== -->
    <HeroSection />
    
    <!-- ===== PRODUCTS SECTION ===== -->
    <ProductsSection />
    
    <!-- ===== FEATURED PROJECTS SECTION ===== -->
    <FeaturedProjects />
    
    <!-- ===== TESTIMONIALS SECTION ===== -->
    <Testimonials />
    
    <!-- ===== ABOUT SECTION ===== -->
    <AboutSection />
    
    <!-- ===== CONTACT SECTION ===== -->
    <ContactSection />
    
  </main>
  <!-- ===== NAACHIAA ESTATES HOMEPAGE END ===== -->
</template>

<script setup lang="ts">
// ===== Component Imports =====
/**
 * Import all homepage sections
 * Each component is self-contained and mobile-first
 */
import HeroSection from '@/components/common/HeroSection.vue'
import ProductsSection from '@/components/common/ProductsSection.vue'
import FeaturedProjects from '@/components/common/FeaturedProjects.vue'
import Testimonials from '@/components/common/TestimonialsSection.vue'
import AboutSection from '@/components/common/AboutSection.vue'
import ContactSection from '@/components/common/ContactSection.vue'

// ===== Analytics =====
/**
 * Simple homepage tracking for Ghana market insights
 */
import { onMounted } from 'vue'

onMounted(() => {
  // Track homepage view
  console.log('Homepage loaded:', {
    timestamp: new Date().toISOString(),
    connectionType: (navigator as any).connection?.effectiveType || 'unknown'
  })
})
</script>

<!-- 
  ===== SIMPLIFIED DESIGN NOTES =====
  
  STRATONEA COMPLIANCE:
  - Mobile-first responsive design throughout all components ✓
  - Touch targets minimum 48px (handled by individual components) ✓
  - WhatsApp integration in Hero and Contact sections ✓
  - Offline support (components handle their own offline states) ✓
  - Simple English messaging throughout ✓
  - Bundle size optimization: minimal JavaScript ✓

  WHAT WE KEPT:
  - All 6 homepage sections in optimal order for B2B conversion
  - Professional construction industry design
  - Complete component functionality and styling
  - Accessibility features (semantic HTML, ARIA labels)
  - Mobile-first responsive layout
  - Ghana-specific optimizations (WhatsApp, offline-aware)

  WHAT WE SIMPLIFIED:
  - Removed complex performance tracking code
  - Simple onMounted tracking instead of detailed metrics
  - No complex analytics setup (just basic console logging)
  - Removed lengthy documentation comments (kept essential ones)
  - Streamlined component imports (removed explanatory comments)
  - Clean, minimal structure - easy to understand

  HOMEPAGE SECTION ORDER:
  1. HeroSection - Value proposition & primary CTA
  2. ProductsSection - Core products for lead qualification  
  3. FeaturedProjects - Portfolio for credibility
  4. Testimonials - Social proof from real customers
  5. AboutSection - Company heritage & trust signals
  6. ContactSection - Multiple contact methods (WhatsApp priority)

  LEARNING NOTES:
  - This shows how to create clean, maintainable homepage layouts
  - Component composition keeps code organized and reusable
  - Each section handles its own styling and functionality
  - Mobile-first approach ensures good experience on all devices
  - Simple tracking provides insights without complexity
  - Accessibility built-in through semantic HTML structure
-->