import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Button from '../../components/Button';

describe('Input Component', () => {
  it('should be able to render an button', () => {
    const { findByText } = render(<Button>Button</Button>);

    expect(findByText('Button')).toBeTruthy();
  });

  it('should be able to render an button with loading status', () => {
    const { findByTestId } = render(<Button loading>Button</Button>);

    expect(findByTestId('root-button')).toBeTruthy();
  });

  it('should be able to handle click button', async () => {
    const { findByTestId } = render(<Button loading>Button</Button>);

    const buttonElement = await findByTestId('root-button');

    expect(fireEvent.click(buttonElement)).toBeTruthy();
  });
});
