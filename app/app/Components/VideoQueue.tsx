"use client"
import { ThumbsUp, ThumbsDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Video {
  id: string
  votes: number
  title: string
}

interface VideoQueueProps {
  queue: Video[]
  updateVotes: (index: number, increment: number) => void
}

export default function VideoQueue({ queue, updateVotes }: VideoQueueProps) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Upcoming Videos</h2>
      {queue.length === 0 ? (
        <p>No videos in the queue</p>
      ) : (
        <ul className="space-y-4">
          {queue.map((video, index) => (
            <li key={video.id} className="flex items-center gap-4 bg-white p-3 rounded-md shadow">
              <img
                src={`https://img.youtube.com/vi/${video.id}/default.jpg`}
                alt="Video thumbnail"
                className="w-24 h-18 object-cover rounded"
              />
              <div className="flex-grow">
                <h3 className="font-semibold">{video.title}</h3>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => updateVotes(index, 1)}
                  className="text-green-600 hover:text-green-700"
                >
                  <ThumbsUp className="w-4 h-4 mr-1" />
                  <span>{video.votes}</span>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => updateVotes(index, -1)}
                  className="text-red-600 hover:text-red-700"
                >
                  <ThumbsDown className="w-4 h-4" />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

