import styles from './styles.module.scss';

import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/client'

export function SignInButton() {
  const [session] = useSession();

  return session ? (
    <button type="button" onClick={() => signOut()} className={styles.signInButton}>
      <FaGithub color="#04d301" />
      {session.user.name}
      <FiX color="#737388" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.signInButton} onClick={() => signIn('github')}>
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  )
}