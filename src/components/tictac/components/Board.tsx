import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Cell from "./Cell";
import GameInfo from "./GameInfo";
import {
    CellValue,
    Player,
    Winner,
} from "../types/game";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 500,
    },

    board: {
        borderWidth: 2,
        borderColor: "black",
    },

    row: {
        flexDirection: "row",
    },
});

export default function Board() {
    const [board, setBoard] = useState<CellValue[]>(
        Array(9).fill(null)
    );

    const [currentPlayer, setCurrentPlayer] =
        useState<Player>("X");

    const [winner, setWinner] = useState<Winner>(null);

    const checkWinner = (
        newBoard: CellValue[]
    ): Winner => {
        const winningLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const line of winningLines) {
            const [a, b, c] = line;

            if (
                newBoard[a] &&
                newBoard[a] === newBoard[b] &&
                newBoard[a] === newBoard[c]
            ) {
                return newBoard[a];
            }
        }

        if (newBoard.every((cell) => cell !== null)) {
            return "draw";
        }

        return null;
    };

    const handlePress = (index: number): void => {
        if (board[index] !== null || winner !== null) {
            return;
        }

        const newBoard = [...board];

        newBoard[index] = currentPlayer;

        setBoard(newBoard);

        const result = checkWinner(newBoard);

        if (result !== null) {
            setWinner(result);
            return;
        }

        setCurrentPlayer(
            currentPlayer === "X" ? "O" : "X"
        );
    };

    const restartGame = (): void => {
        setBoard(Array(9).fill(null));
        setCurrentPlayer("X");
        setWinner(null);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tic-Tac-Toe</Text>

            <GameInfo
                currentPlayer={currentPlayer}
                winner={winner}
                onRestart={restartGame}
            />

            <View style={styles.board}>
                <View style={styles.row}>
                    <Cell
                        value={board[0]}
                        onPress={() => handlePress(0)}
                    />
                    <Cell
                        value={board[1]}
                        onPress={() => handlePress(1)}
                    />
                    <Cell
                        value={board[2]}
                        onPress={() => handlePress(2)}
                    />
                </View>

                <View style={styles.row}>
                    <Cell
                        value={board[3]}
                        onPress={() => handlePress(3)}
                    />
                    <Cell
                        value={board[4]}
                        onPress={() => handlePress(4)}
                    />
                    <Cell
                        value={board[5]}
                        onPress={() => handlePress(5)}
                    />
                </View>

                <View style={styles.row}>
                    <Cell
                        value={board[6]}
                        onPress={() => handlePress(6)}
                    />
                    <Cell
                        value={board[7]}
                        onPress={() => handlePress(7)}
                    />
                    <Cell
                        value={board[8]}
                        onPress={() => handlePress(8)}
                    />
                </View>
            </View>
        </View>
    );
}

