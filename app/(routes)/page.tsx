import Container from "@/components/ui/container";
import Billboard from "@/components/ui/billboard";
import ProductList from "@/components/product-list";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("3894906e-1b7f-4892-8b36-59e07d4d7721");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
    </Container>
  );
};
export default HomePage;
