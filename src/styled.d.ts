import 'styled-components';
import { ITheme } from './interfaces';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
