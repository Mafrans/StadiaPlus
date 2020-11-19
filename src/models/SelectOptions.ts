import { Option } from 'slim-select/dist/data';

export interface SelectOptions {
    placeholder: string | undefined;
    style?: string;
    onChange?: (info: Option) => void;
    beforeChange?: (info: Option) => void;
}
