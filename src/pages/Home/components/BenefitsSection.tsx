import { Clock, Users, TrendingUp, Star } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Custom Print Identity",
      description: "Create distinctive textile prints that reflect your brand identity instead of relying on generic mill libraries. Unique prints help products stand out and build stronger brand recognition."
    },
    {
      icon: Users,
      title: "Faster Print Development",
      description: "Design repeats, test colorways, and generate garment mockups quickly. This allows design teams to react faster to trends and launch new collections more efficiently.."
    },
    {
      icon: TrendingUp,
      title: "Reduced Sampling Costs",
      description: "Accurate artwork preparation and visual mockups reduce the need for multiple physical samples, saving both development time and production expenses."
    },
    {
      icon: Star,
      title: "Better Production Collaboration",
      description: "Layered, high-resolution artwork makes it easier for printers and mills to produce accurate results with fewer revisions and smoother production workflows."
    },
  ];

  return (
    <section className="py-16 bg-white text-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-024959">
          Benefits of REACH Pixune
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Best In Class Pixune Software
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-bef0fb p-3 rounded-lg flex-shrink-0">
                  <benefit.icon className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-0a829e mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;