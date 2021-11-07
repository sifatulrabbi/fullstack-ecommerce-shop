import 'styled-components';
import { ITheme } from './typings';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
