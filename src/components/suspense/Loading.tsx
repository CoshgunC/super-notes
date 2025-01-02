"use client"

export const Loading = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        {/* Logo or title skeleton */}
        <div className="w-3/4 h-8 mb-8 bg-gray-300 rounded animate-pulse mx-auto"></div>

        {/* Name input skeleton */}
        <div className="mb-4">
          <div className="w-1/4 h-4 mb-2 bg-gray-300 rounded animate-pulse"></div>
          <div className="w-full h-10 bg-gray-300 rounded animate-pulse"></div>
        </div>

        {/* Email input skeleton */}
        <div className="mb-4">
          <div className="w-1/4 h-4 mb-2 bg-gray-300 rounded animate-pulse"></div>
          <div className="w-full h-10 bg-gray-300 rounded animate-pulse"></div>
        </div>

        {/* Password input skeleton */}
        <div className="mb-6">
          <div className="w-1/4 h-4 mb-2 bg-gray-300 rounded animate-pulse"></div>
          <div className="w-full h-10 bg-gray-300 rounded animate-pulse"></div>
        </div>

        {/* Submit button skeleton */}
        <div className="w-full h-12 bg-blue-300 rounded animate-pulse mb-4"></div>

        {/* "Or" divider skeleton */}
        <div className="flex items-center mb-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <div className="mx-4 text-gray-500">Or</div>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Sign up with Google button skeleton */}
        <div className="w-full h-12 bg-gray-300 rounded animate-pulse"></div>
      </div>
    </div>
  )
}

