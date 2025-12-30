

export default function AIWelcome({ userName }: { userName: string }) {
  return (
    <div className="mt-24 text-center">
      <h1 className="text-3xl font-semibold text-gray-900">
        Hi {userName}, what&apos;s on your mind today?
      </h1>
    </div>
  )
}
