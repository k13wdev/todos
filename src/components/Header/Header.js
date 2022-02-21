import Logo from '../Logo/Logo'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import style from './Header.module.css'

const Header = () => {
  return (
    <header className={style.wrapper}>
      <Logo/>
      <ThemeToggle/>
    </header>
  )
}

export default Header