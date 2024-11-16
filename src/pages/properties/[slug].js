import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";

const ProductDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Access products from Redux store
  const { products } = useSelector((state) => state.product);

  // Find the product using the slug
  const product = products.find((item) => item.title === slug);

  // If product not found
  if (!product) {
    return (
      <LayoutOne topbar={true}>
        <Container>
          <Row>
            <Col xs={12}>
              <h2>Product Not Found</h2>
            </Col>
          </Row>
        </Container>
      </LayoutOne>
    );
  }

  return (
    <LayoutOne topbar={true}>
      {/* Breadcrumb */}
      <ShopBreadCrumb
        title={product.title}
        sectionPace=""
        currentSlug={product.title}
      />

      {/* Product Details */}
      <Container>
        <Row>
          {/* Image Section */}
          <Col xs={12} md={6}>
            <img
              src={`/img/product-3/${product.productImg}`}
              alt={product.title}
              className="img-fluid"
            />
          </Col>

          {/* Product Information */}
          <Col xs={12} md={6}>
            <h1>{product.title}</h1>
            <p>
              <strong>Price:</strong> Kshs {product.price.toLocaleString()}{" "}
             
            </p>
            <p>
              <strong>Location:</strong> 
              <span>{product.district}</span>
            </p>
            <p>
              <strong>Category:</strong> {product.category.join(", ")}
            </p>
            <p>
              <strong>Tags:</strong> {product.tag.join(", ")}
            </p>
            <p>
              <strong>Rating:</strong> {product.rating} stars ({product.ratingCount} reviews)
            </p>
            <p>
              <strong>Short Description:</strong>{" "}
              {product.description.shortDescription}
            </p>
            <h3>Details:</h3>
            <p>{product.description.fullDescription}</p>
          </Col>
        </Row>

        {/* Facts & Features */}
        <Row>
          <Col xs={12}>
            <h2 className=" my-4">Facts & Features</h2>
            <ul>
              {Object.entries(product.factsAndFeatures).map(
                ([key, value], index) => (
                  <li key={index}>
                    <strong>{key.replace(/([A-Z])/g, " $1")}: </strong>
                    {value}
                  </li>
                )
              )}
            </ul>
          </Col>
        </Row>

        {/* Amenities */}
        <Row>
          <Col xs={12}>
            <h2>Amenities</h2>
            <Row>
              <Col md={4}>
                <h4>Essential Amenities</h4>
                <ul>
                  {product.amenities1.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Col>
              <Col md={4}>
                <h4>Special Features</h4>
                <ul>
                  {product.amenities2.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Col>
              <Col md={4}>
                <h4>Extra Amenities</h4>
                <ul>
                  {product.amenities3.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </LayoutOne>
  );
};

export default ProductDetails;
