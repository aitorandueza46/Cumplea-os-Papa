/**
 * CONTENIDO DE LA CARTA — este es el único archivo que necesitas tocar
 * para escribir tu carta. Solo texto plano, un párrafo por línea.
 */
export const LETTER = {
  /** Texto que aparece debajo del regalo y al abrirse la carta. */
  dedication: 'Para papá',

  /** Frase breve que aparece justo antes de la carta. */
  prelude: 'Hay cosas que no digo todo lo que debería.',

  /** Cuerpo de la carta. Cada elemento es un párrafo. */
  paragraphs: [
    'Muchas felicidades papá',
    'Gracias por todo lo que has hecho por mí y por lo mucho que te esfuerzas todos los días.',
    'Feliz cumpleaños.',
    'Te quiero mucho.',
  ],
} as const;
