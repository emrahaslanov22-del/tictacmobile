export type Player = "X" | "O";
export type CellValue= Player | null;
export type Winner = Player | "draw" | null;

export type CellProps = {
  value: CellValue;
  onPress: () => void;
};

export type GameInfoProps = {
  currentPlayer: Player;
  winner: Winner;
  onRestart: () => void;
};