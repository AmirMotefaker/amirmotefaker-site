import { products } from "@/content/products";

export default function ProductsPage() {
  return (
    <main>
      <section>
        <h1>Products</h1>

        <div>
          {products.map((product) => {
            const website =
              "website" in product &&
              typeof product.website === "string"
                ? product.website
                : undefined;

            return (
              <article key={product.slug}>
                <h2>{product.name}</h2>

                <p>{product.description}</p>

                <p>
                  Category: {product.category}
                </p>

                <p>
                  Status: {product.status}
                </p>

                {website && (
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}