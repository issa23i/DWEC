import { TestBed } from '@angular/core/testing';

import { MiembroEquipoService } from './miembro-equipo.service';

describe('MiembroEquipoService', () => {
  let service: MiembroEquipoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiembroEquipoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
