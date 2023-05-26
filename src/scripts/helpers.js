export const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

export const updateAppHeight = (appRef) => {
  const contentHeight = appRef.current.scrollHeight;
  const windowHeight = window.innerHeight;
  const newAppHeight = Math.max(contentHeight, windowHeight);
  appRef.current.style.height = `${newAppHeight}px`;
}