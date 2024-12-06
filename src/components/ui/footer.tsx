import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-0">
          <Image
            src="/media/final-logo-03.png"
            alt="Arup Datta Architect"
            width={180}
            height={45}
            style={{ position: 'relative', top: '20px', right: '30px' }}
          />
          <div className="mr-20">
          <div className="mr-20">
          <div className="mr-20">
          <div className="flex flex-col justify-between items-start gap-1 mr-8 mt-8">
          <div className="text-sm text-slate-700">
            © 2024 ARUP DATTA ARCHITECT All Rights Reserved
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-bold text-slate-700 hover:text-slate-400">
              About us
            </Link>
            <Link href="#" className="text-sm font-bold text-slate-700 hover:text-slate-400">
              Our Founder
            </Link>
            <Link href="#" className="text-sm font-bold text-slate-700 hover:text-slate-400">
              Services
            </Link>
            <Link href="#" className="text-sm font-bold text-slate-700 hover:text-slate-400">
              Portafolio
            </Link>
            <Link href="#" className="text-sm font-bold text-slate-700 hover:text-slate-400">
              Global recognition and sustainability
            </Link>
            <Link href="#" className="text-sm font-bold text-slate-700 hover:text-slate-400">
              Careers
            </Link>
            <Link href="#" className="text-sm font-bold text-slate-700 hover:text-slate-400">
              Contact us
            </Link>
          </div>
          </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
