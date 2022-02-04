import React, { useCallback, useState } from 'react'

import Select, { ISelectItem } from 'component/container/Select';
import Radio, { IRadioItem } from 'component/container/Radio';

const initNames: ISelectItem[] = [{ item: "John" }, { item: "Steve" }]
const initCountry: ISelectItem[] = [{ item: "Japan" }, { item: "USA" }]
const initAddress: IRadioItem[] = [
  { key: '1', item: "Tokyo" },
  { key: '2', item: "Osaka" },
  { key: '3', item: "Yokohama" },
]

interface IData {
  name: string
  address: string
  country: string
  act: boolean
}

const AForm: React.VFC = (): JSX.Element => {

  const [data, setData]
    = useState<IData>({ name: '', country: '', address: '', act: false })

  const handleCountry = useCallback((v: string) => setData(d => ({ ...d, country: v })), [])
  const handleName = useCallback((v: string) => setData(d => ({ ...d, name: v })), [])
  const handleAddress = useCallback((v: string) => setData(d => ({ ...d, address: v })), [])

  return (
    <>
      <Select Items={initNames} handle={handleName} />
      <Select Items={initCountry} handle={handleCountry} />
      <Radio Items={initAddress} handle={handleAddress} />

      <pre style={{ marginTop: "20px" }}>
        {data && JSON.stringify(data, null, 1)}
      </pre>
    </>
  );
}

export default AForm