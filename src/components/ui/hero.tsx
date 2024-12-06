
const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen ">
      <video
        src="media/home.mp4" 
        className="object-cover w-full h-full"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
