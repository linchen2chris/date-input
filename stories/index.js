import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import DateInput from '../src/DateInput';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
storiesOf('DateInput', module)
  .add('without value', () => <DateInput/>)
  .add('with minDate and maxDate', () =>
       <DateInput
       minDate="1990-01-01"
       maxDate="2020-01-01"
       maxDateError="your date should not after 2020-01-01"
       />);
