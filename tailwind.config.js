/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      transitionDuration: {
        '400': '400ms', 
      },
      transitionTimingFunction: {
        'linear': 'linear',
      },

      colors: {
        Main :'#ff2c1f',
        textColor:'#020307',
        bgColor:'#fff',
      },
      
      // screens: {
      //   xsm:{ max: '300px'} ,
      //   sm: { max: '370px'},
      //   md: { max: '472px'},
      //   lg:{ max: '774px'} ,
      //   xl:{ max: '991px'} ,
      //   xxl:{ max: '1080px'},
      // },
      
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],

      },
      boxShadow: {
        shadow: '0 0 4px rgb(14 55 54 / 15%)',
        lgshadow: '4px 4px 0 4px rgb(14 55 54 / 15%)',
      },
      borderColor: {
        custom : 'rgba(2, 3, 7, 0.4)',
      },
      width: {
      '1000': '1000px' ,
      '300' : '300px',
    },
     maxWidth: {
      '1000': '1000px' ,
    },
    // height: {
    //   '270px': '270px' ,
    // },
     fontSize: {
      '4rem' : '4rem',
      '2rem' : '2rem',
      '3rem' : '3rem',
      '1.8rem' : '1.8rem',
      '1.7rem' : '1.7rem',
      '1.2rem' : '1.2rem',
      '0.8rem' : '0.8rem',
      '2.4rem' : '2.4rem',
      
      
    },
    padding: {
      '18px': '18px',
      '12px': '12px',
      '80px': '80px',
      '0.6rem' : '0.6rem',
      '0.7rem' : '0.7rem',
      '1.4rem' : '1.4rem',
      '1.2rem' : '1.2rem',
      '4.5rem' : '4.5rem',
      'xl' : '39.64px' ,
      'lg' : '30.96px',
      'sm' : '14.8px',
      '50px' : '50px',
      '100' : '100px',
    },
    
    gridTemplateColumns: {
     lg : 'repeat(auto-fit, minmax(180px,auto))',
     lgscreen :'repeat(auto-fit, minmax(160px ,auto))',
     smscreen :' repeat(auto-fit, minmax(140px ,auto))',
    },
    
     
  },
  plugins: [require('tailwind-scrollbar')],
}
}

