<!-- filepath: /Users/benjaminappiah-poku/TekLumen/-webApps/projects/naachiaa-website-v1/src/components/common/HeroSection.vue -->
<template>
  <!-- ===== HERO SECTION START ===== -->
  <!-- Mobile-first hero section with Ghana-optimized design -->
  <section 
    class="
      relative min-h-[70vh] w-full 
      bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900
      flex items-center justify-center
      px-4 py-12 sm:py-16 md:py-20
    "
    role="banner"
    aria-label="Naachiaa Estates Hero Section"
  >
    <!-- Background overlay for better text readability -->
    <div class="absolute inset-0 bg-black bg-opacity-40"></div>
    
    <!-- Hero Content Container -->
    <div class="relative z-10 max-w-4xl mx-auto text-center text-white">
      
      <!-- ===== MAIN HEADLINE ===== -->
      <!-- Primary value proposition - mobile optimized -->
      <h1 class="
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
        font-bold leading-tight mb-4
        drop-shadow-lg
      ">
        {{ heroTitle }}
      </h1>
      
      <!-- ===== SUBHEADLINE ===== -->
      <!-- Supporting message with company credibility -->
      <p class="
        text-lg sm:text-xl md:text-2xl 
        font-medium mb-8 
        text-blue-100 max-w-2xl mx-auto
        drop-shadow-md
      ">
        {{ heroSubtitle }}
      </p>
      
      <!-- ===== CALL-TO-ACTION BUTTONS ===== -->
      <!-- Mobile-first button layout with 48px minimum touch targets -->
      <div class="
        flex flex-col sm:flex-row 
        gap-4 justify-center items-center
        max-w-md mx-auto sm:max-w-none
      ">
        
        <!-- Primary CTA: Request Quote -->
        <button
          @click="handleRequestQuote"
          class="
            w-full sm:w-auto
            bg-orange-500 hover:bg-orange-600 
            text-white font-semibold 
            px-8 py-4 rounded-lg
            min-h-[48px] min-w-[200px]
            transition-all duration-300 ease-in-out
            transform hover:scale-105 active:scale-95
            shadow-lg hover:shadow-xl
            focus:outline-none focus:ring-4 focus:ring-orange-300
          "
          aria-label="Request a quote for concrete products"
        >
          📋 Request a Quote
        </button>
        
        <!-- Secondary CTA: Call Now -->
        <button
          @click="handleCallNow"
          class="
            w-full sm:w-auto
            bg-transparent border-2 border-white 
            text-white hover:bg-white hover:text-blue-900
            font-semibold px-8 py-4 rounded-lg
            min-h-[48px] min-w-[200px]
            transition-all duration-300 ease-in-out
            transform hover:scale-105 active:scale-95
            shadow-lg hover:shadow-xl
            focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50
          "
          aria-label="Call Naachiaa Estates now"
        >
          📞 Call Us Now
        </button>
        
      </div>
      
      <!-- ===== TRUST INDICATORS ===== -->
      <!-- Build credibility with key stats -->
      <div class="
        mt-12 pt-8 border-t border-blue-300 border-opacity-30
        flex flex-col sm:flex-row justify-center items-center
        gap-6 sm:gap-12 text-blue-100
      ">
        
        <div class="text-center">
          <div class="text-2xl font-bold text-white">34+</div>
          <div class="text-sm uppercase tracking-wide">Years Experience</div>
        </div>
        
        <div class="text-center">
          <div class="text-2xl font-bold text-white">1000+</div>
          <div class="text-sm uppercase tracking-wide">Projects Completed</div>
        </div>
        
        <div class="text-center">
          <div class="text-2xl font-bold text-white">ISO</div>
          <div class="text-sm uppercase tracking-wide">Certified Quality</div>
        </div>
        
      </div>
      
    </div>
    
    <!-- ===== SCROLL INDICATOR ===== -->
    <!-- Gentle hint to scroll down - mobile friendly -->
    <div class="
      absolute bottom-6 left-1/2 transform -translate-x-1/2
      animate-bounce
    ">
      <div class="w-6 h-10 border-2 border-white rounded-full flex justify-center">
        <div class="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
    
  </section>
  <!-- ===== HERO SECTION END ===== -->
</template>

<script setup lang="ts">
// ===== Types & Interfaces =====
/**
 * Hero section component for Naachiaa Estates website
 * Features:
 * - Mobile-first responsive design
 * - Ghana-optimized for touch interactions
 * - Clear call-to-action buttons with proper accessibility
 * - Trust indicators to build credibility
 */

// ===== Constants & Config =====
const heroTitle = "Ghana's Trusted Concrete Partner"
const heroSubtitle = "High-quality concrete products since 1991"

// Phone number for Ghana - using proper international format
const COMPANY_PHONE = "+233244123456" // Replace with actual number

// ===== Main Logic =====
/**
 * Handle quote request - opens contact form or navigates to contact page
 * This will be connected to your contact system later
 */
function handleRequestQuote(): void {
  // TODO: Connect to quote request system
  console.log('Quote request initiated')
  
  // For now, scroll to contact section (will be implemented later)
  // or navigate to contact page
  alert('Quote request feature coming soon! Please call us directly.')
}

/**
 * Handle call now action - opens phone dialer on mobile devices
 * Optimized for Ghana mobile users who prefer calling
 */
function handleCallNow(): void {
  // Create tel: link for mobile devices
  const phoneLink = `tel:${COMPANY_PHONE}`
  
  // Open phone dialer
  window.location.href = phoneLink
  
  // Fallback for analytics tracking
  console.log('Call initiated to:', COMPANY_PHONE)
}

// ===== Accessibility & SEO =====
/**
 * Component is designed with:
 * - Proper ARIA labels for screen readers
 * - Semantic HTML structure
 * - High contrast text for outdoor visibility
 * - Large touch targets (48px minimum) for mobile users
 * - Clear visual hierarchy with proper heading structure
 */
</script>

<!-- 
  DESIGN NOTES:
  - Uses mobile-first responsive design (default styles are for mobile)
  - Blue gradient background matches construction/industrial theme
  - Orange CTA button creates strong visual contrast
  - Trust indicators build credibility for B2B customers
  - All interactive elements have hover/active states
  - Optimized for Ghana's mobile-first user base
-->