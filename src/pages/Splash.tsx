import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ecofinLogo from '@/assets/ecofin-logo.png';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center" style={{
      background: 'var(--gradient-splash)'
    }}>
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl animate-pulse">
          <img 
            src={ecofinLogo} 
            alt="ECOFIN Logo" 
            className="w-20 h-20 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Splash;