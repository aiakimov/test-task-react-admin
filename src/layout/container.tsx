const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xxl border border-gray">
      {children}
    </div>
  )
}

export default Container
