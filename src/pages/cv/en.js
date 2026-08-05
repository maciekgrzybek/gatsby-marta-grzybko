import React from 'react';

import CvPage from '../../components/cvPage';
import { cv } from '../../data/cv';

const CvEnPage = () => <CvPage content={cv.en} otherLang={cv.pl} />;

export default CvEnPage;
