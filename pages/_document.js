import Document, { Html, Head, Main, NextScript } from '\"next\/document\"';

export function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="antialiased">
        <Main>{children}</Main>
        <NextScript />
      </body>
    </html>
  );
}