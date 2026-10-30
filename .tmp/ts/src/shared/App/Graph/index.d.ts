import { Signal } from '@preact/signals';
import { FunctionComponent } from 'preact';
import { LinearData } from 'shared-types/index';
import 'add-css:./styles.module.css';
interface Props {
    fullPoints: Signal<LinearData | string | null>;
    optimizedPoints: Signal<LinearData | null>;
}
declare const Graph: FunctionComponent<Props>;
export { Graph as default };
//# sourceMappingURL=index.d.ts.map