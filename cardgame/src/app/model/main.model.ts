export interface Winner {
    cards: string;
    hand: string;
    result: string;
}

export interface Player {
    cards: string;
    hand: string;
    result: string;
}

export interface Hand {
    winners: Winner[];
    players: Player[];
}
