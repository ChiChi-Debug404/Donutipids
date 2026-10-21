:root {
  --pink-100: #fff3f7;
  --pink-200: #ffd5e2;
  --pink-300: #ffc2d1;
  --pink-500: #f26d9a;
  --pink-600: #e73a72;
  --coral: #ff8f6b;
  --yellow: #ffd75d;
  --mint: #9ae8d0;
  --cream: #fffaf2;
  --plum: #3c1d3d;
  --plum-soft: #60365c;
  --text: #42243d;
  --muted: #6b4f63;
  --line: rgba(60, 29, 61, 0.12);
  --success: #1fa76b;
  --warning: #d6821a;
  --danger: #d94b67;
  --shadow: 0 8px 24px rgba(74, 42, 61, 0.07);
  --radius-xl: 14px;
  --radius-lg: 10px;
  --radius-md: 8px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: linear-gradient(180deg, #f7e4e7 0%, #efdfe1 100%);
  color: var(--text);
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select,
textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(255, 250, 246, 0.97);
  border-bottom: 1px solid var(--line);
}

.header-inner {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  padding: 14px 0;
  gap: 20px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--pink-500), var(--coral));
  color: white;
  font-family: "Baloo 2", cursive;
  font-size: 1.8rem;
  font-weight: 700;
  box-shadow: 0 12px 20px rgba(242, 109, 154, 0.25);
}

.brand-name {
  display: block;
  font-family: "Baloo 2", cursive;
  font-size: 1.8rem;
  line-height: 1;
  color: var(--plum);
}

.brand small {
  color: var(--muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.62rem;
}

.main-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(8px, 1vw, 16px);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--plum-soft);
}

.main-nav a {
  position: relative;
  padding: 0.5rem 0.65rem;
  border: 1px solid rgba(96, 54, 92, 0.14);
  border-radius: 7px;
  background: rgba(255, 252, 249, 0.76);
  white-space: nowrap;
  transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
}

.main-nav a:hover,
.main-nav a:focus-visible {
  color: var(--pink-600);
  border-color: rgba(231, 58, 114, 0.38);
  background: #fff7f2;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
}

.nav-toggle {
  display: none;
  border: 0;
  background: transparent;
  font-size: 2rem;
  color: var(--plum);
}

.btn {
  appearance: none;
  border: 1px solid transparent;
  border-radius: 999px;
  padding: 0.7rem 1.05rem;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--pink-500), var(--coral));
  color: white;
  box-shadow: 0 12px 25px rgba(242, 109, 154, 0.28);
}

.btn-secondary {
  background: rgba(154, 232, 208, 0.5);
  color: var(--plum);
  border-color: rgba(60, 29, 61, 0.08);
}

.btn-ghost {
  background: rgba(255, 255, 255, 0.6);
  border-color: var(--line);
  color: var(--plum);
}

.full-width {
  width: 100%;
}

.cart-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 24px;
  padding: 0 6px;
  border-radius: 50%;
  background: #fff;
  color: var(--plum);
  margin-left: 6px;
  font-size: 0.75rem;
}

.hero-section {
  padding: 74px 0 36px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.06fr 0.94fr;
  gap: 40px;
  align-items: center;
}

.tagline,
.eyebrow {
  display: inline-block;
  padding: 0.5rem 0.9rem;
  border-radius: 999px;
  background: rgba(255, 215, 93, 0.28);
  color: var(--plum);
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 0.7rem;
}

.hero-copy h1,
.section-header-row h2,
.feature-grid h2,
.contact-grid h2,
.dashboard-header h2 {
  font-family: "Baloo 2", cursive;
  letter-spacing: -0.04em;
  color: var(--plum);
}

.hero-copy h1 {
  margin: 18px 0 16px;
  font-size: clamp(2.85rem, 5vw, 5rem);
  line-height: 0.92;
}

.hero-copy p {
  max-width: 610px;
  font-size: 1.07rem;
  line-height: 1.7;
  color: var(--muted);
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 28px;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(90px, 1fr));
  gap: 18px;
  margin-top: 32px;
}

.hero-stats div {
  padding: 18px 14px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.66);
  border: 1px solid rgba(60, 29, 61, 0.06);
}

.hero-stats strong {
  display: block;
  font-size: 1.45rem;
  color: var(--plum);
}

.hero-stats span {
  display: block;
  color: var(--muted);
  margin-top: 4px;
}

.hero-visual {
  position: relative;
  min-height: 500px;
  display: grid;
  place-items: center;
}

.donut-scene {
  position: relative;
  width: min(100%, 440px);
  height: 420px;
  display: grid;
  place-items: center;
}

.donut-hero {
  position: absolute;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  box-shadow: inset -22px -18px 0 rgba(111, 70, 40, 0.09), 0 24px 32px rgba(120, 68, 54, 0.08);
}

.donut-hero::before {
  content: "";
  position: absolute;
  inset: 58px;
  border-radius: 50%;
  background: rgba(101, 50, 34, 0.9);
}

.donut-hero::after {
  content: "";
  position: absolute;
  inset: 18px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.18), transparent 62%);
}

.donut-vanilla {
  background: radial-gradient(circle at center, #fffefb 0 46%, #f8eadb 47% 60%, #e4b981 61% 100%);
}

.donut-vanilla::after {
  background-image: radial-gradient(circle, #f4b7ce 0 2px, transparent 3px), radial-gradient(circle, #a8d4ff 0 2px, transparent 3px), radial-gradient(circle, #f7d86a 0 2px, transparent 3px), radial-gradient(circle, #ff8a5b 0 2px, transparent 3px), radial-gradient(circle, #85d7b7 0 2px, transparent 3px);
  background-position: 18% 20%, 40% 38%, 68% 24%, 46% 60%, 72% 72%;
  background-size: 26px 26px;
}

.donut-chocolate {
  background: radial-gradient(circle at center, #7c3b25 0 52%, #462217 53% 100%);
}

.donut-chocolate::after {
  background-image: radial-gradient(circle, rgba(255,255,255,0.7) 0 2px, transparent 3px), radial-gradient(circle, rgba(255,255,255,0.7) 0 2px, transparent 3px), radial-gradient(circle, rgba(255,255,255,0.7) 0 2px, transparent 3px), radial-gradient(circle, rgba(255,255,255,0.7) 0 2px, transparent 3px);
  background-position: 32% 26%, 48% 52%, 68% 60%, 18% 58%;
  background-size: 22px 22px;
}

.donut-left {
  left: 18%;
  top: 22%;
  transform: rotate(-12deg);
}

.donut-center {
  left: 34%;
  top: 4%;
}

.donut-right {
  left: 50%;
  top: 27%;
  transform: rotate(10deg);
}

.float-badge {
  position: absolute;
  right: 18px;
  top: 18px;
  background: rgba(255,255,255,0.9);
  color: var(--plum);
  border-radius: 999px;
  padding: 0.55rem 0.9rem;
  font-size: 0.73rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.mini-card {
  position: absolute;
  padding: 0.95rem 1.2rem;
  border-radius: 18px;
  font-weight: 700;
  color: var(--plum);
  box-shadow: var(--shadow);
  border: 1px solid rgba(60, 29, 61, 0.06);
}

.mini-card.pink {
  background: rgba(255, 208, 225, 0.72);
  left: 4%;
  bottom: 82px;
  transform: rotate(-8deg);
}

.mini-card.yellow {
  background: rgba(255, 215, 93, 0.62);
  right: 6%;
  top: 70px;
  transform: rotate(8deg);
}

.mini-card.mint {
  background: rgba(154, 232, 208, 0.72);
  left: 15%;
  top: 52px;
  transform: rotate(-6deg);
}

.promo-strip {
  background: linear-gradient(90deg, rgba(255, 215, 93, 0.28), rgba(154, 232, 208, 0.24));
  border-top: 1px solid rgba(60, 29, 61, 0.04);
  border-bottom: 1px solid rgba(60, 29, 61, 0.04);
}

.promo-row {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  padding: 18px 0;
  text-align: center;
  font-weight: 700;
  color: var(--plum);
}

.content-section {
  padding: 72px 0;
}

.alt-section {
  background: rgba(255, 255, 255, 0.38);
}

.section-header-row {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 28px;
}

.section-header-row h2,
.feature-grid h2,
.contact-grid h2,
.dashboard-header h2 {
  margin: 10px 0 0;
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1;
}

.filter-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.filter-chip {
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.6);
  color: var(--plum);
  padding: 0.7rem 1rem;
  border-radius: 999px;
  font-weight: 700;
}

.filter-chip.active {
  background: linear-gradient(135deg, var(--pink-500), var(--coral));
  border-color: transparent;
  color: white;
}

.product-grid,
.best-seller-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
}

.product-card,
.best-card,
.info-card,
.checkout-panel,
.cart-panel,
.builder-card,
.panel,
.contact-card {
  background: rgba(255, 252, 249, 0.88);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(60, 29, 61, 0.09);
  box-shadow: var(--shadow);
}

.product-card {
  overflow: hidden;
}

.product-image {
  height: 190px;
  position: relative;
  overflow: hidden;
  display: grid;
  place-items: center;
  background: linear-gradient(180deg, #f9e2ea, #f0c4d3);
}

.product-donut,
.mini-donut {
  position: relative;
  width: 118px;
  height: 118px;
  border-radius: 50%;
  box-shadow: inset -16px -16px 0 rgba(200, 123, 40, 0.12), 0 10px 18px rgba(88, 44, 44, 0.08);
}

.product-donut::before,
.mini-donut::before {
  content: "";
  position: absolute;
  inset: 22px;
  border-radius: 50%;
  background: rgba(110, 60, 45, 0.95);
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
}

.product-donut::after,
.mini-donut::after {
  content: "";
  position: absolute;
  inset: 12px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.2), transparent 60%);
}

.variant-vanilla {
  background: linear-gradient(180deg, #fefaf5, #f9dfe6);
}

.variant-vanilla.product-donut,
.variant-vanilla.mini-donut {
  background: radial-gradient(circle at center, #fffefb 0 45%, #f6e7e3 46% 60%, #e8c58f 61% 100%);
}

.variant-vanilla.product-donut::before,
.variant-vanilla.mini-donut::before {
  background: rgba(101, 50, 34, 0.9);
}

.variant-vanilla.product-donut,
.variant-vanilla.mini-donut {
  box-shadow: inset -14px -12px 0 rgba(205, 146, 88, 0.16), 0 8px 18px rgba(88, 44, 44, 0.08);
}

.variant-vanilla.product-donut::after,
.variant-vanilla.mini-donut::after {
  background-image: radial-gradient(circle, #f4b7ce 0 2px, transparent 3px), radial-gradient(circle, #a8d4ff 0 2px, transparent 3px), radial-gradient(circle, #f7d86a 0 2px, transparent 3px), radial-gradient(circle, #ff8a5b 0 2px, transparent 3px), radial-gradient(circle, #85d7b7 0 2px, transparent 3px);
  background-position: 18% 20%, 40% 38%, 68% 24%, 46% 60%, 72% 72%;
  background-size: 22px 22px;
}

.variant-chocolate {
  background: linear-gradient(180deg, #f6d9d0, #e9b8bb);
}

.variant-chocolate.product-donut,
.variant-chocolate.mini-donut {
  background: radial-gradient(circle at center, #7b3d26 0 52%, #4e2717 53% 100%);
}

.variant-chocolate.product-donut::after,
.variant-chocolate.mini-donut::after {
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.7) 0 2px, transparent 3px), radial-gradient(circle, rgba(255, 255, 255, 0.7) 0 2px, transparent 3px), radial-gradient(circle, rgba(255, 255, 255, 0.7) 0 2px, transparent 3px), radial-gradient(circle, rgba(255, 255, 255, 0.7) 0 2px, transparent 3px);
  background-position: 20% 25%, 50% 42%, 64% 56%, 32% 66%;
  background-size: 18px 18px;
}

.variant-strawberry {
  background: linear-gradient(180deg, #ffdfe7, #f7c5d7);
}

.variant-strawberry.product-donut,
.variant-strawberry.mini-donut {
  background: radial-gradient(circle at center, #ffeff2 0 38%, #f8a9bf 39% 60%, #e7789d 61% 100%);
}

.variant-matcha {
  background: linear-gradient(180deg, #e5f9ee, #cdefe1);
}

.variant-matcha.product-donut,
.variant-matcha.mini-donut {
  background: radial-gradient(circle at center, #f5f4ef 0 42%, #d8f0e1 43% 58%, #9bd2b5 59% 100%);
}

.product-badge {
  position: absolute;
  right: 12px;
  top: 12px;
  background: rgba(255,255,255,0.86);
  border-radius: 999px;
  color: var(--plum);
  padding: 0.45rem 0.7rem;
  font-size: 0.7rem;
  font-weight: 800;
}

.product-body {
  padding: 18px 18px 20px;
}

.product-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 8px;
}

.product-name {
  font-family: "Baloo 2", cursive;
  font-weight: 700;
  font-size: 1.7rem;
  color: var(--plum);
  margin: 0;
}

.product-price {
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--pink-600);
}

.product-body p {
  margin: 0 0 16px;
  color: var(--muted);
  line-height: 1.6;
  min-height: 48px;
}

.product-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 14px;
  color: var(--plum-soft);
  font-size: 0.86rem;
}

.qty-selector {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255, 243, 247, 0.86);
  border: 1px solid rgba(60, 29, 61, 0.06);
}

.qty-selector button {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 0;
  background: #fff;
  color: var(--plum);
  font-size: 1.2rem;
}

.qty-selector span {
  min-width: 22px;
  text-align: center;
  font-weight: 700;
  color: var(--plum);
}

.add-btn {
  width: 100%;
  margin-top: 10px;
}

.best-seller-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.best-card {
  padding: 18px;
}

.best-card .mini-photo {
  height: 180px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  background: linear-gradient(180deg, #f9e2ea, #f0c4d3);
  margin-bottom: 12px;
  overflow: hidden;
}

.cart-thumb {
  width: 88px;
  height: 88px;
  display: grid;
  place-items: center;
  border-radius: 18px;
  background: linear-gradient(180deg, #f9e2ea, #f0c4d3);
  overflow: hidden;
}

.cart-thumb .mini-donut,
.best-card .mini-photo .mini-donut {
  width: 72px;
  height: 72px;
}

.best-card h3 {
  margin: 0 0 8px;
  font-family: "Baloo 2", cursive;
  font-size: 1.8rem;
  color: var(--plum);
}

.best-card .rank {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(255, 215, 93, 0.6);
  font-weight: 800;
  margin-bottom: 10px;
}

.builder-card {
  padding: 22px;
}

.box-builder {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 26px;
}

.builder-card label,
.checkout-form label,
.modal-card label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--plum);
  font-weight: 600;
}

.builder-card select,
.checkout-form input,
.checkout-form textarea,
.modal-card input,
.modal-card textarea {
  width: 100%;
  border: 1px solid rgba(60, 29, 61, 0.12);
  border-radius: 14px;
  background: rgba(255,255,255,0.7);
  padding: 0.9rem 0.95rem;
  color: var(--text);
}

.flavor-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 12px;
  margin-top: 18px;
}

.flavor-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  min-height: 88px;
  padding: 12px 10px;
  border-radius: 10px;
  border: 1px solid rgba(60, 29, 61, 0.08);
  background: rgba(255,255,255,0.5);
}

.flavor-qty-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.flavor-qty-controls button {
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: 1px solid var(--line);
  border-radius: 50%;
  background: #fff;
  color: var(--plum);
  font-size: 1rem;
}

.flavor-qty-controls button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.flavor-item > span,
.flavor-qty-controls span {
  font-size: 0.84rem;
  font-weight: 700;
  color: var(--plum);
}

.flavor-qty-controls span {
  min-width: 16px;
  text-align: center;
}

.flavor-item.selected {
  background: linear-gradient(135deg, rgba(255, 213, 93, 0.3), rgba(154, 232, 208, 0.34));
  border-color: var(--pink-500);
}

.builder-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 243, 247, 0.8);
  border-radius: 18px;
  padding: 16px 18px;
  margin-top: 18px;
  color: var(--plum);
}

.builder-summary strong {
  display: block;
  font-size: 1.5rem;
}

.builder-summary span {
  color: var(--muted);
  font-size: 0.8rem;
}

.preview-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.preview-card h3 {
  margin-top: 0;
  color: var(--plum);
}

.preview-box {
  min-height: 220px;
  border-radius: 24px;
  padding: 22px;
  background: linear-gradient(135deg, rgba(255, 213, 93, 0.22), rgba(154, 232, 208, 0.28));
  border: 1px dashed rgba(60, 29, 61, 0.12);
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 8px;
  margin-bottom: 16px;
}

.preview-box .mini-box-flavor {
  background: rgba(255,255,255,0.78);
  border-radius: 999px;
  padding: 0.5rem 0.75rem;
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--plum);
}

.orders-panel {
  display: grid;
  gap: 18px;
}

.order-card {
  background: rgba(255,255,255,0.75);
  border: 1px solid rgba(60, 29, 61, 0.08);
  border-radius: 24px;
  box-shadow: var(--shadow);
  padding: 22px;
}

.order-card-header,
.order-card-meta,
.order-card-total,
.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 18px;
}

.order-card-header h3 {
  margin: 0;
  color: var(--plum);
  font-family: "Baloo 2", cursive;
  font-size: 2rem;
}

.order-pill,
.status-chip,
.payment-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.45rem 0.8rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.status-chip.pending {
  background: rgba(255, 215, 93, 0.35);
  color: #76530d;
}

.status-chip.confirmed,
.status-chip.ready,
.status-chip.completed,
.payment-pill.paid {
  background: rgba(31, 167, 107, 0.14);
  color: var(--success);
}

.status-chip.preparing,
.status-chip.out {
  background: rgba(242, 109, 154, 0.12);
  color: var(--pink-600);
}

.status-chip.cancelled,
.payment-pill.rejected {
  background: rgba(217, 75, 103, 0.12);
  color: var(--danger);
}

.payment-pill.pending {
  background: rgba(214, 130, 26, 0.12);
  color: var(--warning);
}

.order-progress {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 8px;
  margin: 18px 0;
}

.progress-step {
  padding: 0.55rem 0.5rem;
  border-radius: 12px;
  background: rgba(60, 29, 61, 0.04);
  color: var(--muted);
  font-size: 0.72rem;
  text-align: center;
  font-weight: 700;
}

.progress-step.active {
  background: linear-gradient(135deg, rgba(242, 109, 154, 0.2), rgba(255, 215, 93, 0.28));
  color: var(--plum);
}

.order-items {
  display: grid;
  gap: 8px;
  margin: 16px 0;
}

.order-item {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 10px 12px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.6);
}

.feature-grid,
.contact-grid,
.cart-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: center;
}

.info-cards {
  display: grid;
  gap: 18px;
}

.info-card {
  padding: 22px;
}

.info-card span {
  font-size: 1.8rem;
}

.info-card h3 {
  margin: 10px 0 8px;
  color: var(--plum);
  font-family: "Baloo 2", cursive;
  font-size: 2rem;
}

.contact-list {
  display: grid;
  gap: 12px;
  padding: 0;
  list-style: none;
  color: var(--muted);
  font-weight: 600;
}

.contact-card {
  padding: 22px;
}

.contact-form-card {
  background: rgba(255, 255, 255, 0.65);
  border-radius: 26px;
  box-shadow: 0 18px 32px rgba(124, 72, 82, 0.08);
  padding: 22px 20px;
}

.classic-contact-form {
  display: grid;
  gap: 16px;
}

.classic-field-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.classic-field {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.classic-field label {
  color: var(--plum);
  font-size: 1rem;
  font-weight: 500;
}

.classic-field input,
.classic-field textarea {
  width: 100%;
  background: rgba(255,255,255,0.45);
  border: 1px solid rgba(60, 29, 61, 0.2);
  border-radius: 14px;
  padding: 0.85rem 1rem;
  min-height: 54px;
  font-size: 1rem;
  color: var(--text);
  box-shadow: inset 0 1px 2px rgba(60, 29, 61, 0.04);
}

.classic-field textarea {
  min-height: 116px;
  resize: vertical;
}

.classic-send-btn {
  background: linear-gradient(90deg, #f5649f 0%, #f08775 100%);
  color: white;
  border: none;
  border-radius: 18px;
  min-height: 54px;
  font-size: 1.08rem;
  box-shadow: 0 10px 18px rgba(240, 135, 117, 0.28);
}

.full-message {
  grid-column: 1 / -1;
}

.checkout-form {
  display: grid;
  gap: 18px;
}

.checkout-form h3 {
  margin: 0;
  color: var(--plum);
  font-family: "Baloo 2", cursive;
  font-size: 2.2rem;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.full-span {
  grid-column: 1 / -1;
}

.payment-box,
.totals-panel {
  padding: 18px;
  border-radius: 18px;
  background: rgba(255, 250, 242, 0.8);
  border: 1px solid rgba(60, 29, 61, 0.08);
}

.payment-box h4 {
  margin-top: 0;
  margin-bottom: 12px;
  color: var(--plum);
}

.payment-amount-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
  padding-top: 14px;
  border-top: 1px solid var(--line);
  color: var(--plum);
}

.payment-amount-row strong {
  font-size: 1.15rem;
}

.payment-options {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.payment-option {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.8rem 1rem;
  border: 1px solid rgba(60, 29, 61, 0.08);
  border-radius: 999px;
  background: white;
}

.gcash-info {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid rgba(60, 29, 61, 0.08);
  color: var(--muted);
  line-height: 1.6;
}

.hidden {
  display: none !important;
}

.file-upload {
  margin-top: 10px;
  display: block;
  padding: 0.8rem 1rem;
  border: 1px dashed rgba(60, 29, 61, 0.2);
  border-radius: 14px;
  background: rgba(255,255,255,0.8);
}

.totals-panel {
  display: grid;
  gap: 12px;
}

.totals-panel > div {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  color: var(--plum-soft);
}

.grand-total {
  padding-top: 12px;
  border-top: 1px solid rgba(60, 29, 61, 0.08);
  font-size: 1.1rem;
}

.cart-layout {
  align-items: start;
}

.cart-section {
  display: none;
}

body.cart-page-active main > :not(#cart),
body.cart-page-active .site-footer {
  display: none;
}

body.cart-page-active #cart {
  display: block;
  min-height: calc(100vh - 72px);
  padding-top: 38px;
}

.cart-panel,
.checkout-panel {
  padding: 22px;
}

.cart-panel-title {
  margin: 0 0 16px;
  color: var(--plum);
  font-size: 1.15rem;
}

.cart-items {
  display: grid;
  gap: 14px;
}

.cart-totals-panel {
  margin-top: 18px;
  padding-top: 16px;
  border-top: 1px solid var(--line);
}

.cart-item {
  display: grid;
  grid-template-columns: 88px 1fr auto;
  gap: 16px;
  align-items: center;
  padding: 12px;
  border-radius: 16px;
  background: rgba(255,255,255,0.7);
  border: 1px solid rgba(60, 29, 61, 0.08);
}

.cart-thumb {
  height: 88px;
  border-radius: 18px;
  background-size: cover;
  background-position: center;
}

.cart-content strong {
  display: block;
  font-size: 1.2rem;
  color: var(--plum);
}

.cart-content small {
  color: var(--muted);
}

.cart-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
}

.remove-btn {
  border: 0;
  background: rgba(217, 75, 103, 0.08);
  border-radius: 999px;
  padding: 0.5rem 0.8rem;
  color: var(--danger);
  font-weight: 700;
}

.empty-state {
  padding: 28px;
  border-radius: 18px;
  text-align: center;
  color: var(--muted);
  background: rgba(255,255,255,0.4);
  border: 1px dashed rgba(60, 29, 61, 0.12);
}

.toast {
  position: fixed;
  right: 24px;
  bottom: 24px;
  padding: 0.9rem 1.2rem;
  border-radius: 14px;
  background: rgba(60, 29, 61, 0.9);
  color: white;
  box-shadow: var(--shadow);
  opacity: 0;
  transform: translateY(10px);
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
  z-index: 200;
}

.toast.show {
  opacity: 1;
  transform: translateY(0);
}

.modal {
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  background: rgba(46, 20, 33, 0.48);
  z-index: 100;
}

.modal-card {
  position: relative;
  width: min(460px, calc(100% - 24px));
  background: white;
  border-radius: 28px;
  padding: 26px;
  box-shadow: var(--shadow);
}

.close-modal {
  position: absolute;
  right: 18px;
  top: 12px;
  border: 0;
  background: rgba(60, 29, 61, 0.06);
  width: 38px;
  height: 38px;
  border-radius: 50%;
  font-size: 1.5rem;
  color: var(--plum);
}

.modal-card h3 {
  margin: 0 0 16px;
  color: var(--plum);
  font-family: "Baloo 2", cursive;
  font-size: 2.2rem;
}

.modal-card form {
  display: grid;
  gap: 14px;
}

.dashboard {
  position: fixed;
  inset: 0;
  background: rgba(255, 250, 242, 0.94);
  z-index: 90;
  overflow-y: auto;
}

.dashboard-inner {
  padding: 30px 0 60px;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 22px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  margin-bottom: 26px;
}

.stat-card {
  background: rgba(255,255,255,0.75);
  border: 1px solid rgba(60, 29, 61, 0.08);
  border-radius: 20px;
  padding: 18px 16px;
  box-shadow: var(--shadow);
}

.stat-card .label {
  display: block;
  color: var(--muted);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.stat-card strong {
  display: block;
  margin-top: 8px;
  color: var(--plum);
  font-size: clamp(1.4rem, 2vw, 2.1rem);
}

.dashboard-panels {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 20px;
}

.large-panel {
  grid-column: 1 / -1;
}

.panel {
  padding: 18px;
}

.panel h3 {
  margin-top: 0;
  margin-bottom: 18px;
  color: var(--plum);
  font-family: "Baloo 2", cursive;
  font-size: 2rem;
}

.admin-table,
.sales-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.92rem;
}

.admin-table th,
.admin-table td,
.sales-table th,
.sales-table td {
  padding: 0.8rem 0.6rem;
  border-bottom: 1px solid rgba(60, 29, 61, 0.08);
  text-align: left;
  vertical-align: top;
}

.admin-table .actions,
.product-list .actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.admin-btn,
.product-action,
.order-action {
  border: 0;
  border-radius: 999px;
  padding: 0.5rem 0.8rem;
  font-size: 0.75rem;
  font-weight: 700;
}

.admin-btn.primary,
.product-action.primary,
.order-action.primary {
  background: rgba(242, 109, 154, 0.12);
  color: var(--pink-600);
}

.admin-btn.success,
.product-action.success,
.order-action.success {
  background: rgba(31, 167, 107, 0.12);
  color: var(--success);
}

.admin-btn.warn,
.product-action.warn,
.order-action.warn {
  background: rgba(255, 215, 93, 0.2);
  color: #7a5206;
}

.admin-btn.danger,
.product-action.danger,
.order-action.danger {
  background: rgba(217, 75, 103, 0.12);
  color: var(--danger);
}

.product-list {
  display: grid;
  gap: 14px;
}

.product-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid rgba(60, 29, 61, 0.08);
}

.product-row:last-child {
  border-bottom: none;
}

.product-row strong {
  display: block;
  color: var(--plum);
}

.product-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 16px;
}

.product-form input,
.product-form textarea,
.product-form select {
  width: 100%;
  border: 1px solid rgba(60, 29, 61, 0.12);
  border-radius: 12px;
  padding: 0.7rem 0.8rem;
  background: rgba(255,255,255,0.8);
}

.product-form textarea {
  resize: vertical;
}

.sales-table td {
  color: var(--muted);
}

.site-footer {
  padding: 30px 0 52px;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  padding-top: 18px;
  border-top: 1px solid rgba(60, 29, 61, 0.08);
  color: var(--muted);
}

@media (max-width: 1100px) {
  .header-inner {
    display: flex;
    justify-content: space-between;
  }

  .main-nav {
    display: none;
    position: absolute;
    left: 20px;
    right: 20px;
    top: 80px;
    flex-direction: column;
    align-items: flex-start;
    background: rgba(255,255,255,0.96);
    border: 1px solid rgba(60,29,61,0.08);
    border-radius: 18px;
    padding: 18px;
    box-shadow: var(--shadow);
  }

  .main-nav.open {
    display: flex;
  }

  .main-nav a {
    width: 100%;
    border-color: transparent;
    border-bottom-color: var(--line);
    border-radius: 0;
    background: transparent;
  }

  .nav-toggle {
    display: block;
  }

  .hero-grid,
  .box-builder,
  .feature-grid,
  .contact-grid,
  .cart-layout,
  .dashboard-panels,
  .stats-grid,
  .product-grid,
  .best-seller-grid {
    grid-template-columns: 1fr;
  }

  .promo-row {
    grid-template-columns: 1fr;
  }

  .footer-inner,
  .dashboard-header,
  .section-header-row {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 640px) {
  .header-inner {
    flex-wrap: wrap;
  }

  .header-actions {
    width: 100%;
    justify-content: flex-end;
  }

  .cta-row {
    flex-direction: column;
  }

  .form-grid,
  .product-form {
    grid-template-columns: 1fr;
  }

  .cart-item {
    grid-template-columns: 1fr;
  }

  .product-grid {
    grid-template-columns: 1fr;
  }
}
