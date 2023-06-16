import React from 'react'

const Input = ({
  value,
  setValue,
  label,
  name,
  type,
  placeholder,
  children,
  iconLabel,
  className,
  onClick,
}: {
  value: string
  setValue: (arg: string) => void
  label: string
  name: string
  type: 'email' | 'text' | 'password' | 'number'
  placeholder: string
  children?: React.ReactNode
  iconLabel?: React.ReactNode
  className?: string
  onClick?: () => void
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="flex items-center gap-2"
      >
        {iconLabel && iconLabel}
        <span className={`${iconLabel && 'font-medium'}`}>{label}</span>
      </label>
      <div
        onClick={onClick && onClick}
        className="relative w-full"
      >
        <input
          placeholder={placeholder}
          className={`rounded-lg border border-lightGray focus:border-main  ${className}
           text-text bg-white w-full transition-all duration-300`}
          name={name}
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {children && children}
      </div>
    </div>
  )
}

export default Input
