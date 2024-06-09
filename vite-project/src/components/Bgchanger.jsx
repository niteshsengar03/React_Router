import { Button } from "./ui/button";
import { useState } from "react";

export default function Bgchanger() {
    const [bgColor, setBgColor] = useState('');

    return (
      <div className={`${bgColor} min-h-screen`}>
        <div className="flex justify-center">
          <Button className="bg-red-600" onClick={() => setBgColor('bg-red-600')}>RED</Button>
          <Button className="bg-green-600" onClick={() => setBgColor('bg-green-600')}>Green</Button>
          <Button className="bg-blue-600" onClick={() => setBgColor('bg-blue-600')}>Blue</Button>
          <Button className="bg-yellow-600" onClick={() => setBgColor('bg-yellow-600')}>Yellow</Button>
          <Button className="bg-black text-white" onClick={() => setBgColor('bg-black')}>Black</Button>
          <Button className="bg-purple-600" onClick={() => setBgColor('bg-purple-600')}>Purple</Button>
          <Button className="bg-white text-black" onClick={() => setBgColor('bg-white')}>Defalut</Button>
        </div>
      </div>
    );
  }
