export type IconType = {
	className?: string;
	strokeWidth?: number;
	strokeColor?: string;
	fill?: string;
	size?: number;
	width?: number;
	height?: number;
}

export type Component = {
	className?: string;
	children?: React.ReactNode;
}

export type Note = {
	id: number;
	user_id: string; // UUID is stored as string in TypeScript
	noteTitle?: string; // Optional since no NOT NULL constraint
	noteContent?: string; // Optional since no NOT NULL constraint
	is_favorite: boolean;
	inserted_at: string; // ISO timestamp string
  }