import { ValidationWrapper, InvalidText } from './input-validation-wrapper.styles';

function InputValidationWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ValidationWrapper>
      {children}
      <InvalidText>Can&apos;t be empty</InvalidText>
    </ValidationWrapper>
  );
}

export default InputValidationWrapper;
