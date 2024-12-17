'use client';
import { adjustTheme } from '@/utils/adjust-theme';

export default function Home() {
  return (
    <div>
      <div
        onClick={() => {
          adjustTheme('dark');
        }}
      >
        dark
      </div>
      <div
        onClick={() => {
          adjustTheme('light');
        }}
      >
        light
      </div>
      <div
        onClick={() => {
          adjustTheme();
        }}
      >
        default
      </div>
    </div>
  );
}
