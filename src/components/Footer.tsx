import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-auto pt-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end pb-8 border-t border-black text-[10px] font-mono opacity-40 uppercase pt-4 gap-4">
        <div>BASED IN THANE, INDIA — GLOBAL REACH</div>
        <div>© {new Date().getFullYear()} MR. BLACK & WHITE DESIGN STUDIO. ALL RIGHTS RESERVED.</div>
      </div>
    </footer>
  );
}
