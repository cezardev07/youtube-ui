// Não é recomendado fazer isso, e apenas para teste!

export const handleScrollProgress = (
    setState: (
        value: number | undefined
    ) => void
) => {
    window.addEventListener("scroll", () => {
        const pos = document.documentElement.scrollTop
        const calcHeight = 
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight
          
        const scrollValue = Math.round((pos * 100) / calcHeight)
        setState(scrollValue)
    })
}