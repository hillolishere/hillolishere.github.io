import { cvData } from './src/data/cvData.js';
import { trainingsData } from './src/data/trainings.js';
import fs from 'fs';

cvData.trainings = trainingsData;
fs.writeFileSync('cv_data.json', JSON.stringify(cvData, null, 2));
