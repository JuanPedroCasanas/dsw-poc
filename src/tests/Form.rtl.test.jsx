import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '../components/form';

test('muestra mensaje después del submit (RTL)', async () => {
  render(<Form/>);
  
  const input = screen.getByPlaceholderText('Tu nombre');
  const button = screen.getByRole('button', { name: /enviar/i });

  await userEvent.type(input, 'Daniel');
  await userEvent.click(button);

  expect(screen.getByText('Gracias, Daniel!')).toBeInTheDocument();
});

