export interface Participation {
  id: number;
  year: number;
  city: string;
  medalsCount: number;
  athleteCount: number;
}

export interface CountryData {
  id: number;
  country: string;
  participations: Participation[];
}

export interface PieChartData {
  name: string;
  value: number;
}
export interface LegendData {
  numberOfParticipations: number;
  numberOfMedals: number;
  numberOfAthletes: number;
}

export interface LineChartSeries {
  name: string;
  value: number;
}

export interface LineChartData {
  name: string;
  series: LineChartSeries[];
}
export interface HistoryState {
  lineChartData: LineChartData[];
  legendData: LegendData;
}