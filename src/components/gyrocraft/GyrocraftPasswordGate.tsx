import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, ArrowRight } from "lucide-react";
import GyroscopeIcon from "@/components/icons/GyroscopeIcon";

const GYROCRAFT_ACCESS_CODE = "1425";
const STORAGE_KEY = "gyrocraft_access_granted";

interface GyrocraftPasswordGateProps {
  children: React.ReactNode;
}

const GyrocraftPasswordGate = ({ children }: GyrocraftPasswordGateProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem(STORAGE_KEY) === "true";
  });
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === GYROCRAFT_ACCESS_CODE) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid access code. Please try again.");
      setPassword("");
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gyrocraft-dark flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gyrocraft-teal/20 rounded-full mb-6">
            <GyroscopeIcon className="w-10 h-10 text-gyrocraft-teal" />
          </div>
          <h1 className="text-3xl font-display font-bold text-gyrocraft-text mb-2">
            Gyrocraft Access
          </h1>
          <p className="text-gyrocraft-text/70">
            Enter the access code to view Gyrocraft content
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gyrocraft-text/50" />
            <Input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              placeholder="Enter access code"
              className="pl-11 bg-gyrocraft-dark/50 border-gyrocraft-text/20 text-gyrocraft-text placeholder:text-gyrocraft-text/40 focus:border-gyrocraft-teal"
              maxLength={10}
            />
          </div>
          
          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          <Button 
            type="submit" 
            className="w-full bg-gyrocraft-teal hover:bg-gyrocraft-teal/90 text-gyrocraft-dark font-semibold"
          >
            Access Gyrocraft <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </form>

        <p className="text-center text-gyrocraft-text/50 text-sm mt-6">
          Contact us if you need access credentials
        </p>
      </div>
    </div>
  );
};

export default GyrocraftPasswordGate;
