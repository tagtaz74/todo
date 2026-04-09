import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/images/logo_tagtec.svg"
          alt="tagtec"
          className={styles.logo}
          width={200}
          height={76}
          priority
        />
      </Link>
    </header>
  );
}
