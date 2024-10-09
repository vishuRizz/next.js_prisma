export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body
        >
         sign up now and get an instant 2% discount
          {children}
        </body>
      </html>
    );
  }
  