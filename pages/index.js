import Head from 'next/head'
import Image from 'next/image'
import { useRef, useState } from 'react'
import styles from '../styles/Home.module.css'
import Select from 'react-select'

const options = [
  {
    value: 'sait',
    label: 'Sambhram Institute of Technology',
  },
  {
    value: 'rait',
    label: 'Rambhram Institute of Technology',
  },
  {
    value: 'nait',
    label: 'Nambhram Institute of Technology',
  },
  {
    value: 'vait',
    label: 'Vambhram Institute of Technology',
  },
  {
    value: 'kait',
    label: 'Kambhram Institute of Technology',
  },
]

export default function Home() {
  const [college, setCollege] = useState({
    value: '',
    label: 'Select Any College',
  })
  const selectRef = useRef(null)

  // Functions
  const handleClick = (e) => {
    e.preventDefault()
    selectRef.current.focus()
  }

  const handleChange = (value) => {
    setCollege(value)
  }

  return (
    <>
      <Head>
        <title>Basot | Home</title>
      </Head>
      <div className={styles.collegeWrapper}>
        <p>{college.label}</p>
        <button onClick={handleClick}>select different college</button>
        <Select
          className={styles.select}
          ref={selectRef}
          openMenuOnFocus
          options={options}
          value={college}
          onChange={handleChange}
        />
      </div>
    </>
  )
}
