import { CsvFileReader } from './csvFileReader';

const reader = new CsvFileReader('./football.csv');
reader.read();
console.log(reader.data);
