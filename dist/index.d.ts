import { IconButtonProps } from '@mui/material/IconButton';
import { JSX } from 'react/jsx-runtime';
import { TextFieldProps as TextFieldProps_2 } from '@mui/material/TextField';

export declare const MuiFileInput: (props: MuiFileInputProps) => JSX.Element;

export declare type MuiFileInputProps = TextFieldProps & {
    hideSizeText?: boolean;
    clearIconButtonProps?: IconButtonProps;
} & MultipleOrSingleFile;

declare type MultipleOrSingleFile = {
    value?: File | null;
    getInputText?: (files: File | null) => string;
    getSizeText?: (files: File | null) => string;
    onChange?: (value: File | null) => void;
    multiple?: false | undefined;
} | {
    value?: File[];
    getInputText?: (files: File[]) => string;
    getSizeText?: (files: File[]) => string;
    onChange?: (value: File[]) => void;
    multiple: true;
};

declare type TextFieldProps = Omit<TextFieldProps_2, 'onChange' | 'select' | 'type' | 'multiline' | 'defaultValue' | 'inputProps' | 'InputProps'>;

export { }
