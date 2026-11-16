// add/rename/reorder nav stuff here
// then add matching <Route> in App.jsx
export const NAV_ITEMS = [
  { label: 'about', path: '/', color: '#d88180' },
  { label: 'experience', path: '/experience', color: '#eec837' },
  { label: 'projects', path: '/projects', color: '#a7c957' },
  { label: 'interests', path: '/interests', color: '#669bbc' },
  { label: 'resume', path: '/resume', color: '#7251b5' },
]

// accent for curr page
export function accentFor(pathname) {
  const match = NAV_ITEMS.find((item) =>
    item.path === '/' ? pathname === '/' : pathname.startsWith(item.path)
  )
  return (match ?? NAV_ITEMS[0]).color
}
