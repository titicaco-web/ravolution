import { Link } from "react-router-dom";
import { Linkedin, Mail, MapPin, ExternalLink } from "lucide-react";
import { useLangPath } from "@/hooks/use-lang-path";

const GyrocraftFooter = () => {
  const lp = useLangPath();

  return (
    <footer className="bg-gyrocraft-dark border-t border-gyrocraft-text/10 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to={lp("/gyrocraft")} className="text-2xl font-display font-bold text-gyrocraft-text mb-4 block">
              GYROCRAFT
            </Link>
            <p className="text-gyrocraft-text/60 text-sm mb-4">
              Revolutionary inertial electromagnetic propulsion technology. 
              Works everywhere: space, air, water.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://linkedin.com/company/ravolution" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gyrocraft-text/10 rounded-lg flex items-center justify-center text-gyrocraft-text/60 hover:bg-gyrocraft-teal/20 hover:text-gyrocraft-teal transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:ivan@ravolution.se"
                className="w-10 h-10 bg-gyrocraft-text/10 rounded-lg flex items-center justify-center text-gyrocraft-text/60 hover:bg-gyrocraft-teal/20 hover:text-gyrocraft-teal transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* For Companies */}
          <div>
            <h4 className="text-gyrocraft-text font-semibold mb-4">For Companies</h4>
            <ul className="space-y-2">
              <li>
                <Link to={lp("/gyrocraft/licensing")} className="text-gyrocraft-text/60 hover:text-gyrocraft-teal transition-colors">
                  Licensing Tiers
                </Link>
              </li>
              <li>
                <Link to={lp("/gyrocraft/licensing#satellite")} className="text-gyrocraft-text/60 hover:text-gyrocraft-teal transition-colors">
                  Satellite Operators
                </Link>
              </li>
              <li>
                <Link to={lp("/gyrocraft/licensing#military")} className="text-gyrocraft-text/60 hover:text-gyrocraft-teal transition-colors">
                  Defense Contractors
                </Link>
              </li>
              <li>
                <Link to={lp("/gyrocraft/licensing#aam")} className="text-gyrocraft-text/60 hover:text-gyrocraft-teal transition-colors">
                  eVTOL Manufacturers
                </Link>
              </li>
            </ul>
          </div>

          {/* For Investors */}
          <div>
            <h4 className="text-gyrocraft-text font-semibold mb-4">For Investors</h4>
            <ul className="space-y-2">
              <li>
                <Link to={lp("/gyrocraft/investors")} className="text-gyrocraft-text/60 hover:text-gyrocraft-teal transition-colors">
                  Investment Thesis
                </Link>
              </li>
              <li>
                <Link to={lp("/gyrocraft/investors#financials")} className="text-gyrocraft-text/60 hover:text-gyrocraft-teal transition-colors">
                  Financial Projections
                </Link>
              </li>
              <li>
                <Link to={lp("/gyrocraft/acquisition")} className="text-gyrocraft-text/60 hover:text-gyrocraft-teal transition-colors">
                  Patent Acquisition
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gyrocraft-text font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gyrocraft-teal mt-1 flex-shrink-0" />
                <p className="text-gyrocraft-text/60 text-sm">
                  Bagarsvängen 5, lgh 1101<br />
                  130 35 Tyresö, Sweden
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gyrocraft-teal" />
                <a href="mailto:ivan@ravolution.se" className="text-gyrocraft-text/60 hover:text-gyrocraft-teal text-sm transition-colors">
                  ivan@ravolution.se
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gyrocraft-text/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <p className="text-gyrocraft-text/40 text-sm">
              Ravolution AB | Org.nr 556709-7547
            </p>
            <span className="text-gyrocraft-text/20">|</span>
            <Link to={lp("/")} className="text-gyrocraft-text/40 hover:text-gyrocraft-teal text-sm flex items-center gap-1 transition-colors">
              Back to Ravolution <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
          <div className="flex gap-6">
            <Link to={lp("/privacy-policy")} className="text-gyrocraft-text/40 hover:text-gyrocraft-teal text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to={lp("/terms-of-service")} className="text-gyrocraft-text/40 hover:text-gyrocraft-teal text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GyrocraftFooter;
