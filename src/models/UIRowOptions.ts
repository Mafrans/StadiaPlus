import { UIRow } from '../ui/UIRow';

export class UIRowOptions {
    onCreate?: (row: UIRow) => void;
    onDestroy?: (row: UIRow) => void;
    onReload?: (row: UIRow) => void;
}
