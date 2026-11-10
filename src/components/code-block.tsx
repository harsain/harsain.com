import type { CSSProperties, ReactNode } from 'react';

export const K = ({ children }: { children: ReactNode }) => <span className="k">{children}</span>;
export const S = ({ children }: { children: ReactNode }) => <span className="s">{children}</span>;
export const N = ({ children }: { children: ReactNode }) => <span className="n">{children}</span>;
export const M = ({ children }: { children: ReactNode }) => <span className="m">{children}</span>;

/** One line of code. `i` is the indent level; wrapped lines hang under it. */
export function L({ i = 0, children }: { i?: number; children: ReactNode }) {
  return (
    <div className="cl" style={{ '--i': i } as CSSProperties}>
      {children}
    </div>
  );
}

export function CodeBox({
  file,
  label,
  head,
  children,
  className,
  style,
}: {
  file: string;
  label?: string;
  head?: ReactNode;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div className={`codex ${className ?? ''}`} style={style}>
      <div className="codeh">
        <span>{file}</span>
        {label && <span>{label}</span>}
      </div>
      {head}
      <div className="pre">{children}</div>
    </div>
  );
}

/** A JSON-ish list: ["a", "b"] with syntax colours. */
export function StrList({ values }: { values: string[] }) {
  return (
    <>
      <M>[</M>
      {values.map((v, idx) => (
        <span key={v}>
          <S>&quot;{v}&quot;</S>
          {idx < values.length - 1 ? ', ' : ''}
        </span>
      ))}
      <M>]</M>
    </>
  );
}
