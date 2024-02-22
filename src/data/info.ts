import { convertirPortafolio } from './data-transform';

const response = await fetch(
  'https://raw.githubusercontent.com/hamelhmc/manfred/main/CV/MAC.json'
)
const data = await response.json();
export const info = convertirPortafolio(data)
