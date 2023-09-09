import Image from 'next/image'
import styles from './page.module.css'
import IncomeBreakdown from './components/IncomeBreakdown'

export default function Home() {
	return (
		<main className={styles.main}>
			<IncomeBreakdown />
		</main>
	)
}
