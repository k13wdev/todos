import { useDispatch, useSelector } from 'react-redux'
import moon from '../../assets/icon-moon.svg'
import sun from '../../assets/icon-sun.svg'
import { toggleTheme } from '../../redux/actions'
import style from './ThemeToggle.module.css'

const ThemeToggle = () => {
  const dispatch = useDispatch()
  
  const onclickHandler = () => {
    const newTheme = document.body.dataset.theme === 'light'
      ? 'dark'
      : 'light'
    dispatch(toggleTheme(newTheme))
  }

  return (
    <button type="button" className={style.button} onClick={onclickHandler}>
      {
        document.body.dataset.theme === 'light' 
          ? <img src={moon} width={18} height={18} />
          : <img src={sun} width={18} height={18} />
      }
    </button>
  )
}

export default ThemeToggle