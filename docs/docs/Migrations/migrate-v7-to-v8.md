# Migrate from v7 to v8

Version 8 of this library only supports MUI material v7, and now instead it supports "slotProps" instead of the deprecated "InputProps".

## InputProps to SlotProps migration

In MUI v6, the `InputProps` prop has been deprecated in favor of `slotProps`.

```tsx
// Before (MUI v6)
<MuiFileInput
  InputProps={{
    startAdornment: <AttachFileIcon />,
    inputProps: {
      accept: 'video/*'
    }
  }}
/>

// After (MUI v7)
<MuiFileInput
  slotProps={{
    htmlInput: {
      accept: 'video/*'
    },
    input: {
      startAdornment: <AttachFileIcon />,
    }
  }}
/>
```

For more information see the MUI docs: https://mui.com/material-ui/migration/migrating-from-deprecated-apis/#props-props-2