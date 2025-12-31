import React, { useState, useRef } from 'react';
import { FiVolume2, FiVolumeX, FiPlay, FiPause } from 'react-icons/fi';
import ScrollReveal from '../components/ScrollReveal';

const SummitHero = () => {
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef(null);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className="bg-transparent pt-32 pb-24 px-8 flex flex-col items-center relative overflow-hidden">


            <div className="relative z-10 flex flex-col items-center w-full">
                {/* Minimalist Header */}
                <ScrollReveal>
                    <div className="text-center mb-8">
                        <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-400 mb-1">Take a look into</p>
                        <h1 className="text-9xl font-black text-[var(--color-nuimpact-dark-blue)] tracking-tighter">NUSIS</h1>
                    </div>
                </ScrollReveal>

                {/* Video Container */}
                <div className="w-full max-w-2xl aspect-video rounded-3xl overflow-hidden shadow-2xl relative group bg-gray-100 mb-12">
                    {/* Local Video */}
                    <video
                        ref={videoRef}
                        autoPlay
                        loop
                        muted={isMuted}
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/assets/videos/nusis.mp4" type="video/mp4" />
                    </video>

                    {/* Controls Container */}
                    <div className="absolute top-4 right-4 z-20 flex gap-2">
                        {/* Play/Pause Toggle */}
                        <button
                            onClick={togglePlay}
                            className="p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-black/70 transition-all border border-white/20 active:scale-90"
                            title={isPlaying ? "Pause" : "Play"}
                        >
                            {isPlaying ? <FiPause size={20} /> : <FiPlay size={20} />}
                        </button>

                        {/* Mute Toggle */}
                        <button
                            onClick={toggleMute}
                            className="p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-black/70 transition-all border border-white/20 active:scale-90"
                            title={isMuted ? "Unmute" : "Mute"}
                        >
                            {isMuted ? <FiVolumeX size={20} /> : <FiVolume2 size={20} />}
                        </button>
                    </div>
                </div>

                <ScrollReveal delay={0.2}>
                    <p className="text-xl font-medium text-gray-500 uppercase tracking-widest text-center">
                        Northeastern University Sustainable Investing Summit
                    </p>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default SummitHero;
