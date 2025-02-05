const history = [];

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

document.getElementById('equals').addEventListener('click', () => {
    const display = document.getElementById('display');
    try {
        const result = math.evaluate(display.value);
        history.push(`${display.value} = ${result}`);
        display.value = result;
        updateHistory();
    } catch (error) {
        display.value = 'Ошибка';
    }
});

document.getElementById('clear').addEventListener('click', () => {
    document.getElementById('display').value = '';
});

function updateHistory() {
    const historyDiv = document.getElementById('history');
    historyDiv.innerHTML = history.map(entry => `<div>${entry}</div>`).join('');
}
