import React from "react";

type VideoSource = {
  src: string;
  type: string;
};

type TextWithVideoProps = {
  title: string;
  sources: VideoSource[];
  poster?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  controls?: boolean;
  children?: React.ReactNode;
};

const TextWithVideo: React.FC<TextWithVideoProps> = ({
  title,
  sources,
  poster,
  autoPlay = false,
  muted = false,
  loop = false,
  playsInline = false,
  controls = true,
  children,
}) => {
  return (
    <section className="py-10 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-6 pb-8">
          <h2 className="text-5xl font-bold text-foreground">{title}</h2>
          <div data-name="slot">{children}</div>
        </div>

        <video
          className="w-full rounded-2xl shadow-lg"
          poster={poster}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          controls={controls}
        >
          {sources.map((source, index) => (
            <source key={index} src={source.src} type={source.type} />
          ))}
          Ваш браузер не поддерживает видео тег.
        </video>
      </div>
    </section>
  );
};

export default TextWithVideo;
