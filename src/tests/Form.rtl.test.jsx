import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '../components/Form/Form';

test('no se muestra mensaje si falta completar algún campo', async () => {
  render(<Form />);

  const nombreInput = screen.getByPlaceholderText('Tu nombre');
  const emailInput = screen.getByPlaceholderText('Tu email');
  const edadInput = screen.getByPlaceholderText('Tu edad');
  const button = screen.getByRole('button', { name: /enviar/i });

  // Completo algunos campos y dejo mensaje vacio
  await userEvent.type(nombreInput, 'Pedro');
  await userEvent.type(emailInput, 'pedro@example.com');
  await userEvent.type(edadInput, '25');

  await userEvent.click(button);

  // No debe mostrar el mensaje de gracias
  expect(screen.queryByText(/gracias/i)).not.toBeInTheDocument();
});

test('muestra mensaje después del submit con nombre', async () => {
  render(<Form />);
  
  const nombreInput = screen.getByPlaceholderText('Tu nombre');
  const emailInput = screen.getByPlaceholderText('Tu email');
  const edadInput = screen.getByPlaceholderText('Tu edad');
  const mensajeInput = screen.getByPlaceholderText('Tu mensaje')
  const button = screen.getByRole('button', { name: /enviar/i });

  await userEvent.type(nombreInput, 'Daniel');
  await userEvent.type(emailInput, 'dani@example.com');
  await userEvent.type(edadInput, '25');
  await userEvent.type(mensajeInput, 'Soy un capo');

  await userEvent.click(button);

  expect(screen.getByText('Gracias, Daniel!')).toBeInTheDocument();
});

test('se puede escribir un email', async () => {
  render(<Form />);

  const emailInput = screen.getByPlaceholderText('Tu email');
  await userEvent.type(emailInput, 'daniel@example.com');

  expect(emailInput).toHaveValue('daniel@example.com');
});

test('se puede ingresar una edad', async () => {
  render(<Form />);

  const edadInput = screen.getByPlaceholderText('Tu edad');
  await userEvent.type(edadInput, '42');

  expect(edadInput).toHaveValue(42); // número porque es input type="number"
});

test('se puede escribir un mensaje', async () => {
  render(<Form />);

  const mensajeInput = screen.getByPlaceholderText('Tu mensaje');
  await userEvent.type(mensajeInput, 'Hola mundo');

  expect(mensajeInput).toHaveValue('Hola mundo');
});
