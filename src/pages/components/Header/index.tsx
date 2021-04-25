import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

import styles from './styles.module.scss'

// css modules conseguimos criar arquivos css específicos de um componente
// as regras do css de um componente não são compartilhadas com outros

export default function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  })

  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Podcastr" />

      <p>O melhor para você ouvir, sempre</p>
      <span>{currentDate}</span>
    </header>
  )
}