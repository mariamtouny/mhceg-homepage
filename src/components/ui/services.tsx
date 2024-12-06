import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight} from 'lucide-react'


const ServicesSection: React.FC = () => {
  return (
    <section className="bg-custom-blue py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-start items-center mb-12">
          <h2 className="text-5xl font-bold text-white">SERVICES</h2>
          <Button variant="ghost" className="text-white transform transition-transform hover:translate-x-1">
            <ArrowRight className="h-9 w-9" />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            
            <Card className="bg-slate-600 border-transparent h-[300px] w-[300px] overflow-hidden group rounded-none transform transition-transform duration-500 hover:scale-[1.025]">
              <CardContent className="p-0 relative aspect-square">
                <Image
                  src="/media/urban.png"
                  alt={"urban planning"}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full  transition-transform duration-300"
                />
                <div className=" absolute inset-0 bg-custom-blue flex flex-col justify-end p-6" style={{
                background: 'linear-gradient(to bottom, rgba(64, 94, 112, 0) 50%, rgba(64, 94, 112, 1) 100%)',}}> 
                  <h3 className="text-base font-bold text-white">MASTER & URBAN PLANNING</h3>
                  <div className="text-xs  text-white">LEARN MORE</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-600 border-transparent h-[300px] w-[300px] overflow-hidden group rounded-none transform transition-transform duration-500 hover:scale-[1.025]">
              <CardContent className="p-0 relative aspect-square">
                <Image
                  src="/media/interior.png"
                  alt={"urban planning"}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full  transition-transform duration-300"
                />
                <div className=" absolute inset-0 bg-custom-blue flex flex-col justify-end p-6" style={{
                background: 'linear-gradient(to bottom, rgba(64, 94, 112, 0) 50%, rgba(64, 94, 112, 1) 100%)',}}> 
                  <h3 className="text-base font-bold text-white">INTERIOR DESIGN</h3>
                  <div className="text-xs  text-white">LEARN MORE</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-600 border-transparent h-[300px] w-[300px] overflow-hidden group rounded-none transform transition-transform duration-500 hover:scale-[1.025]">
              <CardContent className="p-0 relative aspect-square">
                <Image
                  src="/media/residential.png"
                  alt={"urban planning"}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full  transition-transform duration-300"
                />
                <div className=" absolute inset-0 bg-custom-blue flex flex-col justify-end p-6" style={{
                background: 'linear-gradient(to bottom, rgba(64, 94, 112, 0) 50%, rgba(64, 94, 112, 1) 100%)',}}> 
                  <h3 className="text-base font-bold text-white">RESIDENTIAL</h3>
                  <div className="text-xs  text-white">LEARN MORE</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-600 border-transparent h-[300px] w-[300px] overflow-hidden group rounded-none transform transition-transform duration-500 hover:scale-[1.025]">
              <CardContent className="p-0 relative aspect-square">
                <Image
                  src="/media/commercial.png"
                  alt={"urban planning"}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full  transition-transform duration-300"
                />
                <div className=" absolute inset-0 bg-custom-blue flex flex-col justify-end p-6" style={{
                background: 'linear-gradient(to bottom, rgba(64, 94, 112, 0) 50%, rgba(64, 94, 112, 1) 100%)',}}> 
                  <h3 className="text-base font-bold text-white">COMMERCIAL</h3>
                  <div className="text-xs  text-white">LEARN MORE</div>
                </div>
              </CardContent>
            </Card> 

            <Card className="bg-slate-600 border-transparent h-[300px] w-[300px] overflow-hidden group rounded-none transform transition-transform duration-500 hover:scale-[1.025]">
              <CardContent className="p-0 relative aspect-square">
                <Image
                  src="/media/administrative.png"
                  alt={"urban planning"}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full  transition-transform duration-300"
                />
                <div className=" absolute inset-0 bg-custom-blue flex flex-col justify-end p-6" style={{
                background: 'linear-gradient(to bottom, rgba(64, 94, 112, 0) 50%, rgba(64, 94, 112, 1) 100%)',}}> 
                  <h3 className="text-base font-bold text-white">ADMINISTRATIVE</h3>
                  <div className="text-xs  text-white">LEARN MORE</div>
                </div>
              </CardContent>
            </Card> 

            <Card className="bg-slate-600 border-transparent h-[300px] w-[300px] overflow-hidden group rounded-none transform transition-transform duration-500 hover:scale-[1.025]">
              <CardContent className="p-0 relative aspect-square">
                <Image
                  src="/media/healthcare.png"
                  alt={"urban planning"}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full  transition-transform duration-300"
                />
                <div className=" absolute inset-0 bg-custom-blue flex flex-col justify-end p-6" style={{
                background: 'linear-gradient(to bottom, rgba(64, 94, 112, 0) 50%, rgba(64, 94, 112, 1) 100%)',}}> 
                  <h3 className="text-base font-bold text-white">HEALTH CARE</h3>
                  <div className="text-xs  text-white">LEARN MORE</div>
                </div>
              </CardContent>
            </Card> 

            <Card className="bg-slate-600 border-transparent h-[300px] w-[300px] overflow-hidden group rounded-none transform transition-transform duration-500 hover:scale-[1.025]">
              <CardContent className="p-0 relative aspect-square">
                <Image
                  src="/media/culture.png"
                  alt={"urban planning"}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full  transition-transform duration-300"
                />
                <div className=" absolute inset-0 bg-custom-blue flex flex-col justify-end p-6" style={{
                background: 'linear-gradient(to bottom, rgba(64, 94, 112, 0) 50%, rgba(64, 94, 112, 1) 100%)',}}> 
                  <h3 className="text-base font-bold text-white">CULTURAL BUILDINGS</h3>
                  <div className="text-xs  text-white">LEARN MORE</div>
                </div>
              </CardContent>
            </Card> 

            <Card className="bg-slate-600 border-transparent h-[300px] w-[300px] overflow-hidden group rounded-none transform transition-transform duration-500 hover:scale-[1.025]">
              <CardContent className="p-0 relative aspect-square">
                <Image
                  src="/media/theme.png"
                  alt={"urban planning"}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full  transition-transform duration-300"
                />
                <div className=" absolute inset-0 bg-custom-blue flex flex-col justify-end p-6" style={{
                background: 'linear-gradient(to bottom, rgba(64, 94, 112, 0) 50%, rgba(64, 94, 112, 1) 100%)',}}> 
                  <h3 className="text-base font-bold text-white">THEME PARK</h3>
                  <div className="text-xs  text-white">LEARN MORE</div>
                </div>
              </CardContent>
            </Card> 

            <Card className="bg-slate-600 border-transparent h-[300px] w-[300px] overflow-hidden group rounded-none transform transition-transform duration-500 hover:scale-[1.025]">
              <CardContent className="p-0 relative aspect-square">
                <Image
                  src="/media/set.png"
                  alt={"urban planning"}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full  transition-transform duration-300"
                />
                <div className=" absolute inset-0 bg-custom-blue flex flex-col justify-end p-6" style={{
                background: 'linear-gradient(to bottom, rgba(64, 94, 112, 0) 50%, rgba(64, 94, 112, 1) 100%)',}}> 
                  <h3 className="text-base font-bold text-white">SET DESIGNS</h3>
                  <div className="text-xs  text-white">LEARN MORE</div>
                </div>
              </CardContent>
            </Card> 

            <Card className="bg-slate-600 border-transparent h-[300px] w-[300px] overflow-hidden group rounded-none transform transition-transform duration-500 hover:scale-[1.025]">
              <CardContent className="p-0 relative aspect-square">
                <Image
                  src="/media/water.png"
                  alt={"urban planning"}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full  transition-transform duration-300"
                />
                <div className=" absolute inset-0 bg-custom-blue flex flex-col justify-end p-6" style={{
                background: 'linear-gradient(to bottom, rgba(64, 94, 112, 0) 50%, rgba(64, 94, 112, 1) 100%)',}}> 
                  <h3 className="text-base font-bold text-white">WATER FEATURES</h3>
                  <div className="text-xs  text-white">LEARN MORE</div>
                </div>
              </CardContent>
            </Card> 

            <Card className="bg-slate-600 border-transparent h-[300px] w-[300px] overflow-hidden group rounded-none transform transition-transform duration-500 hover:scale-[1.025]">
              <CardContent className="p-0 relative aspect-square">
                <Image
                  src="/media/booklet.png"
                  alt={"urban planning"}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full  transition-transform duration-300"
                />
                <div className=" absolute inset-0 bg-custom-blue flex flex-col justify-end p-6" style={{
                background: 'linear-gradient(to bottom, rgba(64, 94, 112, 0) 50%, rgba(64, 94, 112, 1) 100%)',}}> 
                  <h3 className="text-base font-bold text-white">BUILDING BOOKLET & PERMITS</h3>
                  <div className="text-xs  text-white">LEARN MORE</div>
                </div>
              </CardContent>
            </Card>     
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
