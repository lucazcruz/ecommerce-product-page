export default function amountInit() {
  const amountButton = document.querySelector(".amount-btn")
  const minus = amountButton.querySelector(".minus")
  const plus = amountButton.querySelector(".plus")
  const amount = amountButton.querySelector(".amount")

  function account({ target }) {
    let i = +amount.textContent;
    i = target === minus ? i -1 : i
    i = target === plus ? i +1 : i

    amount.textContent = i > 0 ? i : 0
  }

  amountButton.addEventListener("click", account)
}