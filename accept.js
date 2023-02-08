#LinkedIn Auto accept all connection requests

const iter = async () => {
    const waitFor = (duration) =>  new Promise(resolve => setTimeout(resolve, duration));
    const arr = Array.from(document.querySelectorAll("button.artdeco-button--secondary.invitation-card__action-btn"))

    if (arr.length === 0) return

    for await (const button of arr) {
        button.click();
        await waitFor(Math.floor(Math.random()*2000));
    }

    document.querySelector('footer button.artdeco-button--3')?.click()

    iter()
}

iter();
