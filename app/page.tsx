export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-300 via-pink-300 to-purple-600 p-6">

      <div className="bg-white rounded-3xl shadow-[0_40px_80px_rgba(0,0,0,0.25)] w-full max-w-5xl overflow-hidden md:flex">

        {/* IMAGEN DESKTOP */}
        <div className="hidden md:block md:w-1/2 relative">
          <img
            src="https://i.pinimg.com/736x/68/2a/ad/682aade08821a7126fefc540605dbb50.jpg"
            alt="astronaut"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/20"></div>

          <div className="absolute top-6 left-6 text-white">
            <p className="text-sm font-medium">Astro</p>
            <h2 className="text-2xl font-semibold max-w-xs mt-4">
              Exploring new frontiers, one step at a Time.
            </h2>
          </div>

          <div className="absolute bottom-6 left-6 text-white text-sm">
            Beyond Earth's grasp
          </div>
        </div>

        {/* FORM */}
        <div className="w-full md:w-1/2 p-8 md:p-12">

          {/* IMAGEN MOBILE */}
          <div className="md:hidden relative mb-6 rounded-2xl overflow-hidden">
            <img
              src="https://i.pinimg.com/736x/68/2a/ad/682aade08821a7126fefc540605dbb50.jpg"
              alt="astronaut"
              className="w-full h-64 object-cover"
            />

            <div className="absolute inset-0 bg-black/20"></div>

            <div className="absolute top-4 left-4 text-white">
              <p className="text-sm font-medium">Astro</p>
              <h2 className="text-lg font-semibold max-w-xs mt-2">
                Exploring new frontiers, one step at a Time.
              </h2>
            </div>

            <div className="absolute bottom-4 left-4 text-white text-xs">
              Beyond Earth's grasp
            </div>
          </div>

          <h1 className="text-2xl font-semibold text-gray-800 mb-6">
            Create Account
          </h1>

          {/* BOTONES SOCIALES */}
          <div className="flex gap-4 mb-6">

            <button className="flex-1 flex items-center justify-center gap-2 bg-purple-600 text-white py-2 rounded-xl text-sm font-medium hover:bg-purple-700 transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                className="w-4 h-4"
              />
              Sign up with Google
            </button>

            <button className="flex-1 flex items-center justify-center gap-2 bg-gray-200 text-gray-700 py-2 rounded-xl text-sm font-medium hover:bg-gray-300 transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                className="w-4 h-4"
              />
              with Facebook
            </button>

          </div>

          <p className="text-xs text-gray-400 mb-6">
            Or sign up using your email address
          </p>

          {/* INPUTS CON LABELS */}
          <div className="space-y-4">

            <div>
              <label className="text-sm font-medium text-gray-600">
                Name
              </label>
              <input
                type="text"
                className="w-full mt-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                Email or Phone no.
              </label>
              <input
                type="text"
                className="w-full mt-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                Username
              </label>
              <input
                type="text"
                className="w-full mt-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                className="w-full mt-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

          </div>

          {/* CHECKBOX */}
          <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
            <input type="checkbox" />
            <span>I agree to all terms and Privacy Policy</span>
          </div>

          {/* BOTÓN PRINCIPAL */}
          <button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 rounded-xl font-medium hover:opacity-90 transition">
            Sign up
          </button>

        </div>

      </div>
    </div>
  );
}