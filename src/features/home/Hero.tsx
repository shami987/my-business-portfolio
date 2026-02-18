export default function Hero() {
  return (
    <div className="flex items-center px-16 py-20 pt-48">
      <div className="flex-1 animate-[slideInLeft_1s_ease-out]">
        <p className="text-red-500 text-sm font-semibold mb-4">WELCOME TO C-SOLUTIONS</p>
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          We Make <span className="text-cyan-500">Digital Ideas</span>
          <br />
          & <span className="text-red-500">SEO</span> Marketing
        </h1>
        <p className="text-gray-600 mb-8 max-w-xl">
          C-Solutions is a professional web agency specializing in digital solutions and Search Engine Optimization(SEO) marketing to help your business grow online.
        </p>
      </div>
      <div className="flex-1 relative animate-[slideInRight_1s_ease-out]">
        <div className="relative">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 600">
            <ellipse cx="300" cy="300" rx="280" ry="280" fill="none" stroke="white" strokeWidth="40" opacity="0.3" />
          </svg>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/015/296/426/small/comfortable-sofa-using-laptop-group-of-african-american-business-people-working-when-sitting-together-photo.jpg"
            alt="Team meeting"
            className="rounded-full w-full max-w-lg mx-auto relative z-10"
          />
        </div>
      </div>
    </div>
  )
}
