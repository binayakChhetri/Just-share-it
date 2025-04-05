import Sidebar from "@/app/_components/Sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Sidebar />
      {children}
    </div>
  );
};

export default layout;
