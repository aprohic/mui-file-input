import React from 'react'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import CloseIcon from '@mui/icons-material/Close'
import { createTheme, ThemeProvider } from '@mui/material'
import { Meta, StoryFn } from '@storybook/react'
import { MuiFileInput } from './index'

export default {
  title: 'MuiFileInput',
  component: MuiFileInput
} as Meta<typeof MuiFileInput>

const theme = createTheme()

export const Primary: StoryFn<typeof MuiFileInput> = () => {
  const [value, setValue] = React.useState<File[]>([])

  const handleChange = (newValue: File[]) => {
    setValue(newValue)
  }

  return (
    <ThemeProvider theme={theme}>
      <MuiFileInput
        sx={{ width: 300 }}
        placeholder="Choisir un fichier"
        clearIconButtonProps={{
          children: <CloseIcon fontSize="small" />
        }}
        slotProps={{
          input: {
            startAdornment: <AttachFileIcon />
          }
        }}
        required
        multiple
        value={value}
        onChange={handleChange}
        label="Your photo"
      />
    </ThemeProvider>
  )
}
