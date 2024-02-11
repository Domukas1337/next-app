interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    fullWidth?: boolean;
    
}
const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled,
    fullWidth
    
    
}) => {
    return (
        <button
        disabled={disabled}
        onClick={onClick}
        className={`
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-full
        hover:opacity-90
        transition
        text-2xl
        py-1.5
        text-black
        text-bold
        bg-white
        ${fullWidth ? 'w-full' : 'w-fit'}
        
      `}
      >
            {label}
            </button>
    )
    }
    


export default Button;