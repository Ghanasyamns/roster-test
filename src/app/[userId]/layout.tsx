import Navbar from "@/components/Navbar";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="container">
      <Navbar />
      {children}
    </main>
  );
}

export default layout;
