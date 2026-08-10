import React from 'react'

const ProductsSection = () => {
  return (
    <section className="section" id="products">
      <div className="section-header">
        <p className="section-label">Products</p>
        <h2 className="section-title">UI mockups & product previews.</h2>
        <p className="section-copy">
          These are mock UI products that showcase polished fintech interfaces, dashboards, and landing page concepts.
          Each card represents a product experience built with attention to clarity, trust, and conversion.
        </p>
      </div>

      <div className="product-grid">
        <article className="product-card">
          <div className="product-image">
            <div className="image-topbar">
              <span />
              <span />
              <span />
            </div>
            <div className="image-body">
              <div className="image-line" />
              <div className="image-line medium" />
              <div className="image-line short" />
              <div className="image-block">
                <div className="image-line" />
                <div className="image-line medium" />
                <div className="image-line short" />
              </div>
            </div>
          </div>
          <div className="product-card__content">
            <h3>Finance Dashboard</h3>
            <p>
              A mock dashboard experience for tracking revenue, cash flow, and user metrics with clean charts and clear hierarchy.
            </p>
          </div>
        </article>

        <article className="product-card">
          <div className="product-image">
            <div className="image-topbar">
              <span />
              <span />
              <span />
            </div>
            <div className="image-body">
              <div className="image-line" />
              <div className="image-line short" />
              <div className="image-line medium" />
              <div className="image-block">
                <div className="image-line" />
                <div className="image-line medium" />
              </div>
            </div>
          </div>
          <div className="product-card__content">
            <h3>Onboarding Flow</h3>
            <p>
              A polished onboarding interface concept with step indicators, clear actions, and a premium first impression.
            </p>
          </div>
        </article>

        <article className="product-card">
          <div className="product-image">
            <div className="image-topbar">
              <span />
              <span />
              <span />
            </div>
            <div className="image-body">
              <div className="image-line medium" />
              <div className="image-line" />
              <div className="image-line short" />
              <div className="image-block">
                <div className="image-line medium" />
                <div className="image-line short" />
              </div>
            </div>
          </div>
          <div className="product-card__content">
            <h3>Landing Page Concept</h3>
            <p>
              A product landing page mockup that highlights value, trust, and strong call-to-action hierarchy for fintech customers.
            </p>
          </div>
        </article>

        <article className="product-card">
          <div className="product-image product-image--photo">
            <img
              src="/images/products/dinepoint.png"
              alt="DinePoint kitchen order dashboard"
              className="product-image__screenshot"
            />
          </div>
          <div className="product-card__content">
            <h3>DinePoint</h3>
            <p>
              A restaurant management SaaS platform for order management, QR code ordering, digital menus,
              payment processing, inventory tracking, and business analytics. Led as Product Manager — product
              strategy, requirements, feature prioritization, and cross-functional delivery with engineering and design.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default ProductsSection