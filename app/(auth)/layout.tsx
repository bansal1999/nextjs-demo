export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>20% off on all signups</div>
      {children}
    </div>
  );
}
