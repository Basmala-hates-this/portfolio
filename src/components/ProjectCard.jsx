import ScreenshotSlider from './ScreenshotSlider'

export default function ProjectCard({ name, blurb, tech, status, repo, liveLink, image, images, features }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 border border-gray-200 rounded-lg p-5">
      <div className="sm:w-2/5 shrink-0">
        {images && images.length > 0 ? (
          <ScreenshotSlider images={images} />
        ) : image ? (
          <img
            src={image}
            alt={name}
            className="w-full rounded-md object-cover"
          />
        ) : null}
      </div>

      <div className="flex-1">
        <h4 className="text-lg font-semibold">{name}</h4>
        <p className="text-gray-500 mt-1">{blurb}</p>

        {features && features.length > 0 && (
          <ul className="list-disc list-inside text-sm text-gray-500 mt-2 space-y-1">
            {features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        )}

        <p className="text-sm text-gray-400 mt-2">{tech}</p>
        {status && <p className="text-sm text-gray-400 italic mt-1">{status}</p>}
        <div className="flex gap-3 mt-2">
          {repo && <a href={repo} className="underline text-blue-600 text-sm">GitHub</a>}
          {liveLink && <a href={liveLink} className="underline text-blue-600 text-sm">Live</a>}
        </div>
      </div>
    </div>
  )
}