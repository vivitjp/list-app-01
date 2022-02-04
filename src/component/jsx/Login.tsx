import React from 'react'

interface IUser { id: string, name: string }

interface ISearch {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  children: string
}

const Search: React.VFC<ISearch> = ({ value, onChange, children }) => {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  )
}

const App: React.VFC = (): JSX.Element => {
  const [key, setKey] = React.useState<string>('');
  const [user, setUser] = React.useState<IUser>(null!);

  React.useEffect(() => {
    (async () => {
      const user = await Promise.resolve({ id: '1', name: 'Robin' });
      setUser(user);
    })()
  }, [])

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  return (
    <div>
      {user ? <p>Signed in as {user.name}</p> : null}
      <Search value={key} onChange={handleChange}>Search:</Search>
      <p>Searches for {key ? key : '...'}</p>
    </div>
  )
}

export default App