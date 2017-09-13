import { TestBed, async } from '@angular/core/testing';
import { LoginService } from './services/login.service';

describe('Login Test', () => {
    beforeEach(async(() => {
        // Load in services needed
        TestBed.configureTestingModule({
          declarations: [
            LoginService
          ],
          imports: [
              
          ]
        });
      }));
});