import React from 'react';

import { CatalogFiltersType, SelectionFiltersType } from '../../../shared/types';

import { Calendar } from '../Calendar';
import { SearchList } from '../SearchList';
import { PriceSlider } from '../PriceSlider';
import { Images } from '../Images';
import { Menu } from '../Menu';
import { CommentForm } from '../CommentForm';

type ModalContentProps = {
   name:
      | SelectionFiltersType
      | CatalogFiltersType
      | 'Images'
      | 'Menu'
      | 'Comment';
};

const contentMap: { [key: string]: React.ReactNode } = {
   Event: <SearchList />,
   Date: <Calendar />,
   Price: <PriceSlider />,
   Images: <Images />,
   Menu: <Menu />,
   Comment: <CommentForm />,
};

export const ModalContent: React.FC<ModalContentProps> = ({ name }) => {
   return <>{contentMap[name] || <p>In Progress</p>}</>;
};
