import React, { useEffect, useState } from 'react';
import { LuSunMedium } from "react-icons/lu";

function DarkAndLight() {
  return (
    <div className="flex items-center gap-2">
      <p>Light</p>
      <LuSunMedium  className='text-3xl'/>
    </div>
  );
}
export default DarkAndLight ;