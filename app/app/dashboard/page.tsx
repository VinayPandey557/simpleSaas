
"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ThumbsUp, ThumbsDown, Play } from "lucide-react"

interface Song {
  id: string
  title: string
  upvotes: number
  downvotes: number
  thumbnail: string
}

export default function Dashboard() {
  const [youtubeLink, setYoutubeLink] = useState("")
  const [songs, setSongs] = useState<Song[]>([
    {
      id: "1",
      title: "Awesome Song 1",
      upvotes: 5,
      downvotes: 1,
      thumbnail:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-01%20223506-q8ihDNzVsOYV0NuKLnWjzK5o9lAmul.png",
    },
    {
      id: "2",
      title: "Cool Music Video",
      upvotes: 3,
      downvotes: 0,
      thumbnail:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-01%20223506-q8ihDNzVsOYV0NuKLnWjzK5o9lAmul.png",
    },
    {
      id: "3",
      title: "Top Hit 2023",
      upvotes: 2,
      downvotes: 1,
      thumbnail:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-01%20223506-q8ihDNzVsOYV0NuKLnWjzK5o9lAmul.png",
    },
  ])

  return (
    <div className="min-h-screen bg-[#13111C] text-white p-4 max-w-2xl mx-auto">
      <div className="space-y-2 mb-6">
        <Input
          value={youtubeLink}
          onChange={(e) => setYoutubeLink(e.target.value)}
          placeholder="Paste YouTube link here"
          className="bg-[#1E1B2C] border-none text-white placeholder:text-gray-400 h-12"
        />
        <Button className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white h-12 rounded-md">Add to Queue</Button>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-4">Upcoming Songs</h2>
          <div className="space-y-2">
            {songs.map((song) => (
              <div
                key={song.id}
                className="flex items-center gap-3 bg-[#1E1B2C] p-3 rounded-lg hover:bg-[#2D2640] transition-colors"
              >
                <div className="w-16 h-16 bg-[#2D2640] rounded flex-shrink-0" />
                <div className="flex-grow">
                  <h3 className="font-medium">{song.title}</h3>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1 text-sm text-gray-400">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{song.upvotes}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-400">
                      <ThumbsDown className="w-4 h-4" />
                      <span>{song.downvotes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Now Playing</h2>
          <div className="bg-[#1E1B2C] rounded-lg p-4 text-center aspect-video flex items-center justify-center text-gray-400">
            No video playing
          </div>
          <Button className="w-full mt-4 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white h-12 rounded-md">
            <Play className="w-4 h-4 mr-2" />
            Play Next
          </Button>
        </div>
      </div>
    </div>
  )
}


   