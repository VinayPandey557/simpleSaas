import { prismaClient } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

//@ts-ignore
import youtubesearchapi from "youtube-search-api";
var YT_REGEX = /^(?:(?:https?:)?\/\/)?(?:www\.)?(?:m\.)?(?:youtu(?:be)?\.com\/(?:v\/|embed\/|watch(?:\/|\?v=))|youtu\.be\/)((?:\w|-){11})(?:\S+)?$/;




const createStreamSchema = z.object({
    creatorId: z.string(),
    url: z.string()
})

export async function POST(req: NextRequest) {
  try {
    const data = createStreamSchema.parse(await req.json())
    const isYt =data.url.match(YT_REGEX)
    if(!isYt) {
        return NextResponse.json({
            message: "Wrong URL format"
        }, {
            status: 411
        })
    }

    const extractedId = data.url.split("?v=")[1];

    const response = await youtubesearchapi.GetVideoDetails(extractedId);
    const thumbnails = response.thumbnail.thumbnails;
    thumbnails.sort((a: {width: number}, b: {width: number}) => a.width < b.width ? -1 : 1)
    
    const stream = await prismaClient.stream.create({
       data: {
          userId: data.creatorId,
          url: data.url,
          extractedId,
          type: "Youtube",
          title: response.title ?? "Can't find video",
          smallImg: (thumbnails.length > 1 ? thumbnails[thumbnails.length - 2].url: thumbnails[thumbnails.length -1].url) ??
           "https://media.istockphoto.com/id/2026155202/photo/a-tricolor-mixed-breed-dog-listening-intently-with-a-foggy-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=IzrfK-7Xm9LVFGNPpnj6uwQR2b5xYjEnfVMGrwJrAO4=",
           bigImage: thumbnails[thumbnails.length -1].url ?? "https://media.istockphoto.com/id/2026155202/photo/a-tricolor-mixed-breed-dog-listening-intently-with-a-foggy-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=IzrfK-7Xm9LVFGNPpnj6uwQR2b5xYjEnfVMGrwJrAO4="
       }
    });
    return NextResponse.json({
        message: "Added Stream",
        id: stream.id
    })
  } catch(e) {
    return NextResponse.json({
        message: "Error while adding a stream"
    }, {
        status:411
    })
  }


}


export async function GET(req: NextRequest) {
  const creatorId = req.nextUrl.searchParams.get("creatorId");
  const streams = await prismaClient.stream.findMany({
      where: {
          userId : creatorId ?? ""
      }
  })

  return NextResponse.json({
      streams
  })
}