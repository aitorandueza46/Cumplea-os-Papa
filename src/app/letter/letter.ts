import { ChangeDetectionStrategy, Component } from '@angular/core';

import { LETTER } from '../letter-content';

const paragraphs = LETTER.paragraphs;
const lastIndex = paragraphs.length - 1;

@Component({
  selector: 'app-letter',
  templateUrl: './letter.html',
  styleUrl: './letter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'letter-host' },
})
export class Letter {
  protected readonly salutation = paragraphs[0] ?? '';
  protected readonly signOff = paragraphs.length > 1 ? paragraphs[lastIndex] : '';
  protected readonly body = paragraphs.length > 2 ? paragraphs.slice(1, lastIndex) : [];
}