import { useState } from 'react'

export default function ScreenshotSlider({ images }) {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((i) => (i + 1) % images.length)
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length)

  return (
    <div className="relative w-full mb-3">
      <img
        src={images[index]}
        alt={`Screenshot ${index + 1}`}
        className="w-full rounded-lg shadow-md"
      />
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-8 h-8"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-8 h-8"
      >
        ›
      </button>
      <div className="flex justify-center gap-1 mt-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full ${i === index ? 'bg-gray-700' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  )
}