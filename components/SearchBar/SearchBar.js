// packages
import React from 'react'
// styles
import styles from './SearchBar.module.css'

const SearchBar = ({ searchValue, setSearchValue }) => {
  const handleChange = (e) => {
    console.log(searchValue)
    setSearchValue(e.target.value)
  }

  return (
    <section className={styles.searchbar}>
      <input className={styles.input} type="text" onChange={handleChange} />
      <button className={styles.button}>Очистить фильтр</button>
    </section>
  )
}

export default SearchBar
