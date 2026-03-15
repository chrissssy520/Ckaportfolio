"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <>
      <style>{`
        .ck-wrapper {
          width: 200px;
          height: 60px;
          position: relative;
          z-index: 1;
        }
        .ck-circle {
          width: 20px;
          height: 20px;
          position: absolute;
          border-radius: 50%;
          background-color: #00d4a8;
          left: 15%;
          transform-origin: 50%;
          animation: ckCircle .5s alternate infinite ease;
        }
        .ck-circle:nth-child(2) { left: 45%; animation-delay: .2s; }
        .ck-circle:nth-child(3) { left: auto; right: 15%; animation-delay: .3s; }
        .ck-shadow {
          width: 20px;
          height: 4px;
          border-radius: 50%;
          background-color: rgba(0,0,0,0.5);
          position: absolute;
          top: 62px;
          left: 15%;
          transform-origin: 50%;
          z-index: -1;
          filter: blur(1px);
          animation: ckShadow .5s alternate infinite ease;
        }
        .ck-shadow:nth-child(4) { left: 45%; animation-delay: .2s; }
        .ck-shadow:nth-child(5) { left: auto; right: 15%; animation-delay: .3s; }
        @keyframes ckCircle {
          0% { top: 60px; height: 5px; border-radius: 50px 50px 25px 25px; transform: scaleX(1.7); }
          40% { height: 20px; border-radius: 50%; transform: scaleX(1); }
          100% { top: 0%; }
        }
        @keyframes ckShadow {
          0% { transform: scaleX(1.5); }
          40% { transform: scaleX(1); opacity: .7; }
          100% { transform: scaleX(.2); opacity: .4; }
        }
      `}</style>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0A1A2F]">
        <div className="ck-wrapper">
          <div className="ck-circle"></div>
          <div className="ck-circle"></div>
          <div className="ck-circle"></div>
          <div className="ck-shadow"></div>
          <div className="ck-shadow"></div>
          <div className="ck-shadow"></div>
        </div>
      </div>
    </>
  );
}