import { TestBed } from '@angular/core/testing';

import { PilotResolverResolver } from './pilot-resolver.resolver';

describe('PilotResolverResolver', () => {
  let resolver: PilotResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PilotResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
