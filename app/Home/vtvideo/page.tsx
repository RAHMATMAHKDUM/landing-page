"use client"
import React, { useState } from 'react'
import { CheckCircle2, Play } from 'lucide-react'

function Page() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-4 border border-gray-300 relative overflow-hidden group">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-gray-200 rounded-tl-2xl group-hover:border-gray-300 transition-colors"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-gray-200 rounded-br-2xl group-hover:border-gray-300 transition-colors"></div>
            
            {/* Animated glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-gray-100 to-transparent animate-shimmer"></div>
            </div>
            
            <div className="flex gap-2 mb-4 px-3 relative z-10">
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 shadow-inner"></div>
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 shadow-inner"></div>
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 shadow-inner"></div>
            </div>

            <div
              className="bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 h-[550px] rounded-xl flex items-center justify-center overflow-hidden relative cursor-pointer group/video shadow-inner border border-gray-200"
              onClick={() => setOpen(true)}
            >
              <video
                src="/vtview.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-xl shadow-md group-hover/video:scale-110 transition-all duration-700"
              />

              {/* Quality badges */}
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="bg-gray-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-gray-700">
                  HD
                </div>
                <div className="bg-white/80 backdrop-blur-md text-gray-900 text-xs font-bold px-3 py-1 rounded-full border border-gray-200">
                  Responsive
                </div>
              </div>
              
              {/* Hover overlay with play button */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 opacity-0 group-hover/video:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="transform translate-y-4 group-hover/video:translate-y-0 opacity-0 group-hover/video:opacity-100 transition-all duration-300">
                  <div className="bg-gray-900/90 backdrop-blur-md text-white px-8 py-4 rounded-2xl shadow-2xl border border-gray-700 flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-gray-900 ml-1" fill="currentColor" />
                    </div>
                    <span className="font-semibold text-lg">Klik untuk Perbesar</span>
                  </div>
                </div>
              </div>

              {/* Corner indicators */}
              <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-white/50 rounded-tl-lg"></div>
              <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-white/50 rounded-tr-lg"></div>
              <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-white/50 rounded-bl-lg"></div>
              <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-white/50 rounded-br-lg"></div>
            </div>

          </div>

          {/* Modal */}
          {open && (
            <div
              className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn"
              onClick={() => setOpen(false)}
            >
              <div
                className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden relative max-w-4xl w-[90%] shadow-2xl border border-gray-700 transform scale-95 animate-scaleIn"
                onClick={(e) => e.stopPropagation()}
              >
                <video
                  src="/vtview.mp4"
                  autoPlay
                  loop
                  controls
                  className="w-full h-auto"
                />
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200 border border-white/20 hover:border-white/40 shadow-lg font-bold text-xl hover:rotate-90 transform"
                >
                  ✕
                </button>
                
                {/* Modal header */}
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-lg border border-white/20">
                  <span className="text-sm font-semibold">Preview Mode</span>
                </div>
              </div>
            </div>
          )}
        </div>
    </div>
  )
}

export default Page