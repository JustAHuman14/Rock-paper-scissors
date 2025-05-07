function random() {
    return Math.random()
}

document.querySelector('#btn1').addEventListener('click',()=>{
    document.head.innerHTML = `<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rock Paper Scissors</title>
    <link rel="icon" href="fotor-20250506135857.png" type="image/x-icon">
    <style>
        body{
        display: flex;
        justify-content: center;
        }
        button {
            background-color: aqua;
            border: 2px solid;
            font-size: 50px;
            border-radius: 50%;
            width: 80px;
            height: 80px;

            &:hover {
                cursor: pointer;
            }
        }
    </style>`
    document.body.innerHTML = `<div>
        <h1>Rock Paper Scissors</h1>
        <button onclick="
       document.querySelector('.select').innerHTML = 'You chose &#9994; ||'
        if (random() >= 0 && random() < 1/3) {
                    document.querySelector('.result').innerHTML = 'Tie!'
                    document.querySelector('.selects').innerHTML = '&#9994; Computer chose'
        } else if (random() >= 1/3 && random() < 2/3) {
                    document.querySelector('.result').innerHTML = 'You lost!'
                    document.querySelector('.selects').innerHTML = '&#9995; Computer chose'
        } else {
                    document.querySelector('.result').innerHTML = 'You won!'
                    document.querySelector('.selects').innerHTML = '✌️ Computer chose'
        }
        ">&#9994;</button>

        <button onclick="
        document.querySelector('.select').innerHTML = 'You chose &#9995; ||'
        if (random() >= 0 && random() < 1/3) {
            document.querySelector('.result').innerHTML = 'You won!'
            document.querySelector('.selects').innerHTML = '&#9994; Computer chose'
        } else if (random() >= 1/3 && random() < 2/3) {
            document.querySelector('.result').innerHTML = 'Tie!'
            document.querySelector('.selects').innerHTML = '&#9995; Computer chose'
        } else {
            document.querySelector('.result').innerHTML = 'You lost!'
            document.querySelector('.selects').innerHTML = '✌️ Computer chose'
        }
        ">&#9995;</button>
        <button onclick="
        document.querySelector('.select').innerHTML = 'You chose ✌️ ||'
        if (random() >= 0 && random() < 1/3) {
            document.querySelector('.result').innerHTML = 'You lost!'
            document.querySelector('.selects').innerHTML = '&#9994; Computer chose'
        } else if (random() >= 1/3 && random() < 2/3) {
            document.querySelector('.result').innerHTML = 'You won!'
            document.querySelector('.selects').innerHTML = '&#9995; Computer chose'
        } else {
            document.querySelector('.result').innerHTML = 'Tie!'
            document.querySelector('.selects').innerHTML = '✌️ Computer chose'
        }
        ">✌️</button>
        <p style="font-size: 25px;" class="result"></p>
        <span style="font-size: 25px;" class="select"></span><span style="font-size: 25px;" class="selects"></span>
    </div>`
})