import 'styled-components';
import { ITheme } from './interfaces';

declare global {
  declare module 'styled-components' {
    export interface DefaultTheme extends ITheme {}
  }
}
