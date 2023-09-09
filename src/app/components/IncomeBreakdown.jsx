import React from 'react'

const INCOME_ITEM = [
	{
		title: 'Subscriptions',
		icon: '/subscription-icon.svg',
		value: '$93,568',
	},
	{
		title: 'Messages',
		icon: '/message-icon.svg',
		value: '$64,343',
	},
	{
		title: 'Tips',
		icon: '/tips-icon.svg',
		value: '$23,264',
	},
	{
		title: 'Posts',
		icon: '/post-icon.svg',
		value: '$84,265',
	},
]

const IncomeBreakdown = () => {
	return (
		<div
			style={{
				width: '367px',
				borderRadius: '12px',
				border: '1px',
				background: 'white',
				color: '#262626',
				fontFamily: 'Roboto',
			}}>
			<div
				style={{
					height: '54px',
					borderBottom: '2px solid #F0F0F0',
					color: '#262626',
					display: 'flex',
					fontWeight: '500',
					fontFamily: 'Roboto',
					padding: '16px',
					fontSize: '16px',
					lineHeight: '22px',
				}}>
				Income Breakdown
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyItems: 'center',
					alignItems: 'center',
				}}>
				<div
					style={{
						width: '100%',
						marginTop: '24px',
						marginBottom: '24px',
					}}>
					<img
						src="/chart.svg"
						alt="chart"
						style={{
							marginLeft: '20%',
						}}
					/>
				</div>
			</div>

			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyItems: 'center',
					alignItems: 'center',
					marginTop: '24px',
					marginBottom: '24px',
					gap: '24px',
				}}>
				{INCOME_ITEM.map((item) => (
					<div
						style={{
							display: 'flex',
							width: '100%',
							justifyContent: 'space-between',
							flexDirection: 'row',
							alignItems: 'center',
							maxWidth: '307px',
						}}
						key={item.title}>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								gap: '8px',
								fontFamily: 'Public Sans',
								fontSize: '14px',
								fontWeight: '500',
								lineHeight: '22px',
							}}>
							<img src={item.icon} alt="message" />
							<div>{item.title}</div>
						</div>
						<div
							style={{
								backgroundColor: '#F0F0F0',
								borderRadius: '4px',
								padding: '2px 6px',
								fontFamily: 'Public Sans',
								fontSize: '13px',
								fontWeight: '500',
								lineHeight: '20px',
							}}>
							{item.value}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default IncomeBreakdown
