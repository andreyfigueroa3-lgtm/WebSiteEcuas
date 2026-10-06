export default function Header({ breadcrumb = [] }) {
  if (breadcrumb.length === 0) return null;

  return (
    <div className="bg-gray-100 px-6 py-3 border-b border-gray-300">
      <div className="max-w-7xl mx-auto">
        <nav className="text-sm text-gray-600">
          {breadcrumb.map((item, i) => (
            <span key={i}>
              <span className="text-primary font-semibold">{item}</span>
              {i < breadcrumb.length - 1 && (
                <span className="mx-2">/</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}
