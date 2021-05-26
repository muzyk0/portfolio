import { DefaultTheme } from 'styled-components'
export const defaultTheme: DefaultTheme = {
    borderRadius: '50rem',
    palette: {
        common: {
            black: '#222831',
            white: '#ffffff'
        },
        primary: {
            main: '#20c997',
            contrastText: '#ffffff',
            border: '#709fb0',
            hover: {
                main: '#1baa80',
                border: '#709fb0',
                contrastText: '#ffffff',
            }
        },
        secondary: {
            main: 'transparent',
            contrastText: '#20c997',
            border: '#20c997',
            hover: {
                main: '#2cbd92',
                border: '#709fb0',
                contrastText: '#ffffff',
            }
        }
    }
}
//2cbd92