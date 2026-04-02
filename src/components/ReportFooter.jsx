export default function ReportFooter() {
  return (
    <div className="flex items-center justify-between pt-12 border-t border-outline-variant/10">
      <div className="flex items-center gap-12">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-bold text-on-surface-variant/40 tracking-[0.2em] mb-2">Compliance Rating</span>
          <div className="flex gap-1">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="w-3 h-3 rounded-full bg-primary"></span>
            ))}
            <span className="w-3 h-3 rounded-full bg-surface-container-highest"></span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-bold text-on-surface-variant/40 tracking-[0.2em] mb-2">Data Integrity</span>
          <span className="text-sm font-bold text-primary">AES-256 Encrypted</span>
        </div>
      </div>
      <div className="flex gap-6">
        <a className="text-xs font-semibold text-on-surface-variant/60 hover:text-primary transition-colors" href="#">
          Audit logs
        </a>
        <a className="text-xs font-semibold text-on-surface-variant/60 hover:text-primary transition-colors" href="#">
          Privacy protocol
        </a>
        <a className="text-xs font-semibold text-on-surface-variant/60 hover:text-primary transition-colors" href="#">
          Vulnerability disclosure
        </a>
      </div>
    </div>
  );
}
