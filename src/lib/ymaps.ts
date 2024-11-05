import * as ymaps3 from '@yandex/ymaps3-types';

import React from 'react';
import ReactDom from 'react-dom';

const [ymaps3React] = await Promise.all([
   ymaps3.import('@yandex/ymaps3-reactify'),
   ymaps3.ready,
]);

export const reactify = ymaps3React.reactify.bindTo(React, ReactDom);
export const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } =
   reactify.module(ymaps3);
