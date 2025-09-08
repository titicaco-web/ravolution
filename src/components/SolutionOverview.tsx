import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Shield, Thermometer, Battery, Wind } from "lucide-react";
import coolingTechImage from "@/assets/cooling-tech-3d.jpg";

const SolutionOverview = () => {
  const features = [
    {
      icon: <Wind className="h-6 w-6 text-accent" />,
      title: "Active Airflow System",
      description: "Integrated fans provide continuous air circulation"
    },
    {
      icon: <Battery className="h-6 w-6 text-accent" />,
      title: "Long-lasting Battery",
      description: "8-12 hours of continuous cooling power"
    },
    {
      icon: <Shield className="h-6 w-6 text-accent" />,
      title: "ISO Certified",
      description: "Meets EN ISO 13688 and EN 343 standards"
    },
    {
      icon: <Thermometer className="h-6 w-6 text-accent" />,
      title: "Temperature Control",
      description: "Reduces body temperature by up to 8°C"
    }
  ];

  const products = [
    { name: "Cooling Jackets", applications: "Construction, Manufacturing" },
    { name: "Cooling Vests", applications: "Logistics, Warehousing" },
    { name: "Cooling Pants", applications: "Heavy Industry" },
    { name: "Battery Systems", applications: "Universal Power Source" },
    { name: "Accessories", applications: "Complete Ecosystem" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-accent">Active Cooling</span> Solution
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionary cooling PPE technology that provides continuous temperature regulation, 
            keeping workers safe and productive in extreme heat conditions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Technology Showcase */}
          <div className="relative">
            <img 
              src={coolingTechImage}
              alt="3D Cooling Technology Visualization"
              className="w-full rounded-2xl shadow-elevated"
            />
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-semibold">
              ISO Certified
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground mb-8">
              Next-Generation Cooling Technology
            </h3>
            
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/30 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Ecosystem */}
        <div className="card-elevated">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            Complete Product Ecosystem
          </h3>
          
          <div className="grid md:grid-cols-5 gap-6">
            {products.map((product, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{product.name}</h4>
                <p className="text-sm text-muted-foreground">{product.applications}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Competitive Advantage */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-8">
            Why Choose Ravolution?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-feature">
              <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
              <h4 className="text-xl font-bold text-foreground mb-4">First-Mover Advantage</h4>
              <p className="text-muted-foreground">
                Leading Europe's transition from passive to active cooling technology
              </p>
            </div>
            
            <div className="card-feature">
              <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
              <h4 className="text-xl font-bold text-foreground mb-4">Complete Ecosystem</h4>
              <p className="text-muted-foreground">
                Full range of products and accessories for every industry need
              </p>
            </div>
            
            <div className="card-feature">
              <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
              <h4 className="text-xl font-bold text-foreground mb-4">EU Compliance</h4>
              <p className="text-muted-foreground">
                ISO certified and meeting all European safety standards
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <Button className="btn-hero">
              Explore Our Technology
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionOverview;