import React from 'react';

import CvPage from '../../components/cvPage';
import { cv } from '../../data/cv';

const CvPlPage = () => <CvPage content={cv.pl} otherLang={cv.en} />;

export default CvPlPage;
