import * as React from 'react';

import BackgroundSVG from './../assets/bg.svg';
import StrokeSVG from './../assets/stroke.svg';

const RightPattern = ({ className }: { className?: string }) => (
  <div
    style={{
      width: 400,
      height: 400,
      backgroundImage:
        'radial-gradient(circle at 8px 8px, #312e81 4px, transparent 0)',
      backgroundSize: '40px 40px',
      opacity: 0.8,
    }}
    className={className}
  ></div>
);

const LeftPattern = ({ className }: { className?: string }) => (
  <div
    style={{
      width: 360,
      height: 360,
      backgroundImage:
        'radial-gradient(circle at 8px 8px, #312e81 2px, transparent 0)',
      backgroundSize: '36px 36px',
      opacity: 0.4,
    }}
    className={className}
  ></div>
);

const Stroke = ({ className }: { className?: string }) => (
  <img className={className} src={StrokeSVG} />
);

export function Hero({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative w-full h-full overflow-x-hidden">
      {/* Background */}
      <img
        className="absolute w-full h-full object-cover"
        src={BackgroundSVG}
      />
      <LeftPattern className="hidden md:block absolute top-64 left-0 -translate-y-1/2 -translate-x-3/4 transform" />

      <Stroke className="absolute object-cover top-0 h-full  md:right-0" />

      <RightPattern className="hidden sm:block absolute top-64 right-0 translate-x-3/4 lg:translate-x-32 transform" />

      {/* Foreground */}
      <div className="absolute inset-0">{children}</div>
    </div>
  );
}
