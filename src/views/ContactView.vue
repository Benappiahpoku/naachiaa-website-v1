<!-- filepath: /Users/benjaminappiah-poku/TekLumen/-webApps/projects/naachiaa-website-v1/src/views/AboutView.vue -->
<template>
  <!-- ===== NAACHIAA ESTATES ABOUT PAGE START ===== -->
  <!-- 
    Professional about page for construction industry B2B website
    Optimized for Ghana's mobile-first users with company heritage focus
    Features credibility building and trust indicators for contractors
  -->
  <main class="min-h-screen bg-gray-50">
    
    <!-- ===== HERO SECTION ===== -->
    <section class="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 pt-20 pb-24 px-4">
      <div class="container mx-auto text-center relative z-10 max-w-4xl">
        <!-- Company Logo and Heritage -->
        <div class="flex justify-center mb-8">
          <div class="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-xl">
            <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
            </svg>
          </div>
        </div>
        
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
          About Naachiaa Estates
        </h1>
        <p class="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
          Ghana's premier concrete products manufacturer since 1991. 
          Building the nation with quality, reliability, and trust.
        </p>
        
        <!-- Heritage Badge -->
        <div class="mt-8 inline-flex items-center px-6 py-3 bg-blue-600 rounded-full text-white font-semibold">
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
          </svg>
          30+ Years of Excellence
        </div>
      </div>
      
      <!-- Decorative bottom curve -->
      <div class="absolute bottom-0 left-0 right-0 h-16 bg-gray-50" style="clip-path: ellipse(100% 100% at 50% 100%)"></div>
    </section>

    <!-- ===== COMPANY STORY SECTION ===== -->
    <section class="container mx-auto px-4 py-16 max-w-6xl -mt-8 relative z-20">
      
      <!-- ===== OUR HERITAGE ===== -->
      <div class="grid lg:grid-cols-2 gap-12 items-center mb-16">
        
        <!-- Story Content -->
        <div class="space-y-6">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Our Heritage</h2>
          </div>
          
          <div class="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p class="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-600">
              <strong class="text-blue-600">Since 1991</strong>, Naachiaa Estates has been Ghana's 
              trusted partner in construction. From our humble beginnings in Tema, we've grown to 
              become the nation's leading concrete products manufacturer.
            </p>
            
            <p class="bg-white p-6 rounded-xl shadow-sm">
              Our journey began with a simple mission: to provide Ghana's construction industry 
              with reliable, high-quality concrete products that meet international standards 
              while remaining accessible to local contractors and developers.
            </p>
            
            <p class="bg-white p-6 rounded-xl shadow-sm">
              Today, our products have helped build thousands of homes, offices, roads, and 
              infrastructure projects across Ghana. We're proud to be part of the nation's 
              development story.
            </p>
          </div>
        </div>
        
        <!-- Heritage Image -->
        <div class="relative">
          <div class="bg-white p-4 rounded-2xl shadow-xl">
            <div class="aspect-[4/3] bg-gradient-to-br from-blue-100 to-gray-100 rounded-xl flex items-center justify-center">
              <!-- Placeholder for company heritage image -->
              <div class="text-center text-gray-500">
                <svg class="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
                </svg>
                <p class="text-sm font-medium">Company Heritage Photo</p>
                <p class="text-xs">1991 - Present</p>
              </div>
            </div>
          </div>
          
          <!-- Floating Statistics -->
          <div class="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-xl shadow-xl">
            <div class="text-center">
              <div class="text-2xl font-bold">30+</div>
              <div class="text-sm">Years Strong</div>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== COMPANY VALUES ===== -->
      <div class="mb-16">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do in serving Ghana's construction industry
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Quality Value -->
          <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-t-4 border-blue-600">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Quality First</h3>
            <p class="text-gray-600 leading-relaxed">
              Every concrete block, tile, and kerb meets rigorous quality standards. 
              We never compromise on the materials that build Ghana's future.
            </p>
          </div>
          
          <!-- Reliability Value -->
          <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-t-4 border-green-600">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Reliable Delivery</h3>
            <p class="text-gray-600 leading-relaxed">
              On-time delivery, every time. Our logistics network ensures your 
              construction projects stay on schedule across Ghana.
            </p>
          </div>
          
          <!-- Innovation Value -->
          <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-t-4 border-orange-600">
            <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
            <p class="text-gray-600 leading-relaxed">
              Continuously improving our products and processes to serve Ghana's 
              evolving construction needs with modern solutions.
            </p>
          </div>
          
        </div>
      </div>

      <!-- ===== COMPANY STATISTICS ===== -->
      <div class="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white mb-16">
        <div class="text-center mb-8">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
          <p class="text-xl text-blue-200">Three decades of building Ghana, one project at a time</p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          <!-- Years of Experience -->
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold mb-2">30+</div>
            <div class="text-blue-200 font-medium">Years Experience</div>
          </div>
          
          <!-- Projects Completed -->
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold mb-2">5,000+</div>
            <div class="text-blue-200 font-medium">Projects Completed</div>
          </div>
          
          <!-- Satisfied Customers -->
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold mb-2">1,200+</div>
            <div class="text-blue-200 font-medium">Satisfied Customers</div>
          </div>
          
          <!-- Regions Served -->
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold mb-2">16</div>
            <div class="text-blue-200 font-medium">Regions Served</div>
          </div>
          
        </div>
      </div>

      <!-- ===== CERTIFICATIONS & QUALITY ===== -->
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        
        <!-- Certifications Content -->
        <div class="space-y-6">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Quality Assurance</h2>
          </div>
          
          <p class="text-lg text-gray-700 leading-relaxed">
            Our commitment to quality goes beyond words. We maintain rigorous standards 
            and certifications to ensure every product meets international specifications.
          </p>
          
          <!-- Certification List -->
          <div class="space-y-4">
            <div class="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
              <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <div class="font-semibold text-gray-900">ISO 9001:2015 Certified</div>
                <div class="text-sm text-gray-600">Quality Management Systems</div>
              </div>
            </div>
            
            <div class="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
              <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <div class="font-semibold text-gray-900">Ghana Standards Authority</div>
                <div class="text-sm text-gray-600">All products meet national standards</div>
              </div>
            </div>
            
            <div class="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
              <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <div class="font-semibold text-gray-900">Environmental Compliance</div>
                <div class="text-sm text-gray-600">Sustainable manufacturing practices</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Quality Process Visualization -->
        <div class="bg-white p-8 rounded-2xl shadow-xl">
          <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">Our Quality Process</h3>
          
          <div class="space-y-6">
            <!-- Step 1 -->
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
              <div>
                <div class="font-semibold text-gray-900">Material Selection</div>
                <div class="text-sm text-gray-600">Premium raw materials sourced locally</div>
              </div>
            </div>
            
            <!-- Step 2 -->
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
              <div>
                <div class="font-semibold text-gray-900">Manufacturing</div>
                <div class="text-sm text-gray-600">Precision mixing and molding processes</div>
              </div>
            </div>
            
            <!-- Step 3 -->
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
              <div>
                <div class="font-semibold text-gray-900">Quality Testing</div>
                <div class="text-sm text-gray-600">Rigorous strength and durability tests</div>
              </div>
            </div>
            
            <!-- Step 4 -->
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">✓</div>
              <div>
                <div class="font-semibold text-gray-900">Certified Delivery</div>
                <div class="text-sm text-gray-600">Quality guaranteed to your site</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== CALL TO ACTION ===== -->
      <div class="mt-16 text-center">
        <div class="bg-white p-8 md:p-12 rounded-2xl shadow-xl border-t-4 border-blue-600">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Build with Us?
          </h2>
          <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of contractors and developers who trust Naachiaa Estates 
            for their concrete product needs.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <!-- WhatsApp Contact -->
            <button
              @click="openWhatsApp"
              class="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-green-600 hover:bg-green-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Contact us on WhatsApp"
            >
              <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Chat on WhatsApp
            </button>
            
            <!-- Email Contact -->
            <a
              href="mailto:info@naachiaa.com"
              class="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white border-2 border-blue-600 hover:bg-blue-600 hover:text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              Send Email
            </a>
          </div>
        </div>
      </div>
      
    </section>
  </main>
  <!-- ===== NAACHIAA ESTATES ABOUT PAGE END ===== -->
</template>

<script setup lang="ts">
// ===== Imports =====
import { onMounted } from 'vue'

// ===== Constants & Config =====
/**
 * Business contact information for Naachiaa Estates
 * Used for WhatsApp integration and contact methods
 */
const businessInfo = {
  whatsappNumber: '+233244123456',
  email: 'info@naachiaa.com',
  companyName: 'Naachiaa Estates'
}

// ===== Main Logic =====
/**
 * Handle WhatsApp contact opening
 * Opens WhatsApp with pre-filled business inquiry message
 */
function openWhatsApp(): void {
  const message = encodeURIComponent(
    'Hello Naachiaa Estates! I am interested in learning more about your concrete products and would like to discuss potential collaboration for my construction project.'
  )
  
  const whatsappNumber = businessInfo.whatsappNumber.replace(/\D/g, '')
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
  
  // Open WhatsApp in new tab
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  
  // Track WhatsApp interaction for analytics
  console.log('WhatsApp contact initiated from About page:', {
    company: businessInfo.companyName,
    number: whatsappNumber,
    timestamp: new Date().toISOString()
  })
}

// ===== Page Analytics =====
/**
 * Track page view and user engagement
 * Important for understanding About page effectiveness
 */
onMounted(() => {
  console.log('About page loaded:', {
    page: 'about',
    company: businessInfo.companyName,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent
  })
  
  // TODO: Replace with actual analytics service
  // trackPageView('about', {
  //   section: 'company-info',
  //   version: 'v1.0',
  //   industry: 'construction'
  // })
})
</script>

<!-- 
  ===== DESIGN NOTES =====
  
  CONSTRUCTION INDUSTRY FOCUS:
  - Professional blue/gray color scheme for B2B credibility
  - Heritage emphasis (Since 1991) for trust building
  - Quality certifications and standards prominently displayed
  - Statistics that matter to contractors (projects, customers, regions)
  
  MOBILE-FIRST OPTIMIZATION:
  - Single column layout on mobile with proper spacing
  - Touch-friendly buttons (WhatsApp, email) with adequate sizing
  - Responsive grid layouts that adapt from mobile to desktop
  - Optimized typography for readability on small screens
  
  GHANA-SPECIFIC FEATURES:
  - WhatsApp integration for preferred communication method
  - Nationwide delivery coverage (16 regions served)
  - Local certifications (Ghana Standards Authority)
  - Construction industry statistics relevant to Ghanaian market
  
  TRUST & CREDIBILITY BUILDING:
  - 30+ years experience prominently featured
  - Quality certifications with visual indicators
  - Customer statistics and project numbers
  - Professional company values aligned with construction industry
  
  CONVERSION OPTIMIZATION:
  - Multiple contact methods (WhatsApp, email)
  - Clear call-to-action at the end
  - Social proof through statistics and certifications
  - Value proposition clearly communicated throughout
-->