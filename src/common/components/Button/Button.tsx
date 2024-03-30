type ButtonProps = {
    children: React.ReactNode;
    color?: 'blue' | 'green' | 'red';
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
  }
  
  const colors = {
    blue: 'bg-blue-500 hover:bg-blue-700',
    green: 'bg-green-500 hover:bg-green-700',
    red: 'bg-red-500 hover:bg-red-700',
  };
  
  const sizes = {
    small: 'text-sm py-2 px-4',
    medium: 'text-md py-3 px-6',
    large: 'text-lg py-3 px-8',
  };
  
  const Button = ({ children, color = 'blue', size = 'medium', onClick }: ButtonProps) => {
    return (
      <button
        onClick={onClick}
        className={`${colors[color]} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${sizes[size]}`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;