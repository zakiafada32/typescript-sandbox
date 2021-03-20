import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';

const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);

const consoleSummary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);

consoleSummary.buildAndPrintReport(matchReader.matches);
