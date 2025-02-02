import Image from "next/image";
import { Appbar } from "./Components/Appbar"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Music, Play, Users, Zap, Radio, Heart } from "lucide-react"
import { Redirect } from "./Components/Redirect";


 

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-purple- dark:bg-gray-900 text-gray-900 dark:text-gray-100">
     <div>
     <Appbar />
     <Redirect />
     </div>
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-200 dark:border-gray-800">
        <Link className="flex items-center justify-center" href="#">
          <Music className="h-6 w-6 text-primary" />
          <span className="ml-2 text-2xl font-bold">FanTune</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Let Your Fans Choose the Beat
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  FanTune revolutionizes music streaming by putting the power in your fans' hands. Create unforgettable
                  streams where your audience shapes the playlist.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
                <Play className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Live Streaming</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300 text-center">
                  Stream your music live and interact with your fans in real-time.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Fan Interaction</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300 text-center">
                  Let your fans vote on the next song, creating an interactive experience.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
                <Zap className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Real-time Analytics</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300 text-center">
                  Get instant feedback on your audience's preferences and engagement.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <div className="bg-primary text-primary-foreground rounded-full p-3 w-12 h-12 flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold">Create Your Stream</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Set up your streaming session and customize your playlist options.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <div className="bg-primary text-primary-foreground rounded-full p-3 w-12 h-12 flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold">Invite Your Fans</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Share your unique stream link with your audience on social media.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <div className="bg-primary text-primary-foreground rounded-full p-3 w-12 h-12 flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold">Let Fans Choose</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Your fans vote on songs, shaping the playlist in real-time.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Creators Say</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
                <Radio className="h-12 w-12 text-primary" />
                <p className="text-sm text-gray-500 dark:text-gray-300 text-center">
                  "FanTune has transformed my streaming experience. My fans love being part of the music selection
                  process!"
                </p>
                <p className="font-bold">- DJ Harmony</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
                <Heart className="h-12 w-12 text-primary" />
                <p className="text-sm text-gray-500 dark:text-gray-300 text-center">
                  "The engagement levels on my streams have skyrocketed since I started using FanTune. It's a
                  game-changer!"
                </p>
                <p className="font-bold">- Melody Maker</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
                <Music className="h-12 w-12 text-primary" />
                <p className="text-sm text-gray-500 dark:text-gray-300 text-center">
                  "I've discovered so much about my audience's tastes. FanTune is not just a platform, it's a powerful
                  tool for artists."
                </p>
                <p className="font-bold">- Rhythm Master</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Revolutionize Your Streams?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join FanTune today and start creating unforgettable, interactive music experiences for your fans.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-white dark:bg-gray-800"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Sign Up</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200 dark:border-gray-800">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 FanTune. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

