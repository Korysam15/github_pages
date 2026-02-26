import React from 'react';
import { motion } from 'framer-motion';
export function ThreeBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 dark:opacity-30"
        style={{
          background:
          'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)',
          top: '10%',
          right: '10%',
          filter: 'blur(60px)'
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }} />


      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-15 dark:opacity-25"
        style={{
          background:
          'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
          bottom: '20%',
          left: '5%',
          filter: 'blur(50px)'
        }}
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }} />


      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full opacity-10 dark:opacity-20"
        style={{
          background:
          'radial-gradient(circle, rgba(161, 161, 170, 0.3) 0%, transparent 70%)',
          top: '40%',
          left: '30%',
          filter: 'blur(40px)'
        }}
        animate={{
          x: [0, 15, 0],
          y: [0, 15, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }} />


      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />

    </div>);

}