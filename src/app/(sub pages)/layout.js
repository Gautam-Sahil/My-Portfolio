import HomeBtn from "@/components/HomeBtn";
export const metadata = {
  title: "About",
};

export default function SubPagesLayout({ children, className }) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center px-8 xs:px-16 lg:px-32 py-20  ${className}`}
    >
      <HomeBtn />
      {children}
    </main>
  );
}
