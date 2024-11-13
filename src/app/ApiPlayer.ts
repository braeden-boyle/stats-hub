export interface ApiPlayer {
    id: number,
    playerName: string,
    position: string,
    age: number,
    games: number,
    gamesStarted: number,
    minutesPg: number,
    fieldGoals: number,
    fieldAttempts: number,
    fieldPercent: number,
    threeFg: number,
    threeAttempts: number,
    threePercent: number,
    twoFg: number,
    twoAttempts: number,
    twoPercent: number,
    effectFgPercent: number,
    ft: number,
    ftAttempts: number,
    ftPercent: number,
    offensiveRb: number,
    defensiveRb: number,
    totalRb: number,
    assists: number,
    steals: number,
    blocks: number,
    turnovers: number,
    personalFouls: number,
    points: number,
    team: string,
    season: number,
    playerId: string
}