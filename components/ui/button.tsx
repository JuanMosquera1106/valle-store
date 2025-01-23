import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = 'button',
  
    ...props
}, ref) => {
    return (
        <button
            ref={ref}
            type={type}
            disabled={disabled}
            className={cn(
                'w-auto',                // Ancho automático
                'rounded-full',          // Bordes redondeados completos
                'bg-black',              // Fondo negro
                'border-transparent',    // Borde transparente
                'px-5',                  // Padding horizontal de 5
                'py-3',                  // Padding vertical de 3
                'text-white',            // Texto blanco
                'font-semibold',         // Fuente seminegrita
                'hover:opacity-75',      // Opacidad al hacer hover
                'transition',            // Transición suave
                'disabled:cursor-not-allowed', // Cursor de no permitido cuando está deshabilitado
                'disabled:opacity-50',   // Opacidad reducida cuando está deshabilitado
                className                // Permitir clases adicionales
            )}
            {...props}
        >
            {children}
        </button>
    );
});

Button.displayName = 'Button';

export default Button;
