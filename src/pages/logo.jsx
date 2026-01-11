
const Logo = () => {
  return (
     <div className="min-h-screen w-full flex items-center justify-center bg-white">
      
      {/* Injecting Alice Font from Google */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Foundation:wght@700&display=swap');
      `}</style>

      {/* Logo Text Details:
         1. font-['Alice']: Uses the imported font.
         2. font-bold: Forces the browser to thicken the naturally thin Alice font.
         3. text-8xl: Very large text.
         4. bg-gradient-to-r: Sets up the gradient direction.
         5. from-blue-500 to-green-500: The requested color combo.
         6. bg-clip-text text-transparent: Makes the text take the color of the gradient.
         7. drop-shadow-lg: Adds subtle depth.
      */}
      <h1 className="font-['Edu_NSW_ACT_Foundation',_cursive] font-bold text-6xl md:text-9xl tracking-tight bg-gradient-to-r from-blue-600 via-cyan-500 to-green-500 bg-clip-text text-transparent drop-shadow-2xl p-4">
        Campuskart
      </h1>
      
    </div>
  );
};

export default Logo;