const StatsSection: React.FC = () => {
    return (
        <section className="bg-custom-blue py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start justify-between space-x-8">
            <h1 className="text-3xl md:text-5xl font-bold text-white max-w-2xl">
              "CREATING ARCHITECTURE IS A PROCESS OF STRIVING FOR EXCELLENCE, BY THE PEOPLE, FOR THE PEOPLE"
            </h1>
  
            <div className="grid grid-cols-2 gap-4 mt-6 md:mt-0 md:grid-cols-2">
              {[
                { label: "ESTABLISHED", value: "1988" },
                { label: "YEARS OF EXPERTISE", value: "40+" },
                { label: "COUNTRIES", value: "10+" },
                { label: "PROJECTS", value: "1000+" },
              ].map(({ label, value }) => (
                <div key={label} className="border border-white p-6 flex flex-col items-center justify-center text-center" >
                  <div className="text-sm text-white">{label}</div>
                  <div className="text-3xl font-bold text-white">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default StatsSection;
  