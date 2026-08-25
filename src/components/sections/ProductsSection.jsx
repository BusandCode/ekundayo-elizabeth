import React from 'react'

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      title: 'Hoop',
      tag: 'Fintech',
      description:
        'A digital Ajo (rotational savings) platform for group savings, automated contributions, and payouts. I worked on the product experience across KYC, contribution tracking, payout management, and group administration.',
      image: '/images/products/hoop.png',
      alt: 'Hoop digital Ajo savings platform dashboard'
    },
    {
      id: 2,
      title: 'Landing Page Concept',
      tag: 'Design',
      description:
        'A product landing page mockup that highlights value, trust, and strong call-to-action hierarchy for fintech customers.',
      image: null, // Placeholder
      alt: 'Landing page concept mockup'
    },
    {
      id: 3,
      title: 'DinePoint',
      tag: 'SaaS',
      description:
        'A restaurant management SaaS platform for order management, QR code ordering, digital menus, payment processing, inventory tracking, and business analytics. Led as Product Manager — product strategy, requirements, feature prioritization, and cross-functional delivery with engineering and design.',
      image: '/images/products/dinepoint.png',
      alt: 'DinePoint kitchen order dashboard'
    }
  ]

  return (
    <section className="section products-section" id="products">
      <div className="products-header">
        <p className="section-label">Products</p>
        <h2 className="section-title">Products I have worked on.</h2>
        <p className="section-copy">
          From fintech to SaaS — here are some of the products I've helped bring to life.
        </p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <article key={product.id} className="product-card">
            <div className="product-card__image">
              {product.image ? (
                <img src={product.image} alt={product.alt} loading="lazy" />
              ) : (
                <div className="product-card__image--placeholder">
                  <div className="placeholder-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="placeholder-bar placeholder-bar--full" />
                  <div className="placeholder-bar placeholder-bar--medium" />
                  <div className="placeholder-bar placeholder-bar--short" />
                </div>
              )}
            </div>

            <div className="product-card__content">
              {product.tag && <span className="product-tag">{product.tag}</span>}
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProductsSection