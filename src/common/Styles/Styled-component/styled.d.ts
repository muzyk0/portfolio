import 'styled-components';
interface IPalette {
    main: string
    border: string
    contrastText: string
    hover: {
        main: string
        border: string
        contrastText: string
    }
}
declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string
        palette: {
            common: {
                black: string
                white: string
            }
            primary: IPalette
            secondary: IPalette
        }
    }
}