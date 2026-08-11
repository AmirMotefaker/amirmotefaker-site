"use client";

export default function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="h-[420px] w-[420px] rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 p-[2px] shadow-2xl">
        <div className="flex h-full w-full items-center justify-center rounded-3xl bg-black/90">
          <div className="text-center text-white">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">
              AI Founder
            </p>
            <h3 className="mt-4 text-3xl font-bold">
              Amir Motefaker
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
