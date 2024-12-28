import { Observable } from '@nativescript/core';
import { MatchData, Summoner } from '~/models/summoner.model';

export class RiotApiService extends Observable {
  private apiKey: string;
  private baseUrl = 'https://api.riotgames.com/lol/';

  constructor() {
    super();
    this.apiKey = ''; // API key should be securely stored
  }

  async getSummonerByName(name: string): Promise<Summoner> {
    // Implementation will be added when API key is configured
    return {} as Summoner;
  }

  async getMatchHistory(puuid: string): Promise<MatchData[]> {
    // Implementation will be added when API key is configured
    return [];
  }
}