import { AlertTriangle, Thermometer, Users, TrendingUp } from "lucide-react";
import heatCrisisImage from "@/assets/europe-heat-crisis.jpg";

const ProblemStatement = () => {
  const stats = [
    {
      icon: <Thermometer className="h-8 w-8 text-accent" />,
      value: "47,690",
      label: "Heat Deaths in Europe (2023)",
      trend: "+15% from 2022"
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      value: "77.5M",
      label: "European Workers at Risk",
      trend: "Construction, Manufacturing, Logistics"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      value: "€24.3B",
      label: "Annual PPE Market Size",
      trend: "Growing 6.2% annually"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className="h-12 w-12 text-accent mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Europe's Heat Crisis
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Rising temperatures are creating a workplace safety emergency across Europe, 
            with traditional PPE falling short of protecting workers in extreme heat conditions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Crisis Visualization */}
          <div className="relative">
            <img 
              src={heatCrisisImage}
              alt="Europe Heat Crisis Data Visualization"
              className="w-full rounded-2xl shadow-elevated"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Problem Details */}
          <div className="space-y-8">
            <div className="card-feature">
              <h3 className="text-2xl font-bold mb-4 text-foreground">The Market Gap</h3>
              <p className="text-muted-foreground mb-6">
                Current PPE solutions rely on passive cooling methods that fail in extreme heat. 
                Workers need active cooling systems that provide continuous temperature regulation.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-destructive/10 rounded-lg">
                  <p className="text-2xl font-bold text-destructive">Passive Cooling</p>
                  <p className="text-sm text-muted-foreground">Limited effectiveness</p>
                </div>
                <div className="text-center p-4 bg-accent/10 rounded-lg">
                  <p className="text-2xl font-bold text-accent">Active Cooling</p>
                  <p className="text-sm text-muted-foreground">Continuous protection</p>
                </div>
              </div>
            </div>

            <div className="card-feature">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Regulatory Pressure</h3>
              <p className="text-muted-foreground">
                New EN standards are driving demand for advanced PPE solutions that meet 
                stricter safety requirements for high-temperature work environments.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {stats.map((stat, index) => (
            <div key={index} className="card-elevated text-center">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">{stat.value}</h3>
              <p className="text-lg font-medium text-foreground mb-2">{stat.label}</p>
              <p className="text-sm text-accent font-medium">{stat.trend}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;