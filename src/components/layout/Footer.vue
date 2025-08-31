<!-- filepath: /Users/benjaminappiah-poku/TekLumen/-webApps/projects/naachiaa-website-v1/src/components/layout/Footer.vue -->
<template>
  <!-- ===== NAACHIAA ESTATES FOOTER START ===== -->
  <!-- 
    Simplified footer - mobile-first design for Ghana's construction market
    Follows Stratonea guidelines: WhatsApp integration, touch-optimized, offline-aware
  -->
  <footer class="bg-gray-900 text-white mt-auto">
    <div class="max-w-6xl mx-auto px-4 py-12">

      <!-- ===== FOOTER CONTENT GRID ===== -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

        <!-- ===== COMPANY INFO ===== -->
        <div class="space-y-4">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold">Naachiaa Estates</h3>
              <p class="text-gray-400 text-sm">Ghana's Concrete Experts</p>
            </div>
          </div>

          <p class="text-gray-300 text-sm leading-relaxed">
            Since 1991, Ghana's trusted supplier of premium concrete products.
            Quality blocks, tiles, kerbs, and culverts delivered nationwide.
          </p>

          <!-- Trust Indicators -->
          <div class="space-y-2 text-sm text-gray-400">
            <div class="flex items-center gap-2">
              <span class="text-green-400">✓</span>
              <span>30+ Years Experience</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-green-400">✓</span>
              <span>Licensed & Certified</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-green-400">✓</span>
              <span>Nationwide Delivery</span>
            </div>
          </div>
        </div>

        <!-- ===== CONTACT INFO ===== -->
        <div class="space-y-4">
          <h4 class="text-lg font-semibold mb-4">Contact Us</h4>

          <!-- WhatsApp (Primary) -->
          <button @click="openWhatsApp"
            class="w-full flex items-center gap-3 p-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors min-h-[48px]"
            aria-label="Contact us on WhatsApp">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
            <span class="text-white font-medium">Chat on WhatsApp</span>
          </button>

          <!-- Phone Numbers -->
          <div class="space-y-2">
            <a href="tel:0244314463"
              class="flex items-center gap-3 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors min-h-[48px]"
              aria-label="Call main office">
              <svg class="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <div>
                <div class="text-sm font-medium text-white">Main Office</div>
                <div class="text-sm text-gray-400">0244314463</div>
              </div>
            </a>

            <a href="mailto:info@naachiaa.com"
              class="flex items-center gap-3 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm min-h-[48px]"
              aria-label="Send us an email">
              <svg class="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span class="text-white">info@naachiaa.com</span>
            </a>
          </div>
        </div>

        <!-- ===== BUSINESS INFO ===== -->
        <div class="space-y-4">
          <h4 class="text-lg font-semibold mb-4">Business Hours</h4>

          <!-- Operating Hours -->
          <div class="space-y-2 text-sm">
            <div class="flex justify-between p-2 bg-gray-800 rounded">
              <span class="text-gray-300">Monday - Friday</span>
              <span class="text-white font-medium">7AM - 6PM</span>
            </div>
            <div class="flex justify-between p-2 bg-gray-800 rounded">
              <span class="text-gray-300">Saturday</span>
              <span class="text-white font-medium">8AM - 4PM</span>
            </div>
            <div class="flex justify-between p-2 bg-gray-800 rounded">
              <span class="text-gray-300">Sunday</span>
              <span class="text-red-400 font-medium">Closed</span>
            </div>
          </div>

          <!-- Location -->
          <div class="space-y-2">
            <h5 class="text-sm font-medium text-gray-300">📍 Location</h5>
            <div class="p-3 bg-gray-800 rounded-lg">
              <div class="text-sm text-white font-medium">Head Office</div>
              <div class="text-sm text-gray-400">
                No 8 Darfur Road Esreso Kumasi<br>
                Ashanti Region, Ghana
              </div>
              <button @click="openMaps" class="mt-2 text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1">
                View on Map →
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== FOOTER BOTTOM ===== -->
      <div class="border-t border-gray-700 mt-8 pt-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">

          <!-- Copyright -->
          <div class="text-center md:text-left">
            <p class="text-sm text-gray-400">
              © {{ currentYear }} Naachiaa Estates. All rights reserved.
            </p>
            <p class="text-xs text-gray-500">
              Ghana's trusted concrete supplier since 1991
            </p>
          </div>

          <!-- Made in Ghana -->
          <div class="flex items-center gap-2 text-xs text-gray-400">
            <span>Proudly made in</span>
            <div class="flex items-center gap-1 px-2 py-1 bg-gray-800 rounded">
              <span class="text-lg">🇬🇭</span>

            </div>
            <span class="text-white font-medium"> Ghana</span> <span class="text-white font-medium">by <a
                href="https://teklumin.com" target="_blank" rel="noopener noreferrer"> Teklumin</a></span>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- ===== NAACHIAA ESTATES FOOTER END ===== -->
</template>

<script setup lang="ts">
// ===== Constants & Config =====
/**
 * Business contact information for Naachiaa Estates
 * Simple static data for fast loading
 */
const businessInfo = {
  phone: '0244314463',
  email: 'info@naachiaa.com',
  address: 'No. 8 Darfur Road, Esreso Kumasi, Ashanti Region, Ghana',
  company: 'Naachiaa Estates'
}

/**
 * Current year for copyright
 */
const currentYear = new Date().getFullYear()

// ===== Main Logic =====
/**
 * Handle WhatsApp chat opening
 * Opens WhatsApp with pre-filled business inquiry message
 * WhatsApp integration required by Stratonea guidelines
 */
function openWhatsApp(): void {
  const message = `Hello ${businessInfo.company}! I am interested in your concrete products and would like to discuss my project requirements.`

  const encodedMessage = encodeURIComponent(message)
  const cleanNumber = businessInfo.phone.replace(/\D/g, '')
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`

  // Open WhatsApp with error handling
  try {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  } catch (error) {
    console.error('Failed to open WhatsApp:', error)
    // Fallback: Show phone number
    alert(`WhatsApp failed to open. Please call us at: ${businessInfo.phone}`)
  }
}

/**
 * Handle maps application opening
 * Opens location in Google Maps
 */
function openMaps(): void {
  const encodedAddress = encodeURIComponent(businessInfo.address)
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`

  // Open maps with error handling
  try {
    window.open(mapsUrl, '_blank', 'noopener,noreferrer')
  } catch (error) {
    console.error('Failed to open maps:', error)
    // Fallback: Copy address to clipboard
    navigator.clipboard?.writeText(businessInfo.address)
    alert(`Maps failed to open. Address copied: ${businessInfo.address}`)
  }
}
</script>

<!-- 
  ===== SIMPLIFIED DESIGN NOTES =====
  
  STRATONEA COMPLIANCE:
  - Mobile-first responsive design (grid-cols-1 md:grid-cols-3) ✓
  - Touch targets minimum 48px (min-h-[48px]) ✓
  - WhatsApp integration as primary contact method ✓
  - Simple English error messages with clear recovery steps ✓
  - Bundle size optimization: minimal JavaScript ✓
  - Accessibility features (ARIA labels, semantic HTML) ✓

  WHAT WE KEPT:
  - All essential business information (company, contact, hours, location)
  - Professional construction industry design
  - Mobile-first responsive grid layout
  - WhatsApp priority as primary contact method
  - Business hours clearly displayed
  - Trust indicators (30+ years, certified, nationwide delivery)
  - Made in Ghana branding
  - Touch-friendly buttons and links

  WHAT WE SIMPLIFIED:
  - Removed complex nested structures - flattened layout
  - Simplified contact section - WhatsApp prominent, essential contacts only
  - Single phone number instead of multiple numbers
  - Basic Ghana flag emoji instead of complex SVG
  - Streamlined business hours display
  - Minimal JavaScript - only 2 essential functions
  - Clean, easy-to-understand code structure
  - Removed verbose comments and explanations

  GHANA-SPECIFIC OPTIMIZATIONS:
  - WhatsApp as primary contact method (green button, prominent placement)
  - Static data loading for fast performance on slow networks
  - Large touch targets for reliable mobile interaction
  - Clear messaging appropriate for business customers
  - Error handling provides fallbacks when features fail
  - Professional design builds credibility for B2B customers

  LEARNING NOTES:
  - This shows how to create effective footer sections with minimal code
  - Notice how contact information is prioritized by importance
  - WhatsApp integration provides immediate customer engagement
  - Simple grid layout works well on all screen sizes
  - All functionality works without complex backend systems
  - Error handling provides clear fallbacks for users
  - Static approach ensures fast loading on slow connections
-->