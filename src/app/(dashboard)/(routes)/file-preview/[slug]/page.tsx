import Preview from "@/app/_components/Preview";

const page = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params;
  const id = params.slug;
  console.log(id);
  return <Preview />;
};

export default page;
