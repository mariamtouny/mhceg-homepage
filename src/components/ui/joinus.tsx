import Image from "next/image";
import { Button } from "@/components/ui/button";

const JoinUsSection: React.FC = () => {
  return (
    <section className="bg-custom-blue py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="/media/joinus.png"
              alt="Team Collaboration"
              width={600}
              height={400}
              className="object-cover w-full rounded-lg"
            />
          </div>
          <div>
            <p className="text-sm font-bold text-white mb-2">ARUP Careers</p>
            <h3 className="text-3xl font-bold text-white mb-4">JOIN US</h3>
            <p className="text-sm text-white font-bold mb-6">
              At ARUP, we believe in nurturing talent, fostering innovation, and empowering individuals to make a meaningful impact.
            </p>
            <Button className="bg-white text-custom-blue font-bold hover:bg-custom-blue hover:text-white border-2 border-transparent hover:border-white rounded-none focus:outline-none">
              APPLY NOW
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
