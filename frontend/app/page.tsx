'use client'

import { useState } from 'react'
import {
  Activity,
  AlertTriangle,
  ArrowUpRight,
  Bell,
  BookOpen,
  ChevronDown,
  ClipboardList,
  Clock3,
  FileCheck2,
  FolderKanban,
  LayoutDashboard,
  Menu,
  Search,
  Settings2,
  ShieldCheck,
  Ticket,
  Users,
  X,
} from 'lucide-react'

const nav = [
  { label: 'Operations', icon: LayoutDashboard, section: 'OVERVIEW' },
  { label: 'Requests', icon: ClipboardList, section: 'WORK', count: '15' },
  { label: 'Tickets', icon: Ticket, section: 'WORK' },
  { label: 'Agent Console', icon: Activity, section: 'WORK' },
  { label: 'Knowledge Base', icon: BookOpen, section: 'KNOWLEDGE' },
  { label: 'Audit Trail', icon: ShieldCheck, section: 'GOVERNANCE' },
]

const requestRows = [
  ['REQ-03', 'Aditi Sharma', 'Locked out after 6 password attempts', 'Password', 'KB-01', 'Resolved', 'Today'],
  ['REQ-04', 'Vikram Chawla', 'Non-catalog software request', 'Software', '—', 'Human review', 'Today'],
  ['REQ-08', 'Maya Patel', 'Suspected phishing incident', 'Security', 'KB-08', 'Escalated', 'Yesterday'],
  ['REQ-10', 'Rohan Mehta', 'Admin access request', 'Access', '—', 'Human review', 'Yesterday'],
  ['REQ-13', 'Sara Iyer', 'Laptop issue at 2 years', 'Laptop', 'KB-03', 'Human review', '2 days ago'],
]

const bars = [34, 48, 42, 68, 51, 74, 62, 86, 58, 71, 64, 92, 78, 88]

function Status({ children, tone = 'neutral' }: { children: React.ReactNode; tone?: string }) {
  return <span className={`status status-${tone}`}><span className="status-dot" />{children}</span>
}

export default function Page() {
  const [active, setActive] = useState('Operations')
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="app-shell">
      <aside className={`sidebar ${mobileOpen ? 'sidebar-open' : ''}`}>
        <div className="brand">
          <div className="brand-mark">V</div>
          <div><strong>VERIDIAN</strong><span>Internal Service Agent</span></div>
          <button className="mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close navigation"><X size={18} /></button>
        </div>
        <nav className="nav-list" aria-label="Primary navigation">
          {['OVERVIEW', 'WORK', 'KNOWLEDGE', 'GOVERNANCE'].map((section) => (
            <div className="nav-group" key={section}>
              <div className="nav-section">{section}</div>
              {nav.filter((item) => item.section === section).map((item) => {
                const Icon = item.icon
                return <button key={item.label} className={`nav-item ${active === item.label ? 'active' : ''}`} onClick={() => { setActive(item.label); setMobileOpen(false) }}><Icon size={16} /><span>{item.label}</span>{item.count && <em>{item.count}</em>}</button>
              })}
            </div>
          ))}
        </nav>
        <div className="sidebar-foot"><div className="online-dot" /><div><b>Internal Operations</b><span>Production environment</span></div><Settings2 size={16} /></div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <button className="mobile-menu" onClick={() => setMobileOpen(true)} aria-label="Open navigation"><Menu size={20} /></button>
          <div className="crumb"><span>Workspace</span><span>/</span><b>{active}</b></div>
          <div className="top-actions"><button className="search-button"><Search size={16} /><span>Search anything</span><kbd>⌘ K</kbd></button><button className="icon-button" aria-label="Notifications"><Bell size={18} /><i /></button><div className="avatar">IS</div><div className="user-label"><b>IT Support</b><span>Operator</span></div><ChevronDown size={14} /></div>
        </header>

        <div className="content">
          <div className="page-heading"><div><div className="eyebrow">MONDAY, 21 SEPTEMBER 2026</div><h1>Operations</h1><p>Monitor employee requests, agent decisions, and active support work.</p></div><button className="outline-button"><Clock3 size={15} /> Last 30 days <ChevronDown size={14} /></button></div>

          <section className="metric-grid" aria-label="Operational metrics">
            <Metric label="Open requests" value="—" note="Connect API to load" icon={ClipboardList} />
            <Metric label="Active tickets" value="—" note="Connect API to load" icon={Ticket} />
            <Metric label="Resolved" value="—" note="Connect API to load" icon={FileCheck2} />
            <Metric label="Human review" value="—" note="Connect API to load" icon={Users} accent />
          </section>

          <div className="dashboard-grid">
            <section className="panel activity-panel"><PanelHead title="Request activity" meta="API data required" /><div className="chart"><div className="chart-y"><span>100</span><span>75</span><span>50</span><span>25</span><span>0</span></div><div className="chart-area"><div className="grid-lines" /> <div className="bars">{bars.map((height, i) => <div className="bar-wrap" key={i}><div className="bar" style={{ height: `${height}%` }} /></div>)}</div><div className="chart-x"><span>Sep 08</span><span>Sep 12</span><span>Sep 16</span><span>Sep 21</span></div></div></div><div className="legend"><span><i className="legend-blue" />Requests received</span><span><i className="legend-gray" />Resolved</span></div></section>
            <section className="panel mix-panel"><PanelHead title="Request mix" meta="By category" /><div className="mix-list">{[['Laptop', 32], ['Password', 24], ['Security', 18], ['Software', 14], ['VPN', 8], ['Other', 4]].map(([name, value]) => <div className="mix-row" key={name as string}><div><span>{name}</span><b>{value}%</b></div><div className="mix-track"><div style={{ width: `${value}%` }} /></div></div>)}</div><button className="text-button">View all requests <ArrowUpRight size={14} /></button></section>
          </div>

          <section className="panel table-panel"><PanelHead title="Active work" meta="Operational queue" action="View ticket queue" /><div className="table-scroll"><table><thead><tr><th>Ticket</th><th>Employee</th><th>Issue</th><th>Status</th><th>Team</th><th>Updated</th></tr></thead><tbody>{requestRows.map((row) => <tr key={row[0]}><td><b className="mono">{row[0]}</b></td><td><div className="person"><div className="mini-avatar">{row[1].split(' ').map((x) => x[0]).join('')}</div>{row[1]}</div></td><td className="issue">{row[2]}</td><td><Status tone={row[5] === 'Escalated' ? 'danger' : row[5] === 'Resolved' ? 'success' : 'warning'}>{row[5]}</Status></td><td className="muted">{row[3]}</td><td className="muted">{row[6]}</td></tr>)}</tbody></table></div></section>

          <div className="bottom-grid"><section className="panel agent-panel"><PanelHead title="Recent agent activity" meta="Latest decisions" /><div className="agent-list">{[['09:42', 'REQ-03', 'Resolved', 'KB-01', 'Password reset'], ['09:18', 'REQ-08', 'Escalated', 'KB-08', 'Route to Security'], ['Yesterday', 'REQ-13', 'Human review', 'KB-03', 'Route to IT']].map((item) => <div className="agent-row" key={item[1]}><span className="time">{item[0]}</span><b className="mono">{item[1]}</b><span>{item[2]}</span><span className="policy">{item[3]}</span><span className="muted">{item[4]}</span></div>)}</div></section><section className="panel attention-panel"><PanelHead title="Needs attention" meta="Human review" /><div className="attention-item"><div className="attention-icon"><AlertTriangle size={17} /></div><div><b>5 requests require review</b><p>Decisions with missing or insufficient policy coverage.</p></div><ArrowUpRight size={15} /></div><div className="attention-item"><div className="attention-icon neutral"><FolderKanban size={17} /></div><div><b>Ticket queue is ready</b><p>Review active work and recent escalations.</p></div><ArrowUpRight size={15} /></div></section></div>
        </div>
      </main>
    </div>
  )
}

function Metric({ label, value, note, icon: Icon, accent = false }: { label: string; value: string; note: string; icon: React.ElementType; accent?: boolean }) { return <div className="metric"><div className={`metric-icon ${accent ? 'accent' : ''}`}><Icon size={17} /></div><div><span>{label}</span><strong>{value}</strong><small>{note}</small></div></div> }
function PanelHead({ title, meta, action }: { title: string; meta: string; action?: string }) { return <div className="panel-head"><div><h2>{title}</h2><span>{meta}</span></div>{action && <button className="text-button">{action} <ArrowUpRight size={14} /></button>}</div> }
