import Image from 'next/image'
import styles from './page.module.css'
import IncomeBreakdown from './components/IncomeBreakdown'
import TopCreators from './components/TopCreators'

export default function Home() {
	return (
		<main className={styles.main}>
			<div
				style={{
					display: 'flex',
					gap: '4rem',
				}}>
				<IncomeBreakdown />
				<TopCreators />
			</div>
		</main>
	)
}
