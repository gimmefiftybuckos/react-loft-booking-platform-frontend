import { ReactNode } from 'react';
import { useDispatch, useSelector } from '../../store';

import { INewLoftSlice, updateLoftData } from '../../store/slices/newLoft';
import { cardLoftTypesList, cardRulesList } from '../../services/constants';

import { CheckboxFieldset } from '../CheckboxFieldset';
import { InputField } from '../InputField';

enum InputNames {
   ORIGINAL_NAME = 'originalName',
   SERVICE_NAME = 'title',
   DESCRIPTION = 'description',
   TYPE = 'type',
   AREA = 'area',
   PHONE = 'phone',
   EMAIL = 'email',
   MIN_HOURS = 'minHours',
   ADDRESS = 'address',
   METRO_STATION = 'metroStation',
   WALKING_DISTANCE = 'walkingDistance',
   MAX_PERSONS = 'maxPersons',
   SEATING_PLACES = 'seatingPlaces',
   PRICE = 'price',
   RULE = 'rule',
}

type TComponentsList = {
   name: keyof INewLoftSlice;
   label: string;
   component: (key: string | number) => ReactNode;
};

export const getCommonFormComponents = () => {
   const dispatch = useDispatch();
   const newLoft = useSelector((state) => state.newLoft);

   const handleChange =
      (fieldName: keyof INewLoftSlice) =>
      (value: string | number | string[]) => {
         dispatch(updateLoftData({ [fieldName]: value }));
      };

   const commonFields: TComponentsList[] = [
      {
         name: InputNames.ORIGINAL_NAME,
         label: 'Оригинальное название площадки',
         component: function (key) {
            return (
               <InputField
                  key={key}
                  id={this.name}
                  value={newLoft.originalName}
                  label={this.label}
                  dispatch={handleChange(this.name)}
               />
            );
         },
      },
      {
         name: InputNames.SERVICE_NAME,
         label: 'Название площадки для LoftRadar',
         component: function (key) {
            return (
               <InputField
                  key={key}
                  id={this.name}
                  value={newLoft.title}
                  label={this.label}
                  dispatch={handleChange(this.name)}
               />
            );
         },
      },
      {
         name: InputNames.DESCRIPTION,
         label: 'Описание',
         component: function (key) {
            return (
               <InputField
                  key={key}
                  id={this.name}
                  as='textarea'
                  value={newLoft.description}
                  label={this.label}
                  dispatch={handleChange(this.name)}
               />
            );
         },
      },
      {
         name: InputNames.TYPE,
         label: 'Тип площадки',
         component: function (key) {
            return (
               <CheckboxFieldset
                  key={key}
                  legend={this.label}
                  reduxState={newLoft.type}
                  data={cardLoftTypesList.slice(2, cardLoftTypesList.length)}
                  dispatch={handleChange(this.name)}
               />
            );
         },
      },
      {
         name: InputNames.AREA,
         label: 'Площадь',
         component: function (key) {
            return (
               <InputField
                  key={key}
                  id={this.name}
                  type='number'
                  value={newLoft.area}
                  label={this.label}
                  dispatch={handleChange(this.name)}
               />
            );
         },
      },
      {
         name: InputNames.PHONE,
         label: 'Номер телефона',
         component: function (key) {
            return (
               <InputField
                  key={key}
                  id={this.name}
                  type='number'
                  value={newLoft.phone}
                  label={this.label}
                  dispatch={handleChange(this.name)}
               />
            );
         },
      },
      {
         name: InputNames.EMAIL,
         label: 'E-mail',
         component: function (key) {
            return (
               <InputField
                  key={key}
                  id={this.name}
                  type='email'
                  value={newLoft.email}
                  label={this.label}
                  dispatch={handleChange(this.name)}
               />
            );
         },
      },
      {
         name: InputNames.MIN_HOURS,
         label: 'Минимальное количество часов аренды',
         component: function (key) {
            return (
               <InputField
                  key={key}
                  id={this.name}
                  type='number'
                  value={newLoft.minHours}
                  label={this.label}
                  dispatch={handleChange(this.name)}
               />
            );
         },
      },
   ];

   const addressFields: TComponentsList[] = [
      {
         name: InputNames.ADDRESS,
         label: 'Адрес',
         component: function (key) {
            return (
               <InputField
                  key={key}
                  id={this.name}
                  value={newLoft.address}
                  label={this.label}
                  dispatch={handleChange(this.name)}
               />
            );
         },
      },
      {
         name: InputNames.METRO_STATION,
         label: 'Ближайшее метро',
         component: function (key) {
            return (
               <InputField
                  key={key}
                  id={this.name}
                  value={newLoft.metroStation}
                  label={this.label}
                  dispatch={handleChange(this.name)}
               />
            );
         },
      },
      {
         name: InputNames.WALKING_DISTANCE,
         label: 'Удаленность от метро',
         component: function (key) {
            return (
               <InputField
                  key={key}
                  id={this.name}
                  type='number'
                  value={newLoft.walkingDistance}
                  label={this.label}
                  dispatch={handleChange(this.name)}
               />
            );
         },
      },
   ];

   const facilitiesFields: TComponentsList[] = [
      {
         name: InputNames.MAX_PERSONS,
         label: 'Вместимость человек',
         component: function (key) {
            return (
               <InputField
                  key={key}
                  id={this.name}
                  type='number'
                  value={newLoft.maxPersons}
                  label={this.label}
                  dispatch={handleChange(this.name)}
               />
            );
         },
      },
      {
         name: InputNames.SEATING_PLACES,
         label: 'Кол-во посадочных мест',
         component: function (key) {
            return (
               <InputField
                  key={key}
                  id={this.name}
                  type='number'
                  value={newLoft.seatingPlaces}
                  label={this.label}
                  dispatch={handleChange(this.name)}
               />
            );
         },
      },
      {
         name: InputNames.RULE,
         label: 'Правила',
         component: function (key) {
            return (
               <CheckboxFieldset
                  key={key}
                  legend={this.label}
                  reduxState={newLoft.rule}
                  data={cardRulesList}
                  dispatch={handleChange(this.name)}
               />
            );
         },
      },
      {
         name: InputNames.PRICE,
         label: 'Стоимость в час',
         component: function (key) {
            return (
               <InputField
                  key={key}
                  id={this.name}
                  type='number'
                  value={newLoft.price}
                  label={this.label}
                  dispatch={handleChange(this.name)}
               />
            );
         },
      },
   ];

   return { commonFields, addressFields, facilitiesFields };
};
