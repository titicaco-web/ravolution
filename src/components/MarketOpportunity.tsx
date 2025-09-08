import { TrendingUp, MapPin, Euro, Users } from "lucide-react";

const MarketOpportunity = () => {
  const marketData = [
    {
      icon: <Euro className="h-8 w-8 text-accent" />,
      current: "€24.3B",
      projected: "€34.4B",
      growth: "+6.2% CAGR",
      label: "European PPE Market",
      timeframe: "2024-2030"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      current: "€22.58B",
      projected: "€35.2B",
      growth: "+7.8% CAGR",
      label: "Industrial Cooling Systems",
      timeframe: "2024-2030"
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      current: "77.5M",
      projected: "85.2M",
      growth: "+1.8% annually",
      label: "Workers in High-Heat Sectors",
      timeframe: "Europe-wide"
    }
  ];

  const regions = [
    { country: "Germany", workers: "15.2M", temperature: "+2.1°C", risk: "High" },
    { country: "France", workers: "12.8M", temperature: "+1.9°C", risk: "High" },
    { country: "Italy", workers: "10.5M", temperature: "+2.3°C", risk: "Critical" },
    { country: "Spain", workers: "9.2M", temperature: "+2.2°C", risk: "Critical" },
    { country: "Poland", workers: "8.1M", temperature: "+1.7°C", risk: "Medium" },
    { country: "Netherlands", workers: "4.3M", temperature: "+1.8°C", risk: "Medium" }
  ];

  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Massive Market <span className="text-accent">Opportunity</span>
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Europe's growing heat crisis creates unprecedented demand for active cooling PPE solutions, 
            representing a multi-billion euro opportunity.
          </p>
        </div>

        {/* Market Size Visualization */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {marketData.map((market, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex justify-center mb-6">
                {market.icon}
              </div>
              <h3 className="text-2xl font-bold text-accent mb-2">{market.label}</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-80">Current (2024)</span>
                  <span className="text-xl font-bold">{market.current}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-80">Projected (2030)</span>
                  <span className="text-xl font-bold text-accent">{market.projected}</span>
                </div>
                <div className="pt-2 border-t border-white/20">
                  <div className="flex justify-between items-center">
                    <span className="text-sm opacity-80">{market.timeframe}</span>
                    <span className="text-lg font-semibold text-accent">{market.growth}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Regional Analysis */}
        <div className="card-elevated bg-white text-foreground">
          <div className="text-center mb-8">
            <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">Heat-Affected Regions Analysis</h3>
            <p className="text-muted-foreground">
              Key European markets showing critical heat exposure and worker concentration
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold">Country</th>
                  <th className="text-left py-4 px-4 font-semibold">Affected Workers</th>
                  <th className="text-left py-4 px-4 font-semibold">Temp. Increase</th>
                  <th className="text-left py-4 px-4 font-semibold">Risk Level</th>
                </tr>
              </thead>
              <tbody>
                {regions.map((region, index) => (
                  <tr key={index} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4 font-medium">{region.country}</td>
                    <td className="py-4 px-4">{region.workers}</td>
                    <td className="py-4 px-4">{region.temperature}</td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        region.risk === 'Critical' ? 'bg-destructive/20 text-destructive' :
                        region.risk === 'High' ? 'bg-accent/20 text-accent' :
                        'bg-primary/20 text-primary'
                      }`}>
                        {region.risk}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 text-center">
            <div className="bg-accent/10 rounded-xl p-6">
              <h4 className="text-2xl font-bold text-accent mb-2">Total Addressable Market</h4>
              <p className="text-4xl font-bold text-foreground">€24.3B → €34.4B</p>
              <p className="text-muted-foreground mt-2">Growing at 6.2% CAGR through 2030</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunity;