import { Observable } from '@nativescript/core';
import { navigate } from '~/utils/navigation';

export class HomeViewModel extends Observable {
  constructor() {
    super();
  }

  onViewMatches() {
    navigate('views/matches/matches-page');
  }

  onStartTraining() {
    navigate('views/training/training-page');
  }

  onViewProgress() {
    navigate('views/progress/progress-page');
  }
}