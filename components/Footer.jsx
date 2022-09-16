import Image from 'next/image'


import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image src='/img/linkin.svg' height={80} width={80} alt='linkinwd logo' fill='white' stroke='white'/>
      <p>Jarmo Lindström</p>
      <p>Linkin Wed Designs</p>
      <p>yaramodesu@gmail.com</p>
      
    </footer>
  )
}
