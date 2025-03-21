import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Svg } from "react-native-svg";

const Index = () => {
	const { width } = Dimensions.get("window");
	const data = [
		{ x: 2018, y: 4000 },
		{ x: 2019, y: 5000 },
		{ x: 2020, y: 7500 },
		{ x: 2021, y: 6000 },
	];

	return (
		<View style={styles.container}>
			{/* Header */}
			<Text style={styles.title}>Statistics</Text>
			<Text style={styles.subtitle}>Track your financial statistics</Text>

			{/* Total Balance */}
			<View style={styles.balanceContainer}>
				<Text style={styles.balanceText}>Total Balance</Text>
				<Text style={styles.balanceAmount}>$11,521.00</Text>
			</View>

			{/* Income & Spending */}
			<View style={styles.infoContainer}>
				<View style={styles.infoBox}>
					<Text style={styles.spending}>🔼 Spending</Text>
					<Text style={styles.amount}>$3120.00</Text>
				</View>
				<View style={styles.infoBox}>
					<Text style={styles.income}>🔽 Income</Text>
					<Text style={styles.amount}>$7932.00</Text>
				</View>
			</View>

			{/* Graph */}
			{/* <Svg style={{ width: "100%", height: 250 }}>
				<VictoryChart padding={{ top: 20, bottom: 40 }}>
					<VictoryLine data={data} style={{ data: { stroke: "#00ff99", strokeWidth: 3 } }} />
				</VictoryChart>
				
			</Svg> */}
			<LineChart
				data={{
					labels: ["2018", "2019", "2020", "2021"],
					datasets: [
						{
							data: [4000, 5000, 7500, 6000],
							color: () => `rgba(0, 255, 0, 1)`,
							strokeWidth: 3,
						},
					],
				}}
				width={width - 20}
				height={220}
				yAxisLabel="$"
				chartConfig={{
					backgroundGradientFrom: "#000",
					backgroundGradientTo: "#000",
					decimalPlaces: 2,
					color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,
					labelColor: () => "#fff",
				}}
				bezier
				style={{
					marginVertical: 10,
					borderRadius: 16,
				}}
			/>
			{/* Year Selection */}
			<TouchableOpacity style={styles.yearButton}>
				<Text style={styles.yearText}>Year ▼</Text>
			</TouchableOpacity>
		</View>
	);
};

// Styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#121212",
		padding: 20,
	},
	title: {
		color: "white",
		fontSize: 24,
		fontWeight: "bold",
	},
	subtitle: {
		color: "gray",
		fontSize: 14,
	},
	balanceContainer: {
		backgroundColor: "#1c1c1c",
		padding: 20,
		borderRadius: 12,
		marginTop: 20,
	},
	balanceText: {
		color: "gray",
		fontSize: 16,
	},
	balanceAmount: {
		color: "white",
		fontSize: 28,
		fontWeight: "bold",
	},
	infoContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 20,
	},
	infoBox: {
		backgroundColor: "#1c1c1c",
		padding: 15,
		borderRadius: 10,
		width: "48%",
		alignItems: "center",
	},
	spending: {
		color: "#ff4444",
		fontWeight: "bold",
	},
	income: {
		color: "#44ff44",
		fontWeight: "bold",
	},
	amount: {
		color: "white",
		fontSize: 18,
		marginTop: 5,
	},
	yearButton: {
		backgroundColor: "#00ff99",
		padding: 10,
		borderRadius: 8,
		alignSelf: "center",
		marginTop: 20,
	},
	yearText: {
		color: "#121212",
		fontWeight: "bold",
	},
});

export default Index;
