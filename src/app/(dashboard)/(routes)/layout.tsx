import Header from "@/app/_components/Header";
import Sidebar from "@/app/_components/Sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-[1fr] md:grid-cols-[200px_1fr] grid-rows-[auto_1fr] ">
      <Header />
      <Sidebar />
      <div className="flex flex-col items-center pt-5">{children}</div>
    </div>
  );
};

export default layout;
