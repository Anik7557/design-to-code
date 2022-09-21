module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        white_A700_b2: "#ffffffb2",
        blue_A100: "#84a9ff",
        light_blue_600: "#0099df",
        blue_A200: "#4285f4",
        red_500: "#ea4335",
        green_600: "#34a853",
        light_blue_800: "#0079be",
        yellow_400: "#fff866",
        white_A700_33: "#ffffff33",
        yellow_A400: "#fff200",
        black_900: "#000000",
        gray_903: "#2a2a16",
        red_A700: "#ed0006",
        yellow_100: "#fffdcc",
        black_900_bf: "#000000bf",
        gray_301: "#e6e6e6",
        gray_400: "#c8c8c0",
        gray_500: "#92928a",
        gray_302: "#e3dcef",
        gray_901: "#242424",
        gray_802: "#4a4944",
        blue_700: "#1f72cd",
        gray_902: "#060d27",
        gray_803: "#3c4043",
        amber_500: "#fbbc04",
        gray_800: "#3f3f32",
        orange_A700: "#ff5e00",
        gray_900: "#23230d",
        gray_801: "#3b3b3b",
        amber_700: "#f9a000",
        orange_500: "#ff9900",
        gray_101: "#f5f5f2",
        gray_200: "#ecece6",
        gray_300: "#dedede",
        gray_102: "#f1f0f7",
        blue_50: "#d6e4ff",
        gray_100: "#f3f2f8",
        bluegray_900: "#353522",
        gray_600_b2: "#6b6b6bb2",
        white_A700_00: "#ffffff00",
        indigo_400: "#6c6bbd",
        indigo_900: "#091a7a",
        bluegray_900_4c: "#232b3b4c",
        white_A700: "#ffffff",
        bluegray_901: "#313131",
      },
      borderRadius: {
        radius3: "3px",
        radius4: "4px",
        radius6: "6px",
        radius12: "12px",
        radius16: "16px",
        radius20: "20px",
        radius24: "24px",
        radius30: "30px",
        radius35: "35px",
        radius36: "36px",
        radius44: "44px",
        radius48: "48px",
        radius50: "50%",
        radius64: "64px",
        radius348: "3.48px",
        radius32738: "327.38px",
      },
      fontFamily: {
        lato: "Lato",
        inter: "Inter",
        tthoves: "TT Hoves",
        rubik: "Rubik",
      },
      boxShadow: {
        bs: "0px 1px  0px 0px #dedede",
        bs1: "0px 117.65px  78.83px 0px #232b3b4c",
      },
      letterSpacing: {
        ls1: "1px",
        ls2: "2px",
        ls3: "3px",
        ls6: "6px",
        ls7: "7px",
        ls8: "8px",
        ls10: "10px",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#ffffff00,#6b6b6bb2,#242424)",
      },
      borderWidth: {
        bw6: "6px",
        bw11: "11px",
        bw139: "1.39px",
        bw295: "2.95px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
