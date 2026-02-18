export default function ServicesSection() {
  return (
    <div className="flex items-center gap-16 px-16 py-20 bg-gray-50">
      <div className="flex-1">
        <img 
          src="https://templatemo.com/templates/templatemo_562_space_dynamic/assets/images/services-left-image.png" 
          alt="Services" 
          className="w-full max-w-2xl"
        />
      </div>
      
      <div className="flex-1">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Grow Your Website With Our <span className="text-cyan-500">SEO</span> Service & <span className="text-red-500">Project</span> Ideas
        </h2>
        <p className="text-gray-600 mb-12">
          Space Dynamic HTML5 template is free to use for your website projects. However, you are not permitted to redistribute the template ZIP file on any CSS template collection websites. Please contact us for more information. Thank you for your kind cooperation.
        </p>
        
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-900">Website Analysis</span>
              <span className="text-cyan-500 font-bold">84%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-red-500 to-pink-500" style={{width: '84%'}}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-900">SEO Reports</span>
              <span className="text-cyan-500 font-bold">88%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-red-500 to-pink-500" style={{width: '88%'}}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-900">Page Optimizations</span>
              <span className="text-cyan-500 font-bold">94%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-red-500 to-pink-500" style={{width: '94%'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
