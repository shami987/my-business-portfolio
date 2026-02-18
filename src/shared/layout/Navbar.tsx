import logo from '../../assets/logos/logo.png'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-3 bg-white shadow-sm">
      <img src={logo} alt="C-Solutions" className="h-12" />
      <div className="flex gap-8 text-gray-700">
        <a href="#" className="text-red-500 font-medium">Home</a>
        <a href="#" className="hover:text-red-500">About Us</a>
        <a href="#" className="hover:text-red-500">Services</a>
        <a href="#" className="hover:text-red-500">Portfolio</a>
        <a href="#" className="hover:text-red-500">Blog</a>
        <a href="#" className="hover:text-red-500">Message Us</a>
      </div>
      <button className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600">
        Contact Now
      </button>
    </nav>
  )
}
