import { Observable } from '@nativescript/core';
import { RiotApiService } from '../../services/riot-api.service';
import { Summoner, MatchData } from '../../models/summoner.model';

export class DashboardViewModel extends Observable {
  private riotApiService: RiotApiService;
  private _summoner: Summoner;
  private _matches: MatchData[] = [];

  constructor() {
    super();
    this.riotApiService = new RiotApiService();
  }

  async loadSummonerData(summonerName: string) {
    try {
      const summonerData = await this.riotApiService.getSummonerDetails(summonerName);
      this._summoner = summonerData;
      this.notifyPropertyChange('summoner', summonerData);
      
      await this.loadMatchHistory();
    } catch (error) {
      console.error('Error loading summoner data:', error);
    }
  }

  private async loadMatchHistory() {
    try {
      const matches = await this.riotApiService.getMatchHistory(this._summoner.name);
      this._matches = matches;
      this.notifyPropertyChange('matches', matches);
    } catch (error) {
      console.error('Error loading match history:', error);
    }
  }

  get summoner(): Summoner {
    return this._summoner;
  }

  get matches(): MatchData[] {
    return this._matches;
  }
}