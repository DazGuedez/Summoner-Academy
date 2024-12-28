export interface Summoner {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  summonerLevel: number;
}

export interface MatchData {
  gameId: string;
  champion: string;
  role: string;
  timestamp: number;
  outcome: 'victory' | 'defeat';
  kda: {
    kills: number;
    deaths: number;
    assists: number;
  };
}