import { ArrowLeftIcon, ButtonContainer } from './Button.styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: 'button1' | 'button2' | 'button3' | 'button4' | 'back',
  buttonStyle?: 'fill' | 'empty',
  children: React.ReactNode,
}

function Button({
  buttonType = 'button1',
  buttonStyle = 'fill',
  children,
  ...otherProps
}: ButtonProps) {
  const isEmpty = buttonStyle === 'empty';

  return (
    <ButtonContainer
      buttonType={buttonType}
      isEmpty={isEmpty}
      className={buttonType === 'back' ? 'back-button' : ''}
      {...otherProps}
    >
      {
        buttonType === 'back'
          ? <ArrowLeftIcon />
          : null
      }
      {children}
    </ButtonContainer>
  );
}

export default Button;
