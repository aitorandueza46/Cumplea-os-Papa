import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal } from '@angular/core';

import { Gift } from './gift/gift';
import { LETTER } from './letter-content';
import { Letter } from './letter/letter';
import { Particles } from './particles/particles';

type Phase = 'intro' | 'opening' | 'dedication' | 'prelude' | 'letter';

/** Marcas de la secuencia, en milisegundos desde que se pulsa el botón. */
const TIMELINE: ReadonlyArray<{ after: number; phase: Phase }> = [
  { after: 2000, phase: 'dedication' },
  { after: 3200, phase: 'prelude' },
  { after: 4800, phase: 'letter' },
];

const REDUCED_MOTION_SCALE = 0.1;

@Component({
  selector: 'app-root',
  imports: [Gift, Letter, Particles],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private readonly destroyRef = inject(DestroyRef);
  protected readonly phase = signal<Phase>('intro');
  private readonly reducedMotion = signal(false);
  private readonly timers: number[] = [];

  protected readonly dedication = LETTER.dedication;
  protected readonly prelude = LETTER.prelude;

  /** Intensidad de la luz cálida del fondo, según el momento de la secuencia. */
  protected readonly warmth = computed(() => {
    switch (this.phase()) {
      case 'intro':
        return 0;
      case 'opening':
        return 1;
      case 'dedication':
      case 'prelude':
        return 0.78;
      case 'letter':
        return 0.42;
    }
  });

  /** Aviso para lectores de pantalla cuando la carta cambia. */
  protected readonly announcement = computed(() => {
    switch (this.phase()) {
      case 'intro':
        return '';
      case 'opening':
        return 'Abriendo el regalo.';
      case 'dedication':
        return this.dedication;
      case 'prelude':
        return this.prelude;
      case 'letter':
        return 'Tu carta está lista.';
    }
  });

  constructor() {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (event: MediaQueryListEvent) => this.reducedMotion.set(event.matches);
    this.reducedMotion.set(query.matches);
    query.addEventListener('change', onChange);

    this.destroyRef.onDestroy(() => {
      query.removeEventListener('change', onChange);
      for (const id of this.timers) {
        clearTimeout(id);
      }
    });
  }

  protected openGift(): void {
    if (this.phase() !== 'intro') {
      return;
    }

    this.phase.set('opening');

    const scale = this.reducedMotion() ? REDUCED_MOTION_SCALE : 1;
    for (const step of TIMELINE) {
      this.timers.push(setTimeout(() => this.phase.set(step.phase), step.after * scale));
    }
  }
}