/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "Host-CTA":"/Host/CTABackground.png"
      },
      container:{
        center:true,
      },
      colors:{
        primary:'#503AE7',
        secondary:{
          basic:'#1AD993',
          light:'#ABFFE0'
        },
        podPurple:'#832BC1',
        common:{
          black:'#14142B',
          grey:'#AFB0B9',
          light:'#F4F2FF'
        },
        white:'#fff',
      },
    },
  },
  plugins: [],
}

