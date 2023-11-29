import componentB from '../componentB/componentB';
import helperA1 from './helperA1';
import helperA2 from './helperA2';
import type { JustAType } from '../just-types/types.i';

export const exampleObjectWithType: JustAType = { info: '' };

export default function componentA() {
    componentB();
    helperA1();
    helperA2();
}
