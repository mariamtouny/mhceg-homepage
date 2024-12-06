import { Menu } from 'lucide-react';
import Image from "next/image"
import { HiMenuAlt3 } from "react-icons/hi";
import { Button } from "@/components/ui/button"
import next from 'next';

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 w-full z-10 bg-transparent">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Image
          src="/media/png-logo-03.png"
          alt="Arup Datta Architect"
          width={375}
          height={100}
          style={{ position: 'relative', bottom: '120px', right: '100px' }}
        />
        <Button variant= "ghost" size="icon" className="text-white" style={{ position: 'relative', bottom: '130px', left: '30px' }}>
          <HiMenuAlt3 className="h-7 w-7" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
