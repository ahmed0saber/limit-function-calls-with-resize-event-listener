let limitedCounter = 0, notLimitedCounter = 0
const increaseLimitedCounter = () => {
    document.querySelector("h2 .limited").textContent = ++limitedCounter
}
const increaseNotLimitedCounter = () => {
    document.querySelector("h2 .not-limited").textContent = ++notLimitedCounter
}
const handleResizeEvent = () => {
    window.removeEventListener("resize", handleResizeEvent)
    setTimeout(() => {
        increaseLimitedCounter()
        window.addEventListener("resize", handleResizeEvent)
    }, 200)
}
window.addEventListener("resize", handleResizeEvent)
window.addEventListener("resize", increaseNotLimitedCounter)
