
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import RelatedProduct from "@/components/product/related-product";
import { LayoutOne } from "@/layouts";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";

function ProductsDisplay() {
  const { products } = useSelector((state) => state.product);
  const router = useRouter();

  const { area, status, type } = router.query;
  const [filteredProducts, setFilteredProducts] = useState([]);



  console.log("ALL PRODUCTS", products)

  useEffect(() => {
    // Filter products based on query parameters
    if (products && products.length > 0) {
      const filtered = products.filter((product) => {
        const matchesArea = area ? product.county === area : true;
        const matchesStatus = status ? product.status === status : true;
        const matchesType = type ? product.type === type : true;
        return (matchesArea && matchesStatus) || matchesArea || (matchesArea && matchesType) || (matchesArea && matchesStatus && matchesType);
      });
      setFilteredProducts(filtered);
    }
  }, [products, area, status, type]);

  return (
    <LayoutOne topbar={true}>
      {/* Breadcrumb */}
      <ShopBreadCrumb
        title="Filtered Properties"
        sectionPace=""
        currentSlug="Filtered Properties"
      />

      {/* Filtered Products */}
      <Container>
        <Row>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, key) => {
              const slug = `/${product.title}`;
              const discountedPrice = product.discount
                ? (product.price - product.price * (product.discount / 100)).toFixed(2)
                : product.price.toFixed(2);
              const productPrice = product.price.toFixed(2);

              return (
                <Col key={key} xs={12} sm={6} lg={4}>
                  <RelatedProduct
                    slug={slug}
                    baseUrl="properties"
                    productData={product}
                    discountedPrice={discountedPrice}
                    productPrice={productPrice}
                  />
                </Col>
              );
            })
          ) : (
            <p>No properties found for the selected criteria.</p>
          )}
        </Row>
      </Container>
    </LayoutOne>
  );
}

export default ProductsDisplay;
