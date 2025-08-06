const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-bold transition';
  
  const variants = {
    primary: 'bg-primary hover:bg-primary-dark',
    secondary: 'bg-secondary hover:bg-opacity-90',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;