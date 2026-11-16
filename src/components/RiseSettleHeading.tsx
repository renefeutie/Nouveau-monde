import type { CSSProperties, ReactNode } from 'react';
import TextEngine from 'spring-text-engine';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface RiseSettleHeadingProps {
  tag: HeadingTag;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  centered?: boolean;
}

const LETTER_OUT = { opacity: 0, y: 24 };
const LETTER_IN = { opacity: 1, y: 0 };
const LETTER_CONFIG = { tension: 220, friction: 22 };

export function RiseSettleHeading({
  tag,
  children,
  className = '',
  style,
  centered = false,
}: RiseSettleHeadingProps) {
  const mergedStyle: CSSProperties | undefined = centered
    ? { justifyContent: 'center', ...style }
    : style;

  return (
    <TextEngine
      tag={tag}
      mode="once"
      overflow
      letterOut={LETTER_OUT}
      letterIn={LETTER_IN}
      letterConfig={LETTER_CONFIG}
      letterStagger={30}
      wrapLineClassName="rise-settle-word"
      className={className}
      style={mergedStyle}
    >
      {children}
    </TextEngine>
  );
}
