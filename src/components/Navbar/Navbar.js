import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav>
      <ul className={style.list}>
        <li>
          <button type="button" aria-selected="true">
            All
          </button>
        </li>
        <li>
          <button type="button">
            Active
          </button>
        </li>
        <li>
          <button type="button">
            Completed
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar