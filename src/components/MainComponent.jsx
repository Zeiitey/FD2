import { CTACardComponent } from "./CTACard";
import { ProductCardComponent } from "./ProductCardComponent";

const MainComponent = () => {
 
  return (
    <main className="flex flex-col gap-10">
      <section className="flex justify-center gap-5">
        <ProductCardComponent />
        <ProductCardComponent />
        <ProductCardComponent />
        <ProductCardComponent />
      </section>
      <section className="flex justify-center gap-5">
        <CTACardComponent/>
        <CTACardComponent/>
        <CTACardComponent/>
        <CTACardComponent/>
      </section>
    </main>
  );
};

export default MainComponent;
