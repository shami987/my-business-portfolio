import { useEffect, useRef, useState } from 'react'

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sectionRef} className="relative bg-gradient-to-br from-red-400 via-red-500 to-pink-500 py-20 overflow-hidden">
      <svg className="absolute top-0 left-0 w-full h-32" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path d="M0,96 Q360,0 720,96 T1440,96 L1440,0 L0,0 Z" fill="#f0f9ff" />
      </svg>
      
      <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path d="M0,224 Q360,320 720,224 T1440,224 L1440,320 L0,320 Z" fill="#fbfafb" />
      </svg>
      
      <div className="relative flex items-center px-16 gap-20">
        <div className={`flex-1 ${isVisible ? 'animate-[fadeInUp_0.8s_ease-out]' : 'opacity-0'}`}>
          <img src="https://templatemo.com/templates/templatemo_562_space_dynamic/assets/images/about-left-image.png" alt="Developer" className="w-96" />
        </div>
        
        <div className="flex-1 grid grid-cols-2 gap-8">
          <div className={`flex gap-4 items-start ${isVisible ? 'animate-[fadeInUp_0.8s_ease-out_0.2s_both]' : 'opacity-0'}`}>
            <div className="bg-white rounded-full p-4 flex-shrink-0">
              <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white text-xl font-bold mb-2">Data Analysis</h3>
              <p className="text-white text-sm">Lorem ipsum dolor sit amet, ctetur adipiscing eliter</p>
            </div>
          </div>

          <div className={`flex gap-4 items-start ${isVisible ? 'animate-[fadeInUp_0.8s_ease-out_0.4s_both]' : 'opacity-0'}`}>
            <div className="bg-white rounded-full p-4 flex-shrink-0">
              <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-white text-xl font-bold mb-2">Data Reporting</h3>
              <p className="text-white text-sm">Lorem ipsum dolor sit amet, ctetur adipiscing eliter</p>
            </div>
          </div>

          <div className={`flex gap-4 items-start ${isVisible ? 'animate-[fadeInUp_0.8s_ease-out_0.6s_both]' : 'opacity-0'}`}>
            <div className="bg-white rounded-full p-4 flex-shrink-0">
              <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-white text-xl font-bold mb-2">Web Analytics</h3>
              <p className="text-white text-sm">Lorem ipsum dolor sit amet, ctetur adipiscing eliter</p>
            </div>
          </div>

          <div className={`flex gap-4 items-start ${isVisible ? 'animate-[fadeInUp_0.8s_ease-out_0.8s_both]' : 'opacity-0'}`}>
            <div className="bg-white rounded-full p-4 flex-shrink-0">
              <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-white text-xl font-bold mb-2">SEO Suggestions</h3>
              <p className="text-white text-sm">Lorem ipsum dolor sit amet, ctetur adipiscing eliter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
