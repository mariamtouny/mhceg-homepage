import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button";

const AwardsSection: React.FC = () => {
  return (
    <section className="bg-custom-blue py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-start items-center mb-12">
          <h2 className="text-5xl font-bold text-white">AWARDS</h2>
          <Button variant="ghost" className="text-white transform transition-transform hover:translate-x-1">
            <ArrowRight className="h-9 w-9" />
          </Button>
        </div>
        <Carousel className="w-full">
          <CarouselContent>

              <CarouselItem key={1} className="md:basis-1/3 mt-[50px]">
                <Card className="bg-transparent border-transparent overflow-hidden group h-[500px] w-[400px]">
                  <CardContent className="p-0">
                    <Image
                      src="/media/oceania.png"
                      alt={`OSHEANA CONDOMINIUMS`}
                      width={400}
                      height={100}
                      className="object-cover w-full h-full aspect-[5/3]"
                    />
                    <div className="p-6 flex-col justify-start">
                      <h3 className="text-lg font-bold text-white mb-2">OSHEANA CONDOMINIUMS</h3>
                      <h3 className="text-sm text-white">Edmonton, AB</h3>
                      <p className="text-sm text-white">2006</p>
                      <p className="text-sm text-white mt-2">Won SAM Awards under 2 categories for Suite Design Types</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem key={2} className="md:basis-1/3 mt-[50px]">
                <Card className="bg-transparent border-transparent h-[500px] w-[400px]">
                  <CardContent className="p-0">
                    <Image
                      src="/media/mckinnon.png"
                      alt={`MACKINNON ESTATES`}
                      width={400}
                      height={100}
                      className="object-cover w-full aspect-[5/3]"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white mb-2">MACKINNON ESTATES</h3>
                      <h2 className="text-sm text-white">Edmonton, AB</h2>
                      <p className="text-sm text-white">2011</p>
                      <p className="text-sm text-white mt-2">Won the SAM Awards Finalist Town House Category</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem key={3} className="md:basis-1/3 mt-[50px]">
                <Card className="bg-transparent border-transparent h-[500px] w-[400px]">
                  <CardContent className="p-0">
                    <Image
                      src="/media/lexus.png"
                      alt={`LEXUS`}
                      width={400}
                      height={100}
                      className="object-cover w-full aspect-[5/3]"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white mb-2">LEXUS</h3>
                      <h2 className="text-sm text-white">Edmonton, AB</h2>
                      <p className="text-sm text-white">2014 - 2015</p>
                      <p className="text-sm text-white mt-2">Won the American Property Awards Canadas</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem key={4} className="md:basis-1/3 mt-[50px]">
                <Card className="bg-transparent border-transparent h-[500px] w-[400px]">
                  <CardContent className="p-0">
                    <Image
                      src="/media/mckinnon.png"
                      alt={`CALLAGHAN RAVINES`}
                      width={400}
                      height={100}
                      className="object-cover w-full aspect-[5/3]"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white mb-2">CALLAGHAN RAVINES</h3>
                      <h2 className="text-sm text-white">Edmonton, AB</h2>
                      <p className="text-sm text-white">2014-2015</p>
                      <p className="text-sm text-white mt-2">Won the American Property Awards Canada</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem key={5} className="md:basis-1/3 mt-[50px]">
                <Card className="bg-transparent border-transparent h-[500px] w-[400px]">
                  <CardContent className="p-0">
                    <Image
                      src="/media/mckinnon.png"
                      alt={`WALDEN COMMUNITY`}
                      width={400}
                      height={100}
                      className="object-cover w-full aspect-[5/3]"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white mb-2">WALDEN COMMUNITY</h3>
                      <h2 className="text-sm text-white">SENIOR’S RESIDENCE</h2>
                      <p className="text-sm text-white">2015-2016</p>
                      <p className="text-sm text-white mt-2">Won The International Property Awards,in the Architecture Residence Canada </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem key={6} className="md:basis-1/3 mt-[50px]">
                <Card className="bg-transparent border-transparent h-[500px] w-[400px]">
                  <CardContent className="p-0">
                    <Image
                      src="/media/mckinnon.png"
                      alt={`MULTI-GENERATIONAL HOUSING`}
                      width={400}
                      height={100}
                      className="object-cover w-full aspect-[5/3]"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white mb-2">MULTI-GENERATIONAL HOUSING (M.G.H.)</h3>
                      <h2 className="text-sm text-white">Calgary, AB</h2>
                      <p className="text-sm text-white">2017-2018</p>
                      <p className="text-sm text-white mt-2">Won the Architect Multiple Residence Canada Award</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

          </CarouselContent>
          <CarouselPrevious className="text-white" />
          <CarouselNext className="text-white" />
        </Carousel>
      </div>
    </section>
  );
};

export default AwardsSection;
