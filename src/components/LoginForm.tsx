import Image from "next/image"
import Link from "next/link"

export default function LoginForm() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-gray-100">

      {/* LEFT SIDE */}
      <div
        className="hidden lg:flex flex-col justify-between bg-cover bg-center p-12"
        style={{ backgroundImage: "url('/auth-frame.webp')" }}
      >
        <div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome Back!
          </h1>
          <p className="text-white">
            You are about to access a Vcare corporation system. This computer system and the data therein are property of the Vcare corporation and its clients and provided for official information and use only. Access to this system is restricted to authorized users only. Unauthorized access, use, or modification of this computer system or of the data contained herein, or in transit to/from this system, may constitute a violation of federal or state criminal laws. Anyone who accesses a computer system without authorization or exceeds his or her access authority, or obtains, alters, damages, destroys, or discloses information, or prevents authorized use of information on the computer system, may be subject to administrative penalties, fines or imprisonment.
          </p>
        </div>

        <div className="relative mt-10 auth-imgs">
          <Image
            src="/img1.PNG"
            alt="Frame Image"
            width={420}
            height={300}
            className="rounded-lg"
          />

          <Image
            src="/img2.PNG"
            alt="Image"
            width={150}
            height={120}
            className="absolute top-10 right-20 position1 rightmin"
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center px-6">
        <div className="w-full max-w-md">

          {/* Logo */}
          <div className="text-center mb-6">
            <Image
              src="/BlueConnectsLogo.png"
              alt="Logo"
              width={190}
              height={60}
              className="mx-auto"
            />
          </div>

          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold text-gray-800">
              Welcome To BlueConnects
            </h2>
            <p className="text-gray-500 text-sm">
              Sign in to access your secure dashboard.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">

            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Remember / Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600"
                />
                Remember Me
              </label>
              <a href="#" className="text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Button */}
             <Link href={"/dashboard"}>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition">
              Login
            </button>
            </Link>

          </form>
        </div>
      </div>
    </div>
  )
}
