"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface VideoInputProps {
  onSubmit: (videoId: string) => void
}

export default function VideoInput({ onSubmit }: VideoInputProps) {
  const [input, setInput] = useState("")
  const [previewId, setPreviewId] = useState<string | null>(null)

  const extractVideoId = (url: string) => {
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/)
    return match ? match[1] : null
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const videoId = extractVideoId(input)
    if (videoId) {
      onSubmit(videoId)
      setInput("")
      setPreviewId(null)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
    const videoId = extractVideoId(e.target.value)
    setPreviewId(videoId)
  }

  return (
    <div className="mb-6">
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <Input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter YouTube video URL"
          className="flex-grow"
        />
        <Button type="submit">Add to Queue</Button>
      </form>
      {previewId && (
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${previewId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  )
}
