import { TrendingUp, DollarSign, Target, PieChart } from "lucide-react";

const FinancialOverview = () => {
  const revenueProjections = [
    { year: "2026", revenue: "€2.4M", growth: "Launch Year", color: "bg-primary" },
    { year: "2027", revenue: "€6.2M", growth: "+158%", color: "bg-primary-light" },
    { year: "2028", revenue: "€12.0M", growth: "+94%", color: "bg-accent" },
    { year: "2029", revenue: "€18.5M", growth: "+54%", color: "bg-accent-light" },
    { year: "2030", revenue: "€24.0M", growth: "+30%", color: "bg-primary-dark" }
  ];

  const investmentBreakdown = [
    { category: "Product Development", amount: "€80K", percentage: "8%", description: "Complete R&D and certification" },
    { category: "Manufacturing Setup", amount: "€8M", percentage: "40%", description: "Production facilities and equipment" },
    { category: "Market Expansion", amount: "€6M", percentage: "30%", description: "Sales team and distribution network" },
    { category: "Working Capital", amount: "€4.5M", percentage: "22%", description: "Inventory and operational funds" }
  ];

  const keyMetrics = [
    { metric: "Break-even Point", value: "Month 14", icon: <Target className="h-6 w-6" /> },
    { metric: "5-Year ROI", value: "180-240%", icon: <TrendingUp className="h-6 w-6" /> },
    { metric: "Gross Margin", value: "65%", icon: <PieChart className="h-6 w-6" /> },
    { metric: "Market Share Target", value: "12%", icon: <DollarSign className="h-6 w-6" /> }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <TrendingUp className="h-12 w-12 text-accent mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Financial Overview
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strong financial projections backed by confirmed partnerships and proven market demand 
            for active cooling PPE solutions.
          </p>
        </div>

        {/* Revenue Projections Chart */}
        <div className="card-elevated mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            Revenue Projections (2026-2030)
          </h3>
          
          <div className="grid md:grid-cols-5 gap-6 mb-8">
            {revenueProjections.map((projection, index) => (
              <div key={index} className="text-center">
                <div className={`${projection.color} text-white rounded-2xl p-6 mb-4`}>
                  <div className="text-3xl font-bold mb-2">{projection.revenue}</div>
                  <div className="text-sm opacity-90">{projection.year}</div>
                </div>
                <div className="text-accent font-semibold">{projection.growth}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center bg-muted/30 rounded-xl p-6">
            <h4 className="text-xl font-bold text-foreground mb-2">5-Year Total Revenue</h4>
            <p className="text-4xl font-bold text-accent">€63.1M</p>
            <p className="text-muted-foreground mt-2">Cumulative revenue through 2030</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Investment Requirements */}
          <div className="card-elevated">
            <h3 className="text-3xl font-bold text-foreground mb-8">Investment Requirements</h3>
            
            <div className="space-y-6">
              {investmentBreakdown.map((item, index) => (
                <div key={index} className="border-b border-border pb-4 last:border-b-0">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-foreground">{item.category}</h4>
                    <div className="text-right">
                      <div className="text-xl font-bold text-accent">{item.amount}</div>
                      <div className="text-sm text-muted-foreground">{item.percentage}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-primary/10 rounded-xl p-6 text-center">
              <h4 className="text-2xl font-bold text-primary mb-2">Total Investment</h4>
              <p className="text-4xl font-bold text-foreground">€18.5M</p>
              <p className="text-muted-foreground mt-2">Including €80K development completed</p>
            </div>
          </div>

          {/* Key Financial Metrics */}
          <div className="space-y-8">
            <div className="card-elevated">
              <h3 className="text-3xl font-bold text-foreground mb-8">Key Financial Metrics</h3>
              
              <div className="grid grid-cols-2 gap-6">
                {keyMetrics.map((metric, index) => (
                  <div key={index} className="text-center p-6 bg-muted/30 rounded-xl">
                    <div className="flex justify-center mb-4 text-accent">
                      {metric.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{metric.metric}</h4>
                    <p className="text-2xl font-bold text-accent">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="card-elevated bg-accent text-accent-foreground">
              <h3 className="text-2xl font-bold mb-6">Investment Highlights</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <TrendingUp className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                  <span>Confirmed LOI with €7B+ Hultafors Group</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                  <span>€24B+ addressable European market</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                  <span>ISO-certified technology with proven demand</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                  <span>First-mover advantage in active cooling PPE</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-primary text-white rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-4">Ready to Invest in the Future of Worker Safety?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join us in revolutionizing European worker protection and capturing a massive market opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-accent">
                Schedule Investor Meeting
              </button>
              <button className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                Download Financial Model
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialOverview;