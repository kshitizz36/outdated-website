import Document, { Html, Head, Main, NextScript } from 'next/document';

interface DocumentProps {
 _children: React.ReactNode;
  __NEXT_32_EXPORT__?: never;
  __NEXT_DATA__?: never;
  __NEXT_REDUCED_COMPONENTS__?: never;
}

const Document = ({ children, ...props }: DocumentProps) => {
  return (
    <html lang='en'>
      <head />
      <body className='antialiased'>{children}</body>
    </html>
  )
};

export default Document;