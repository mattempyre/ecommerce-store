import Container from "@/components/ui/container";
import Billboard from "@/components/ui/billboard";
import getBillboard from "@/actions/get-billboard";

const HomePage = async () => {
  const billboard = await getBillboard("3894906e-1b7f-4892-8b36-59e07d4d7721");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};
export default HomePage;
