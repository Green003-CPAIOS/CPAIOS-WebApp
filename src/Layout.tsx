import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="bg-gray-100 shadow px-6 py-4 flex gap-4">
        <Link to="/talkdeck" className="hover:underline">TalkDeck</Link>
        <Link to="/prompt-lab" className="hover:underline">Prompt Lab</Link>
        <Link to="/memory" className="hover:underline">Memory</Link>
      </nav>
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
