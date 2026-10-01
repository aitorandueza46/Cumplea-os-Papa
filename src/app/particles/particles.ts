import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Mote {
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
  peak: number;
}

/**
 * Polvo cálido suspendido en el aire. Las posiciones salen de un generador
 * con semilla fija: la escena es idéntica en cada carga y las animaciones
 * nunca empiezan desfasadas entre sí.
 */
function createMotes(count: number): Mote[] {
  let seed = 20260419;

  const next = (): number => {
    seed = (seed * 1103515245 + 12345) % 2147483648;
    return seed / 2147483648;
  };

  return Array.from({ length: count }, () => ({
    x: next() * 100,
    y: next() * 100,
    size: 1.3 + next() * 2.4,
    duration: 16 + next() * 20,
    delay: -next() * 34,
    driftX: (next() - 0.5) * 110,
    driftY: -40 - next() * 120,
    peak: 0.14 + next() * 0.3,
  }));
}

@Component({
  selector: 'app-particles',
  templateUrl: './particles.html',
  styleUrl: './particles.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Particles {
  protected readonly motes = createMotes(22);
}