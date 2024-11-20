export const metadata = {
	title: 'Portfolio | Admin',
	description: 'Admin panel for Portfolio',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body style={{ margin: 0, overscrollBehavior: "none" }}>
				{children}
			</body>
		</html>
	)
}