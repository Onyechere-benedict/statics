import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { VictoryTheme, VictoryChart, VictoryLine, VictoryBar } from "victory";
import { Svg } from "react-native-svg";

const Dashboard = () => {
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
			<Svg style={{ width: "100%", height: 250 }}>
				<VictoryChart theme={VictoryTheme.grayscale} padding={{ top: 20, bottom: 40 }}>
					<VictoryLine data={data} style={{ data: { stroke: "#00ff99", strokeWidth: 3 } }} />
				</VictoryChart>
			</Svg>

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

export default Dashboard;
