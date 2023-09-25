import { Category, Criteria } from '@samply/lens-core';
// import { Entities } from './entities';
import { Diagnosen } from './diagnosen';
// import { Morphologien } from './morphologien';
import { Lokalisation } from './lokalisation';
import { Manufacturer } from './manufacturer';


export const staticCatalogue: Array<Category> = [
  new Category('patient', 'Patient', [
    new Criteria(
      'gender',
      { de: 'Sex', en: 'Sex' },
      'string',
      '',
      ['IN'],
      [
        {
          key: 'M',
          de: 'male',
          en: 'male',
        },
        {
          key: 'F',
          de: 'female',
          en: 'female',
        },
        {
          key: 'other',
          de: 'other',
          en: 'other',
        },
        {
          key: 'SCTID:261665006',
          de: 'unknown',
          en: 'unknown',
        },
      ]
    ),
    new Criteria(
      'age_group',
      { de: 'Age Group', en: 'Age Group' },
      'number',
      '',
      ['LOWER_THAN', 'GREATER_THAN', 'BETWEEN']
    ),
  ]),
  new Category('clinical', 'Clinical Parameters', [
    new Criteria(
      'year_of_diagnosis',
      { de: 'Year of Diagnosis', en: 'Year of Diagnosis' },
      'number',
      '',
      ['LOWER_THAN', 'GREATER_THAN', 'BETWEEN']
    ),
    Diagnosen,

  ]),
  new Category('imaging', 'Image Parameters', [
    new Criteria(
      'modality',
      { de: 'Modality', en: 'Modality' },
      'string',
      'urn:oid:2.16.840.1.113883.6.256',
      ['IN'],
      [
        {
          key: 'RID10312',
          de: 'MRI',
          en: 'MRI',
        },
        {
          key: 'RID10337',
          de: 'PET',
          en: 'PET',
        },
        {
          key: 'RID10334',
          de: 'SPECT',
          en: 'SPECT',
        },
        {
          key: 'RID10321',
          de: 'CT',
          en: 'CT',
        },
      ]
    ),
    Lokalisation,
    Manufacturer
  ]),
];
