import { StyleSheet } from 'react-native';
import { vw, vh } from './stylesheet';
import * as LOCALVARIABLE from '../Nutrition Foods_variables.json'

const clrStyle = StyleSheet.create({
    white: '#FFFFFF',
    black: '#000000',
    // ***
    theme: {
        Green: {
            Mainmode: {
                10: "rgba(100,114,28,0.10)",
                60: "#e8f2b3",
                80: "#c4cf8c",
                100: "#64721c"
            },
            Secondary: {
                Yellow: {
                    60: "#f8ebcf",
                    80: "#dfd2b6"
                },
                Blue: {
                    40: "#e8fffd"
                },
                Red: "#e65a4b"
            },
            Grey: {
                10: "#f4f5f7",
                40: "#ecedef",
                60: "#a09f9f",
                100: "#6d6e6f"
            },
            Black: "#000000",
            White: "#ffffff",
            Text: {
                Primary: "$.Maingreen.Green.Black",
                Primary2: "$.Maingreen.Green.White",
                Secondary: "$.Maingreen.Green.Mainmode.100",
                subtitledark: "$.Maingreen.Green.Grey.100",
                subtitlelight: "$.Maingreen.Green.Grey.60"
            },
            Background: {
                1: "$.Maingreen.Green.White",
                2: "$.Maingreen.Green.Mainmode.100",
                3: "$.Maingreen.Green.Secondary.Blue.40",
                4: "$.Maingreen.Green.Secondary.Blue.100",
                5: "$.Maingreen.Green.Mainmode.10",
                6: "$.Maingreen.Green.Grey.10",
                7: "$.Maingreen.Green.Grey.100"
            },
            Content: {
                dark: {
                    1: "$.Maingreen.Green.Black",
                    3: "$.Maingreen.Green.Secondary.Red",
                    4: "$.Maingreen.Green.Secondary.Yellow.100",
                    5: "$.Maingreen.Green.Mainmode.100"
                },
                lightbase: {
                    st: "$.Maingreen.Green.White",
                    nd: "$.Maingreen.Green.Grey.40"
                },
                lightwhite: "#ffffff"
            },
            Stroke: {
                lightlight: "$.Maingreen.Green.Grey.40",
                dark: "#ffffff",
                light2nd: "$.Maingreen.Green.Secondary.Blue.100",
                light2nd2: "$.Maingreen.Green.Mainmode.60",
                grey: "$.Maingreen.Green.Grey.100"
            }
        },
        Orange: {
            Mainmode: {
                10: "#ebe7e0",
                60: "#f2cca8",
                80: "#e7b788",
                100: "#ba814d"
            },
            Secondary: {
                Yellow: {
                    60: "#f8ebcf",
                    80: "#dfd2b6"
                },
                Blue: {
                    40: "#fffdea"
                },
                Red: "#e65a4b"
            },
            Grey: {
                10: "#f4f5f7",
                40: "#ecedef",
                60: "#a09f9f",
                100: "#6d6e6f"
            },
            Black: "#000000",
            White: "#ffffff",
            Text: {
                Primary: "$.Maingreen.Orange.Black",
                Primary2: "#ffffff",
                Secondary: "$.Maingreen.Orange.Mainmode.100",
                subtitledark: "$.Maingreen.Orange.Grey.100",
                subtitlelight: "$.Maingreen.Orange.Grey.60"
            },
            Background: {
                1: "$.Maingreen.Orange.White",
                2: "$.Maingreen.Orange.Mainmode.100",
                3: "$.Maingreen.Orange.Secondary.Blue.40",
                4: "$.Maingreen.Orange.Secondary.Blue.100",
                5: "$.Maingreen.Orange.Mainmode.10",
                6: "$.Maingreen.Orange.Grey.10",
                7: "$.Maingreen.Orange.Grey.100"
            },
            Content: {
                dark: {
                    1: "$.Maingreen.Orange.Black",
                    3: "$.Maingreen.Orange.Secondary.Red",
                    4: "$.Maingreen.Orange.Secondary.Yellow.100",
                    5: "$.Maingreen.Orange.Mainmode.100"
                },
                lightbase: {
                    st: "$.Maingreen.Orange.White",
                    nd: "$.Maingreen.Orange.Grey.40"
                },
                lightwhite: "#ffffff"
            },
            Stroke: {
                lightlight: "$.Maingreen.Orange.Grey.40",
                dark: "#ffffff",
                light2nd: "$.Maingreen.Orange.Secondary.Blue.100",
                light2nd2: "$.Maingreen.Orange.Mainmode.60",
                grey: "$.Maingreen.Orange.Grey.100"
            }
        },
        HEHE: {
            Mainmode: {
                10: "#ffe9f0",
                60: "#e09fb4",
                80: "#f5aa59",
                100: "#918bdc"
            },
            Secondary: {
                Yellow: {
                    60: "#f8ebcf",
                    80: "#377e23"
                },
                Blue: {
                    40: "#fffdea"
                },
                Red: "#de5930"
            },
            Grey: {
                10: "#f4f5f7",
                40: "#ecedef",
                60: "#a09f9f",
                100: "#6d6e6f"
            },
            Black: "#000000",
            White: "#ffffff",
            Text: {
                Primary: "$.Maingreen.HEHE.Black",
                Primary2: "$.Maingreen.HEHE.White",
                Secondary: "$.Maingreen.HEHE.Mainmode.100",
                subtitledark: "$.Maingreen.HEHE.Grey.100",
                subtitlelight: "$.Maingreen.HEHE.Grey.60"
            },
            Background: {
                1: "$.Maingreen.HEHE.White",
                2: "$.Maingreen.HEHE.Mainmode.100",
                3: "$.Maingreen.HEHE.Secondary.Blue.40",
                4: "$.Maingreen.HEHE.Secondary.Blue.100",
                5: "$.Maingreen.HEHE.Mainmode.10",
                6: "$.Maingreen.HEHE.Grey.10",
                7: "$.Maingreen.HEHE.Grey.100"
            },
            Content: {
                dark: {
                    1: "$.Maingreen.HEHE.Black",
                    3: "$.Maingreen.HEHE.Secondary.Red",
                    4: "$.Maingreen.HEHE.Secondary.Yellow.100"
                },
                lightwhite: "#ffffff"
            },
            Stroke: {
                lightlight: "#ffffff",
                dark: "#ffffff",
                light2nd: "#ffffff",
                light2nd2: "#ffffff"
            }
        },

        Fitness: {
            Mainmode: {
                10: "#ffe9f0",
                60: "#e09fb4",
                80: "#f5aa59"
            },
            Grey: {
                10: "#f4f5f7",
                40: "#ecedef",
                60: "#a09f9f"
            },
            Black: "#ffffff",
            White: "#191919",
            Text: {
                Primary: "$.Maingreen.Fitness.Black",
                Primary2: "$.Maingreen.Fitness.Mainmode.100",
                Secondary: "$.Maingreen.Fitness.Background.1",
                subtitledark: "$.Maingreen.Fitness.Grey.100"
            },
            Background: {
                1: "#000000",
                2: "$.Maingreen.Fitness.White",
                3: "$.Maingreen.Fitness.Mainmode.100",
                4: "$.Maingreen.Fitness.Black",
                5: "$.Maingreen.Fitness.Stroke.light2nd",
                6: "$.Maingreen.Fitness.Stroke.light2nd2"
            },
            Stroke: {
                lightlight: "$.Maingreen.Fitness.Mainmode.100",
                dark: "$.Maingreen.Fitness.White",
                light2nd: "rgba(241,254,83,0.30)",
                light2nd2: "rgba(255,255,255,0.30)"
            }
        }
    }

});

export default clrStyle;

const THAOCOLOR = LOCALVARIABLE.default;

const VERCOLOR = 0;
switch (VERCOLOR) {
    case 0:
        clrStyle.primary = THAOCOLOR.primary;
        break;
    case 1:
        clrStyle.primary = THAOCOLOR.primary;
        break;
    case 2:
        clrStyle.primary = THAOCOLOR.primary;
        break;
    default:
        break;
}


export const componentStyle = StyleSheet.create({


    // input 
    textInput: {
        borderRadius: vw(4),
        flex: 1,
        paddingVertical: vw(4),
        fontSize: vw(4),
    },
});

export const NGHIASTYLE = StyleSheet.create({
    // Error
    NghiaError900: '#7A271A',
    NghiaError800: '#912018',
    NghiaError700: '#B42318',
    NghiaError600: '#D92D20',
    NghiaError500: '#F04438',
    NghiaError400: '#F97066',
    NghiaError300: '#FDA29B',
    NghiaError200: '#FECDCA',
    NghiaError100: '#FEE4E2',
    NghiaError50: '#FEF3F2',
    NghiaError25: '#FFFBFA',

    // Gray
    NghiaGray900: '#101828',
    NghiaGray800: '#1D2939',
    NghiaGray700: '#344054',
    NghiaGray600: '#475467',
    NghiaGray500: '#667085',
    NghiaGray400: '#98A2B3',
    NghiaGray300: '#C5CAD1',
    NghiaGray200: '#E4E7EC',
    NghiaGray100: '#F2F4F7',
    NghiaGray50: '#F9FAFB',
    NghiaGray25: '#FCFCFD',

    // Warning
    NghiaWarning900: '#7A2E0E',
    NghiaWarning800: '#93370D',
    NghiaWarning700: '#B54708',
    NghiaWarning600: '#DC6803',
    NghiaWarning500: '#F79009',
    NghiaWarning400: '#FDB022',
    NghiaWarning300: '#FEC84B',
    NghiaWarning200: '#FEDF89',
    NghiaWarning100: '#FEF0C7',
    NghiaWarning50: '#FFFAEB',
    NghiaWarning25: '#FFFCF5',

    // Success
    NghiaSuccess900: '#054F31',
    NghiaSuccess800: '#05603A',
    NghiaSuccess700: '#027A48',
    NghiaSuccess600: '#039855',
    NghiaSuccess500: '#12B76A',
    NghiaSuccess400: '#32D583',
    NghiaSuccess300: '#6CE9A6',
    NghiaSuccess200: '#A6F4C5',
    NghiaSuccess100: '#D1FADF',
    NghiaSuccess50: '#ECFDF3',
    NghiaSuccess25: '#F6FEF9',

    // BlueGray
    NghiaBlueGray900: '#101323',
    NghiaBlueGray800: '#293056',
    NghiaBlueGray700: '#363F72',
    NghiaBlueGray600: '#3E4784',
    NghiaBlueGray500: '#4E5BA6',
    NghiaBlueGray400: '#717BBC',
    NghiaBlueGray300: '#AFB5D9',
    NghiaBlueGray200: '#D5D9EB',
    NghiaBlueGray100: '#EAECF5',
    NghiaBlueGray50: '#F8F9FC',
    NghiaBlueGray25: '#FCFCFD',

    // Indigo
    NghiaIndigo900: '#2D3282',
    NghiaIndigo800: '#2D31A6',
    NghiaIndigo700: '#3538CD',
    NghiaIndigo600: '#444CE7',
    NghiaIndigo500: '#6172F3',
    NghiaIndigo400: '#8098F9',
    NghiaIndigo300: '#A4BCFD',
    NghiaIndigo200: '#C7D7FE',
    NghiaIndigo100: '#E0EAFF',
    NghiaIndigo50: '#EEF4FF',
    NghiaIndigo25: '#F5F8FF',

    // Purple
    NghiaPurple900: '#3E1C96',
    NghiaPurple800: '#4A1FB8',
    NghiaPurple700: '#5925DC',
    NghiaPurple600: '#6938EF',
    NghiaPurple500: '#7A5AF8',
    NghiaPurple400: '#9B8AFB',
    NghiaPurple300: '#BDB4FE',
    NghiaPurple200: '#D9D6FE',
    NghiaPurple100: '#EBE9FE',
    NghiaPurple50: '#F4F3FF',
    NghiaPurple25: '#FAFAFF',

    // Transparent
    NghiaTransparentDark60: 'rgba(36,47,65,0.6)',
    NghiaTransparentDark50: 'rgba(36,47,65,0.5)',
    NghiaTransparentDark40: 'rgba(36,47,65,0.4)',
    NghiaTransparentDark30: 'rgba(36,47,65,0.3)',
    NghiaTransparentDark20: 'rgba(36,47,65,0.2)',
    NghiaTransparentDark10: 'rgba(36,47,65,0.1)',
    NghiaTransparentWhite60: 'rgba(255,255,255,0.6)',
    NghiaTransparentWhite50: 'rgba(255,255,255,0.5)',
    NghiaTransparentWhite40: 'rgba(255,255,255,0.4)',
    NghiaTransparentWhite30: 'rgba(255,255,255,0.3)',
    NghiaTransparentWhite20: 'rgba(255,255,255,0.2)',
    NghiaTransparentWhite10: 'rgba(255,255,255,0.1)',

    // FocusRing
    NghiaFocusRing4pxPrimary100: {
        shadowColor: '#F4EBFF',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: vw(1),
        elevation: vw(1),
    },
    NghiaFocusRing4pxGray100: {
        shadowColor: '#EAECF5',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: vw(1),
        elevation: vw(1),
    },
    NghiaFocusRing4pxError100: {
        shadowColor: '#FEE4E2',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: vw(1),
        elevation: vw(1),
    },
    NghiaFocusRing4pxPrimary600: {
        shadowColor: '#F4EBFF',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: vw(1),
        elevation: vw(1),
    }


});