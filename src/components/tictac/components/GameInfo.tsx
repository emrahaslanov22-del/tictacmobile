import { View, Text, StyleSheet } from "react-native";
import { GameInfoProps } from "../types/game";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginBottom: 55,
    },

    message: {
        fontSize: 40,
        marginBottom: 55,
    },

    restart: {
        color: "red",
        fontSize: 18,
    },
});

export default function GameInfo({
    currentPlayer,
    winner,
    onRestart,
}: GameInfoProps) {
    let message = `Növbə: ${currentPlayer}`;

    if (winner === "draw") {
        message = "Heç-heçə";
    }

    if (winner === "X" || winner === "O") {
        message = `Qalib: ${winner}`;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.message}>{message}</Text>

            <Text style={styles.restart} onPress={onRestart}>
                Yenidən başla
            </Text>
        </View>
    );
}

