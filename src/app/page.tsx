import ScrollSequence from '@/components/ScrollSequence';

export default function Home() {
  return (
    <main>
      <ScrollSequence />
      <div className="h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-2xl px-4">
            <h2 className="text-4xl md:text-6xl font-bold text-white/90">The Next Chapter</h2>
            <p className="mt-4 text-lg md:text-xl text-white/60">The scroll sequence is complete. You can add more content to your page below it to continue the story.</p>
        </div>
      </div>
    </main>
  );
}
