import type { ReactNode } from "react"

const TitleWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="text-3xl font-extrabold mb-6 text-gray-900 flex items-center">
      { children }
    </h1>
  )
}

export default TitleWrapper;