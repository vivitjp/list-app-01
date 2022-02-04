import React from 'react'

interface ISearch {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  children: string
}

export const Search: React.VFC<ISearch> = ({ value, onChange, children }) => {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  )
}

const SearchText: React.VFC = (): JSX.Element => {
  const [key, setKey] = React.useState<string>('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  return (
    <div>
      <Search value={key} onChange={handleChange}>Search:</Search>
      <p>Searches for {key ? key : '...'}</p>
    </div>
  )
}

export default SearchText