import React from 'react';
import styled from 'styled-components';

interface StyledTextProps extends React.HTMLAttributes<HTMLElement> {
  fontSize?: string;
  fontWeight?: number;
  lineHeight?: string;
  htmlTag?: keyof JSX.IntrinsicElements;
  className?: string;
  textColor?: string;
}

const StyledText: React.FC<StyledTextProps> = ({
  fontSize = '14px',
  fontWeight = 600,
  lineHeight = 'normal',
  htmlTag: Tag = 'div',
  className,
  textColor = '#333',
  children,
  ...rest
}) => {
  const StyledTag = styled(Tag)`
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
    color: ${textColor};
  `;

  return (
    <StyledTag className={className} {...rest}>
      {children}
    </StyledTag>
  );
};

export default StyledText;