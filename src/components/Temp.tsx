"use client"
import { Sun, Moon } from '@phosphor-icons/react'
import { useState, useEffect } from 'react'

export function Temp() {
  const [temperature, setTemperature] = useState(30)
  const [umidity, setUmidity] = useState(70)
  const [isDaytime, setIsDaytime] = useState(false)

  useEffect(() => {
    const checkTime = () => {
      const now = new Date()
      const hours = now.getHours()
      setIsDaytime(hours >= 6 && hours < 18)
    }
    
    checkTime()
    const interval = setInterval(checkTime, 60000)

    return () => clearInterval(interval)

  }, [])

  return (
    <main className={`flex flex-col items-center justify-center h-screen ${isDaytime ? 'bg-blu-50' : 'bg-blue-950'}`}>
      <p className={`text-xl font-bold ${isDaytime ? 'text-black' : 'text-white'}`}>Temperatura e umidade interna:</p>
      <div className={`flex items-center justify-center space-x-2 ${isDaytime ? 'text-black' : 'text-white'}`}>
        {isDaytime ?  <Sun size={56} color="yellow" /> : <Moon size={56} color="white" />}        
        <text className={`text-6xl font-bold ${isDaytime ? 'text-black' : 'text-white'}`}>{temperature}°C</text>
      </div>
      <div className="flex items-center justify-end">
        <text className={`text-lg ${isDaytime ? 'text-black' : 'text-white'}`}>Umidade: {umidity}%</text>
      </div>
    </main>
  )
}
