import React from 'react'

const TOP_CREATORS = [
	{
		name: 'Bella baby',
		image: '/2.svg',
		userName: '@urfavbellabby',
		value: '$6,490.52',
	},
	{
		name: 'Bella baby',
		image: '/2.svg',
		userName: '@urfavbellabby',
		value: '$6,490.52',
	},
	{
		name: 'Bella baby',
		image: '/2.svg',
		userName: '@urfavbellabby',
		value: '$6,490.52',
	},
	{
		name: 'Bella baby',
		image: '/2.svg',
		userName: '@urfavbellabby',
		value: '$6,490.52',
	},
	{
		name: 'Bella baby',
		image: '/2.svg',
		userName: '@urfavbellabby',
		value: '$6,490.52',
	},
	{
		name: 'Bella baby',
		image: '/2.svg',
		userName: '@urfavbellabby',
		value: '$6,490.52',
	},
	{
		name: 'Bella baby',
		image: '/2.svg',
		userName: '@urfavbellabby',
		value: '$6,490.52',
	},
	{
		name: 'Bella baby',
		image: '/2.svg',
		userName: '@urfavbellabby',
		value: '$6,490.52',
	},
]
const TopCreators = () => {
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
					flexDirection: 'row',
					justifyContent: 'space-between',
					fontWeight: '500',
					fontFamily: 'Roboto',
					padding: '16px',
					fontSize: '16px',
					lineHeight: '22px',
				}}>
				<div>Today’s Top Creators</div>
				<button
					style={{
						background: 'none',
						outline: 'none',
						border: 'none',
						color: '#1890FF',
						fontSize: '14px',
						fontWeight: '400',
						cursor: 'pointer',
					}}>
					View all
				</button>
			</div>

			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyItems: 'center',
					alignItems: 'center',
					marginTop: '16px',
					marginBottom: '16px',
					gap: '24px',
					padding: '16px',
				}}>
				{TOP_CREATORS.map((item) => (
					<div
						style={{
							display: 'flex',
							width: '100%',
							justifyContent: 'space-between',
							flexDirection: 'row',
							alignItems: 'center',
						}}
						key={item.name}>
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
							<img
								src={item.image}
								alt="message"
								height={'48px'}
								style={{
									borderRadius: '50%',
								}}
							/>
							<div>
								<div
									style={{
										fontWeight: '500',
										fontSize: '14px',
										color: '#262626',
									}}>
									{item.name}
								</div>
								<div
									style={{
										fontWeight: '400',
										fontSize: '12px',
										color: '#8C8C8C',
									}}>
									{item.userName}
								</div>
							</div>
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

export default TopCreators
