interface InputProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    type?: string;
    disabled?: boolean;
    placeholder?: string
}

const Input : React.FC<InputProps> = ({
    onChange,
    value,
    type,
    disabled,
    placeholder
}) => {
    return (
        <input
            disabled={disabled}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
            type={type}
            className="border-2 w-full rounded-full p-2 bg-black text-white
            transition
            disabled:opacity-70
            disabled:cursor-not-allowed
            disabled:bg-neutral-900">

            </input>
    )
}

export default Input