
export default function Text({children,className}) {
  return (
    <h2 className={`text-4xl font-bold bg-gradient-to-l from-indigo-300 to-blue-900 bg-clip-text text-transparent ${className}`}>
    {children}
</h2>
  )
}
