import { useState, useMemo, useEffect } from 'react'
import { House, Megaphone, Newspaper, FileText, Landmark, Info, ExternalLink, Flag, Search, TriangleAlert } from 'lucide-react'
import { PROTESTS, NEWS, ISSUES, HELP, CATEGORIES } from './demo'
import { L, useT, STRINGS } from './i18n'

const PAGES = [['home', House], ['protests', Megaphone], ['news', Newspaper], ['issues', FileText], ['help', Landmark], ['about', Info]]

function Logo({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="Jan Awaaz">
      <rect width="64" height="64" rx="16" fill="#12284c" />
      <path d="M10 8h44a4 4 0 014 4v22a4 4 0 01-4 4H30l-8 7v-7H10a4 4 0 01-4-4V12a4 4 0 014-4z" fill="#f59a23" transform="translate(0 2) scale(.9) translate(3 0)" />
      <circle cx="22" cy="21" r="4" fill="#fff" /><circle cx="32" cy="19" r="4.5" fill="#fff" /><circle cx="42" cy="21" r="4" fill="#fff" />
      <path d="M14 32c1-5 5-6 8-6s6 1 7 4c1-3 4-4 7-4s7 1 8 6z" fill="#138808" />
    </svg>
  )
}

const Demo = () => { const { t } = useT(); return <span className="tag demo">{t('demo')}</span> }
const Notice = ({ children }) => <p className="notice"><TriangleAlert size={16} aria-hidden="true" /> {children}</p>
const Empty = ({ text }) => <p className="empty">{text}</p>
const Loading = () => { const { t } = useT(); return <p className="empty" role="status">{t('loading')}</p> }

function useLoad() {
  const [loading, setLoading] = useState(true)
  useEffect(() => { const x = setTimeout(() => setLoading(false), 300); return () => clearTimeout(x) }, [])
  return loading
}

function Source({ s }) {
  const { t } = useT()
  return s.url ? <a href={s.url} target="_blank" rel="noopener noreferrer">{s.name} <ExternalLink size={12} aria-hidden="true" /></a> : <span>{s.name} ({t('nolink')}) </span>
}

function HomePage({ go, soon }) {
  const { t } = useT()
  const [q, setQ] = useState('')
  return (
    <>
      <section className="hero">
        <h1>जन आवाज़</h1>
        <p>{t('tagline')}</p>
        <form role="search" onSubmit={(e) => { e.preventDefault(); go('protests', q) }}>
          <label htmlFor="hs" className="sr">{t('search_ph')}</label>
          <input id="hs" value={q} onChange={(e) => setQ(e.target.value)} placeholder={t('search_ph')} />
          <button type="submit" aria-label={t('search')}><Search size={18} /></button>
        </form>
      </section>
      <Notice>{t('notice_indep')}</Notice>
      <h2>{t('latest_news')} <Demo /></h2>
      {NEWS.map((n) => <NewsCard key={n.id} n={n} soon={soon} />)}
      <h2>{t('current_protests')} <Demo /></h2>
      {PROTESTS.slice(0, 1).map((p) => <ProtestCard key={p.id} p={p} />)}
      <button className="btn" onClick={() => go('protests')}>{t('see_all')}</button>
      <h2>{t('need_complaint')}</h2>
      <button className="btn alt" onClick={() => go('help')}>{t('open_help')}</button>
    </>
  )
}

function ProtestCard({ p }) {
  const { t } = useT()
  return (
    <article className="card">
      <Demo /> <span className="tag">{t('c_' + p.topic)}</span>
      <h3>{p.issue}</h3>
      <p>{p.city}, {p.state} · {p.date} · {p.status}</p>
      <p>{t('organiser')}: {p.organiser}</p>
      <strong>{t('demands')}</strong><ul>{p.demands.map((d) => <li key={d}>{d}</li>)}</ul>
      <strong>{t('responses')}</strong>
      {p.responses.length ? p.responses.map((r) => <p key={r.party}>{r.party}: {r.text}</p>) : <p>{t('no_resp')}</p>}
      <p className="muted">{t('sources')}: {p.sources.length ? p.sources.map((s) => <Source key={s.name} s={s} />) : t('none_demo')} · {t('updated')} {p.updated}</p>
    </article>
  )
}

function ProtestsPage({ initialQ }) {
  const { t } = useT()
  const loading = useLoad()
  const [q, setQ] = useState(initialQ || ''), [state, setState] = useState(''), [topic, setTopic] = useState(''), [from, setFrom] = useState('')
  const states = [...new Set(PROTESTS.map((p) => p.state))]
  const list = useMemo(() => PROTESTS.filter((p) =>
    (!state || p.state === state) && (!topic || p.topic === topic) && (!from || p.date >= from) &&
    (`${p.issue} ${p.city} ${p.state}`.toLowerCase().includes(q.toLowerCase()))), [q, state, topic, from])
  return (
    <>
      <h1>{t('live_title')} <Demo /></h1>
      <Notice>{t('notice_protest')}</Notice>
      <div className="filters">
        <input aria-label={t('search_protest')} placeholder={t('search_protest')} value={q} onChange={(e) => setQ(e.target.value)} />
        <select aria-label={t('state')} value={state} onChange={(e) => setState(e.target.value)}><option value="">{t('all_states')}</option>{states.map((s) => <option key={s}>{s}</option>)}</select>
        <select aria-label={t('topic')} value={topic} onChange={(e) => setTopic(e.target.value)}><option value="">{t('all_topics')}</option>{CATEGORIES.map((c) => <option key={c} value={c}>{t('c_' + c)}</option>)}</select>
        <input type="date" aria-label={t('from_date')} value={from} onChange={(e) => setFrom(e.target.value)} />
      </div>
      <p className="muted">{t('map_na')}</p>
      {loading ? <Loading /> : list.length ? list.map((p) => <ProtestCard key={p.id} p={p} />) : <Empty text={t('no_match')} />}
    </>
  )
}

function NewsCard({ n, soon }) {
  const { t } = useT()
  return (
    <article className="card">
      <span className={`tag ${n.verified ? 'ok' : 'warn'}`}>{n.verified ? t('verified') : t('unverified')}</span> <Demo />
      <h3>{n.title}</h3>
      <p>{n.summary}</p>
      <p className="muted">{t('published')} {n.published} · {t('updated')} {n.updated}</p>
      <p className="muted">{t('sources')}: {n.sources.length ? n.sources.map((s) => <Source key={s.name} s={s} />) : t('none_yet')}</p>
      <p className="muted">{t('other_sides')}: {n.sides}</p>
      <button className="link" onClick={() => soon(t('soon_misinfo'))}><Flag size={14} aria-hidden="true" /> {t('report_misinfo')}</button>
    </article>
  )
}

function NewsPage({ soon }) {
  const { t } = useT()
  const loading = useLoad()
  return (
    <>
      <h1>{t('news_title')}</h1>
      <Notice>{t('notice_news')}</Notice>
      {loading ? <Loading /> : NEWS.map((n) => <NewsCard key={n.id} n={n} soon={soon} />)}
    </>
  )
}

function IssuesPage({ soon }) {
  const { t } = useT()
  const empty = { title: '', category: '', state: '', district: '', description: '' }
  const [items, setItems] = useState(ISSUES), [f, setF] = useState(empty), [err, setErr] = useState({})
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    const er = {}
    if (f.title.trim().length < 5) er.title = 'err_title'
    if (!f.category) er.category = 'err_cat'
    if (!f.state.trim()) er.state = 'err_state'
    if (f.description.trim().length < 20) er.description = 'err_desc'
    if (/\b\d{10}\b/.test(f.description)) er.description = 'err_phone'
    setErr(er)
    if (Object.keys(er).length) return
    setItems([{ ...f, id: String(Date.now()), status: t('pending') }, ...items])
    setF(empty)
  }
  const Err = ({ k }) => err[k] ? <span className="error" role="alert">{t(err[k])}</span> : null
  const field = (k, label) => (
    <div className="field"><label htmlFor={k}>{label}</label>
      <input id={k} value={f[k]} onChange={set(k)} aria-invalid={!!err[k]} /><Err k={k} /></div>
  )
  return (
    <>
      <h1>{t('issues_title')}</h1>
      <Notice>{t('notice_issue')}</Notice>
      <form className="card" onSubmit={submit} noValidate>
        {field('title', t('f_title'))}
        <div className="field"><label htmlFor="category">{t('f_cat')}</label>
          <select id="category" value={f.category} onChange={set('category')}><option value="">{t('choose')}</option>{CATEGORIES.map((c) => <option key={c} value={c}>{t('c_' + c)}</option>)}</select><Err k="category" /></div>
        {field('state', t('f_state'))}{field('district', t('f_district'))}
        <div className="field"><label htmlFor="description">{t('f_desc')}</label>
          <textarea id="description" rows="4" value={f.description} onChange={set('description')} /><Err k="description" /></div>
        <button className="btn" type="button" onClick={() => soon(t('soon_photo'))}>{t('add_photo')}</button>
        <button className="btn alt" type="submit">{t('submit')}</button>
        <p className="muted">{t('form_note')}</p>
      </form>
      <h2>{t('reports')} <Demo /></h2>
      {items.length ? items.map((i) => (
        <article className="card" key={i.id}><span className="tag warn">{t('user_sub')}</span>
          <h3>{i.title}</h3><p>{t('c_' + i.category)} · {i.district && `${i.district}, `}{i.state}</p><p>{i.description}</p>
          <p className="muted">{i.status}</p>
          <button className="link" onClick={() => soon(t('soon_abuse'))}><Flag size={14} aria-hidden="true" /> {t('report_abuse')}</button>
        </article>)) : <Empty text={t('no_reports')} />}
    </>
  )
}

function HelpPage() {
  const { t } = useT()
  const [cat, setCat] = useState('')
  const list = HELP.filter((h) => !cat || h.cat === cat)
  return (
    <>
      <h1>{t('help_title')}</h1>
      <Notice>{t('notice_help')}</Notice>
      <div className="chips">{['', ...CATEGORIES].map((c) => <button key={c} className={`chip ${cat === c ? 'on' : ''}`} onClick={() => setCat(c)}>{c ? t('c_' + c) : t('all')}</button>)}</div>
      {list.map((h) => (
        <article className="card" key={h.cat + h.name}>
          <span className="tag">{t('c_' + h.cat)}</span><h3>{h.name}</h3><p>{h.note}</p>
          <a className="btn" href={h.url} target="_blank" rel="noopener noreferrer">{t('open_site')} <ExternalLink size={14} aria-hidden="true" /></a>
          <p className="muted">{t('last_verified')}: {h.lastVerified || t('not_verified')}</p>
        </article>))}
    </>
  )
}

function AboutPage() {
  const { t } = useT()
  return (
    <>
      <h1>{t('about_title')}</h1>
      <div className="card">
        <p>{t('about_p')}</p>
        {['src', 'priv', 'mod', 'com'].map((k) => <div key={k}><h3>{t(`about_${k}_h`)}</h3><p>{t(`about_${k}`)}</p></div>)}
      </div>
    </>
  )
}

export default function App() {
  const [lang, setLang] = useState('hi'), [page, setPage] = useState('home'), [q, setQ] = useState(''), [toast, setToast] = useState('')
  const t = (k) => STRINGS[lang][k] ?? STRINGS.en[k] ?? k
  useEffect(() => { document.documentElement.lang = lang }, [lang])
  const go = (p, query = '') => { setQ(query); setPage(p); window.scrollTo(0, 0) }
  const soon = (m) => { setToast(m); setTimeout(() => setToast(''), 3000) }
  return (
    <L.Provider value={{ lang, t }}>
      <header className="top"><Logo /><div className="grow"><b>जन आवाज़ · Jan Awaaz</b><small>{t('tagline')}</small></div>
        <button className="langbtn" onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')}>{t('lang_btn')}</button></header>
      <main>
        {page === 'home' && <HomePage go={go} soon={soon} />}
        {page === 'protests' && <ProtestsPage key={q} initialQ={q} />}
        {page === 'news' && <NewsPage soon={soon} />}
        {page === 'issues' && <IssuesPage soon={soon} />}
        {page === 'help' && <HelpPage />}
        {page === 'about' && <AboutPage />}
      </main>
      {toast && <div className="toast" role="status">{toast}</div>}
      <nav className="tabs" aria-label="Main">
        {PAGES.map(([id, Icon]) => (
          <button key={id} onClick={() => go(id)} aria-current={page === id ? 'page' : undefined} className={page === id ? 'on' : ''}><Icon size={20} aria-hidden="true" />{t(id)}</button>))}
      </nav>
    </L.Provider>
  )
}
