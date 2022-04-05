import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>{/* other links */}</Head>
				<body>
					<Main />
				</body>
				<NextScript />
			</Html>
		);
	}
}

export default MyDocument;
