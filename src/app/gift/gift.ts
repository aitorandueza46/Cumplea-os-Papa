import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.html',
  styleUrl: './gift.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'gift-host' },
})
export class Gift {
  /** Dispara la secuencia cinematográfica de apertura. */
  readonly opening = input(false);

  protected readonly sparks = Array.from({ length: 14 }, (_, i) => i);
}