import { TestBed } from '@angular/core/testing';

import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should show the dedication and the open button', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('.intro__dedication')?.textContent).toContain('Para papá');
    expect(page.querySelector('.open')?.textContent).toContain('ABRIR REGALO');
  });

  it('should move to the letter after opening the gift', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();

    const page = fixture.nativeElement as HTMLElement;

    vi.useFakeTimers();
    (page.querySelector('.open') as HTMLButtonElement).click();
    await vi.advanceTimersByTimeAsync(5000);
    fixture.detectChanges();
    vi.useRealTimers();

    expect(page.querySelector('.open')).toBeNull();
    expect(page.querySelector('app-letter')).not.toBeNull();
    expect(page.querySelector('.card__salutation')?.textContent).toContain('Querido papá,');
  });
});