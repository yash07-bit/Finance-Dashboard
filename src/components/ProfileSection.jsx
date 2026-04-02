export default function ProfileSection() {
  return (
    <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-2xl p-8 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-8">
          <div className="relative group">
            <img
              alt="Alexander Pierce"
              className="w-24 h-24 rounded-2xl object-cover ring-4 ring-surface-container-low"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSpeXadTh0-0jxwGnK9o2RIIszQdE2hsZdiqZmO_0Dohf1rRM8rglWqucpI52RKuXkhEwN2dPP2eXOG7oMSyGUADHxtvlimBXX0V2iu0St5EDqxy4mCP_ioaKlPUH3D-Jdnk3o8dwKA5DPlz65e6na8tacfE4uWnJG2nbeoPi9xGrTgR4q1Fzme8btngjYmWnBdNO-R_3__fIYhJz6mppWxnqkicc5t7RsH--cnXeNb4ChlX0uW6ZU-B2Va3EsMrXhkFnE-yEKPR4"
            />
            <button className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-sm">edit</span>
            </button>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-primary">Alexander Pierce</h3>
            <p className="text-on-surface-variant font-medium">alex@lumina.finance</p>
            <div className="mt-3 flex items-center gap-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-secondary-fixed text-on-secondary-fixed">
                Lumina Desk
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary-fixed text-on-primary-fixed">
                Verified Member
              </span>
            </div>
          </div>
        </div>
        <button className="text-secondary font-semibold hover:underline flex items-center gap-1">
          <span>Edit Profile</span>
        </button>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-x-12 gap-y-8">
        <div className="space-y-1">
          <label className="text-[10px] font-bold uppercase tracking-wider text-outline">Organization</label>
          <p className="text-on-surface font-semibold text-lg">Lumina Desk</p>
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-bold uppercase tracking-wider text-outline">Account Type</label>
          <div className="flex items-center gap-2">
            <p className="text-on-surface font-semibold text-lg">Personal Access</p>
            <span className="material-symbols-outlined text-blue-600 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified
            </span>
          </div>
        </div>
        <div className="col-span-2 pt-6 grid grid-cols-2 gap-4">
          <div className="bg-surface-container-low rounded-xl p-4">
            <p className="text-[10px] font-bold uppercase tracking-wider text-outline mb-1">Member Since</p>
            <p className="text-sm font-semibold text-on-surface">January 2024</p>
          </div>
          <div className="bg-surface-container-low rounded-xl p-4">
            <p className="text-[10px] font-bold uppercase tracking-wider text-outline mb-1">Account Status</p>
            <p className="text-sm font-semibold text-on-surface">Active and Verified</p>
          </div>
        </div>
      </div>
    </div>
  );
}
