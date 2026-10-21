import { View, Text, StyleSheet } from "react-native";
import { CellProps } from "../types/game";

const styles = StyleSheet.create({
    cell: {
        width: 90,
        height: 90,
        borderWidth: 1,
        borderColor: "black",
        justifyContent: "center",
        alignItems: "center",
    },

    text: {
        width: "100%",
        height: "100%",
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 42,
        fontWeight: "bold",
    },
});

export default function Cell({
    value,
    onPress,
}: CellProps) {
    return (
        <View style={styles.cell}>
            <Text style={styles.text} onPress={onPress}>
                {value}
            </Text>
        </View>
    );
}

