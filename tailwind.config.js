/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white_color:"var(--white_color)",
        black_color:"var(--white_color)",
        red_color:"var(--red_color)",
        gray_white_color:"var(--gray_white_color)",
        creamy_white_color:"var(--creamy_white_color)",
        text_white_gray:"var(--text_white_gray)",
        text_black_color:"var(--text_black_color)",
        text_black_gray:"var(--text_black_gray)",
        button_black_color:"var(--button_black_color)",
        button_green_color:"var(--button_green_color)",
        button_red_color:"var(--button_red_color)",
        hover_pink_color:"var(--hover_pink_color)",
        hover_blue_color:"var(--hover_blue_color)"
      },
      
    },
  },
  plugins: [],
}

