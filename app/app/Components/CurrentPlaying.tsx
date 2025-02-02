interface Video {
    id: string
    votes: number
    title: string
  }
  
  interface CurrentlyPlayingProps {
    video: Video | null
    onEnd: () => void
  }
  
  export default function CurrentlyPlaying({ video, onEnd }: CurrentlyPlayingProps) {
    return (
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Currently Playing</h2>
        {video ? (
          <div>
            <h3 className="text-lg font-medium mb-2">{video.title}</h3>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${video.id}?autoplay=1&enablejsapi=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onEnded={onEnd}
              ></iframe>
            </div>
          </div>
        ) : (
          <p className="text-gray-600">No video currently playing</p>
        )}
      </div>
    )
  }
  