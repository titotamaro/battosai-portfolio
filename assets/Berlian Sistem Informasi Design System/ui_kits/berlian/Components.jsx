// PT Berlian Sistem Informasi — Shared UI Components
// Load with <script type="text/babel" src="Components.jsx">

const BSI_COLORS = {
  brand900: '#061540', brand800: '#0d2461', brand700: '#12348a',
  brand600: '#1a46b8', brand500: '#1a56db', brand400: '#1e7bc4',
  brand300: '#3ba3e8', brand100: '#dbeafe', brand50: '#eff6ff',
  neutral900: '#0f172a', neutral700: '#334155', neutral600: '#475569',
  neutral500: '#64748b', neutral400: '#94a3b8', neutral300: '#cbd5e1',
  neutral200: '#e2e8f0', neutral100: '#f1f5f9', neutral50: '#f8fafc',
  white: '#ffffff',
  success: '#16a34a', warning: '#d97706', error: '#dc2626',
};

// ── Button ────────────────────────────────────────────────────
function BSIButton({ children, variant = 'primary', size = 'md', onClick, style = {} }) {
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: 6,
    fontFamily: "'Inter', sans-serif", fontWeight: 600, border: 'none',
    cursor: 'pointer', transition: 'all 0.15s ease-in-out', textDecoration: 'none',
  };
  const sizes = {
    sm: { fontSize: 12, padding: '6px 14px', borderRadius: 6 },
    md: { fontSize: 14, padding: '9px 20px', borderRadius: 6 },
    lg: { fontSize: 16, padding: '12px 28px', borderRadius: 6 },
  };
  const variants = {
    primary: { background: BSI_COLORS.brand500, color: BSI_COLORS.white },
    secondary: { background: 'transparent', color: BSI_COLORS.brand500, border: `1.5px solid ${BSI_COLORS.brand500}` },
    ghost: { background: 'transparent', color: BSI_COLORS.neutral600 },
    white: { background: BSI_COLORS.white, color: BSI_COLORS.brand800 },
  };
  const [hov, setHov] = React.useState(false);
  const hovStyle = hov ? (variant === 'primary' ? { background: BSI_COLORS.brand700 } : variant === 'secondary' ? { background: BSI_COLORS.brand50 } : { background: BSI_COLORS.neutral100 }) : {};
  return (
    <button onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ ...base, ...sizes[size], ...variants[variant], ...hovStyle, ...style }}>
      {children}
    </button>
  );
}

// ── Badge ────────────────────────────────────────────────────
function BSIBadge({ children, color = 'brand' }) {
  const map = {
    brand: { bg: BSI_COLORS.brand50, text: BSI_COLORS.brand600 },
    success: { bg: '#f0fdf4', text: BSI_COLORS.success },
    warning: { bg: '#fffbeb', text: BSI_COLORS.warning },
    error: { bg: '#fef2f2', text: BSI_COLORS.error },
    dark: { bg: BSI_COLORS.brand800, text: BSI_COLORS.white },
  };
  const c = map[color] || map.brand;
  return (
    <span style={{ display: 'inline-block', padding: '2px 9px', borderRadius: 9999, fontSize: 11, fontWeight: 600, fontFamily: "'Inter', sans-serif", background: c.bg, color: c.text }}>
      {children}
    </span>
  );
}

// ── Navbar ────────────────────────────────────────────────────
function BSINavbar({ current, onNav }) {
  const links = ['Beranda', 'Layanan', 'Dashboard', 'Kontak'];
  return (
    <nav style={{ background: BSI_COLORS.brand800, padding: '0 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64, boxShadow: '0 2px 12px rgba(6,21,64,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
      <img src="../../assets/logo-white-text.png" style={{ height: 36 }} alt="PT Berlian Sistem Informasi" />
      <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
        {links.map(l => (
          <button key={l} onClick={() => onNav(l)}
            style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 600, color: current === l ? BSI_COLORS.brand300 : 'rgba(255,255,255,0.78)', background: current === l ? 'rgba(59,163,232,0.12)' : 'transparent', border: 'none', cursor: 'pointer', padding: '8px 14px', borderRadius: 6, transition: 'all 0.15s' }}>
            {l}
          </button>
        ))}
      </div>
      <BSIButton variant="white" size="sm">Hubungi Kami</BSIButton>
    </nav>
  );
}

// ── Footer ────────────────────────────────────────────────────
function BSIFooter() {
  return (
    <footer style={{ background: BSI_COLORS.brand900, padding: '40px 48px 24px', marginTop: 0 }}>
      <div style={{ display: 'flex', gap: 48, marginBottom: 32, flexWrap: 'wrap' }}>
        <div style={{ flex: 2, minWidth: 200 }}>
          <img src="../../assets/logo-all-white.png" style={{ height: 40, marginBottom: 12 }} alt="Logo" />
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, maxWidth: 280 }}>
            Solusi teknologi informasi terpercaya untuk transformasi digital bisnis Anda.
          </p>
        </div>
        {[
          { title: 'Layanan', items: ['Konsultasi IT', 'Pengembangan Sistem', 'Infrastruktur Cloud', 'Keamanan Siber'] },
          { title: 'Perusahaan', items: ['Tentang Kami', 'Tim Kami', 'Karir', 'Blog'] },
          { title: 'Kontak', items: ['Jakarta, Indonesia', 'info@berlian.co.id', '+62 21 1234 5678'] },
        ].map(col => (
          <div key={col.title} style={{ flex: 1, minWidth: 120 }}>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>{col.title}</div>
            {col.items.map(item => (
              <div key={item} style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.65)', marginBottom: 8 }}>{item}</div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 16, fontFamily: "'Inter', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.35)', textAlign: 'center' }}>
        © 2024 PT Berlian Sistem Informasi. Hak cipta dilindungi.
      </div>
    </footer>
  );
}

// ── ServiceCard ────────────────────────────────────────────────
function BSIServiceCard({ icon, title, desc, tag }) {
  const [hov, setHov] = React.useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: BSI_COLORS.white, borderRadius: 10, border: `1px solid ${hov ? BSI_COLORS.brand300 : BSI_COLORS.neutral200}`, boxShadow: hov ? '0 8px 32px rgba(13,36,97,0.14)' : '0 2px 8px rgba(13,36,97,0.07)', padding: 24, transition: 'all 0.2s', transform: hov ? 'translateY(-2px)' : 'none', flex: 1, minWidth: 180 }}>
      <div style={{ width: 44, height: 44, background: BSI_COLORS.brand50, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
        <i data-lucide={icon} style={{ color: BSI_COLORS.brand500, width: 22, height: 22 }}></i>
      </div>
      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 16, fontWeight: 700, color: BSI_COLORS.neutral900, textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: 8 }}>{title}</div>
      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: BSI_COLORS.neutral600, lineHeight: 1.6, marginBottom: 12 }}>{desc}</div>
      {tag && <BSIBadge color="brand">{tag}</BSIBadge>}
    </div>
  );
}

// ── StatItem ────────────────────────────────────────────────
function BSIStatItem({ value, label }) {
  return (
    <div style={{ textAlign: 'center', flex: 1 }}>
      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '2.5rem', fontWeight: 800, color: BSI_COLORS.brand300, lineHeight: 1 }}>{value}</div>
      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.65)', marginTop: 6 }}>{label}</div>
    </div>
  );
}

// ── Dashboard Sidebar ─────────────────────────────────────────
function BSISidebar({ active, onNav }) {
  const items = [
    { icon: 'layout-dashboard', label: 'Dashboard' },
    { icon: 'users', label: 'Klien' },
    { icon: 'briefcase', label: 'Proyek' },
    { icon: 'file-text', label: 'Laporan' },
    { icon: 'server', label: 'Infrastruktur' },
    { icon: 'settings', label: 'Pengaturan' },
  ];
  return (
    <div style={{ width: 220, background: BSI_COLORS.brand800, minHeight: '100%', padding: '24px 12px', display: 'flex', flexDirection: 'column', gap: 4 }}>
      {items.map(({ icon, label }) => {
        const isActive = active === label;
        return (
          <button key={label} onClick={() => onNav(label)}
            style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderRadius: 8, border: 'none', cursor: 'pointer', background: isActive ? 'rgba(59,163,232,0.18)' : 'transparent', color: isActive ? BSI_COLORS.brand300 : 'rgba(255,255,255,0.65)', fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: isActive ? 600 : 400, transition: 'all 0.15s', textAlign: 'left' }}>
            <i data-lucide={icon} style={{ width: 17, height: 17, flexShrink: 0 }}></i>
            {label}
          </button>
        );
      })}
      <div style={{ flex: 1 }}></div>
      <div style={{ padding: '12px 14px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 2 }}>Masuk sebagai</div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>Admin Berlian</div>
      </div>
    </div>
  );
}

// ── DashCard ─────────────────────────────────────────────────
function BSIDashCard({ title, value, sub, icon, accent }) {
  return (
    <div style={{ background: BSI_COLORS.white, borderRadius: 10, border: `1px solid ${BSI_COLORS.neutral200}`, boxShadow: '0 2px 8px rgba(13,36,97,0.07)', padding: 20, flex: 1, minWidth: 140 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, color: BSI_COLORS.neutral500, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{title}</div>
        <div style={{ width: 32, height: 32, borderRadius: 8, background: accent || BSI_COLORS.brand50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <i data-lucide={icon} style={{ width: 16, height: 16, color: BSI_COLORS.brand500 }}></i>
        </div>
      </div>
      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.75rem', fontWeight: 800, color: BSI_COLORS.neutral900, lineHeight: 1 }}>{value}</div>
      {sub && <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: BSI_COLORS.neutral500, marginTop: 6 }}>{sub}</div>}
    </div>
  );
}

// ── FormField ─────────────────────────────────────────────────
function BSIFormField({ label, placeholder, type = 'text', value, onChange }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{ display: 'block', fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: BSI_COLORS.neutral700, marginBottom: 5 }}>{label}</label>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{ width: '100%', fontFamily: "'Inter', sans-serif", fontSize: 14, color: BSI_COLORS.neutral900, background: BSI_COLORS.white, border: `1.5px solid ${focus ? BSI_COLORS.brand500 : BSI_COLORS.neutral300}`, borderRadius: 6, padding: '9px 12px', outline: 'none', boxShadow: focus ? '0 0 0 3px rgba(26,86,219,0.12)' : 'none', transition: 'all 0.15s' }} />
    </div>
  );
}

Object.assign(window, {
  BSIButton, BSIBadge, BSINavbar, BSIFooter,
  BSIServiceCard, BSIStatItem, BSISidebar,
  BSIDashCard, BSIFormField, BSI_COLORS,
});
