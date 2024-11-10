import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);
global['localStorage'] = {
    getItem: () => '',
    setItem: () => {},
    removeItem: () => {},
    clear: () => {},
    key: () => '',
    length: 0
  };

export default bootstrap;
