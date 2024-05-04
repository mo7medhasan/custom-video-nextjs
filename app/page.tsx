
import MinitteVideoPlayer from "@/app/components/MinitteVideoPlayer"; 


export const Video1 = "https://i.imgur.com/OUQxmhp.mp4";
export const Video2 = "https://i.imgur.com/msJPshw.mp4";
export const Video3 = "https://www.w3schools.com/tags/mov_bbb.mp4";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">


<MinitteVideoPlayer src={"/test.mp4"} />
    </main>
  );
}
