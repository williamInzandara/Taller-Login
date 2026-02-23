export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-pink-200 to-purple-400 p-6">

      {/* CONTENEDOR PRINCIPAL */}
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl overflow-hidden md:flex">

        {/* IMAGEN - DESKTOP */}
        <div className="hidden md:block md:w-1/2 relative">
          <img
            src="https://i.pinimg.com/736x/68/2a/ad/682aade08821a7126fefc540605dbb50.jpg"
            alt="astronaut"
            className="h-full w-full object-cover"
          />

          <div className="absolute top-6 left-6 text-white">
            <h2 className="text-2xl font-semibold max-w-xs">
              Exploring new frontiers, one step at a Time.
            </h2>
          </div>
        </div>

        {/* FORM */}
        <div className="w-full md:w-1/2 p-8 md:p-12">

          {/* MOBILE IMAGE */}
          <div className="md:hidden mb-6 rounded-2xl overflow-hidden">
            <img
              src="https://i.pinimg.com/736x/68/2a/ad/682aade08821a7126fefc540605dbb50.jpg"
              alt="astronaut"
              className="w-full h-56 object-cover"
            />
          </div>

          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">
              Create Account
            </h1>

            <p className="text-sm text-gray-500 hidden md:block">
              Already a member? <span className="font-medium text-black cursor-pointer">Sign in</span>
            </p>
          </div>

          {/* BOTONES SOCIALES */}
          <div className="flex gap-4 mb-6">
            <button className="flex-1 bg-purple-600 text-white py-2 rounded-xl text-sm font-medium hover:bg-purple-700 transition">
              Sign up with Google
            </button>
            <button className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-xl text-sm font-medium hover:bg-gray-300 transition">
              with Facebook
            </button>
          </div>

          <p className="text-xs text-gray-400 mb-6">
            Or sign up using your email address
          </p>

          {/* INPUTS */}
          <div className="space-y-4">

            <input
              type="text"
              placeholder="Name"
              className="w-full bg-gray-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-purple-400"
            />

            <input
              type="text"
              placeholder="Email or Phone no."
              className="w-full bg-gray-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-purple-400"
            />

            <input
              type="text"
              placeholder="Username"
              className="w-full bg-gray-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-purple-400"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full bg-gray-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-purple-400"
            />

          </div>

          {/* CHECKBOX */}
          <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
            <input type="checkbox" />
            <span>I agree to all terms and Privacy Policy</span>
          </div>

          {/* BOTÓN */}
          <button className="w-full mt-6 bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition">
            Sign up
          </button>

          <p className="text-xs text-center text-gray-500 mt-4 md:hidden">
            Already have an account? <span className="font-medium text-black">Login</span>
          </p>

        </div>

      </div>
    </div>
  );
}