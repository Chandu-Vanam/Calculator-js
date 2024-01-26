let takeInput = document.getElementById("get-input");
const getNumber = (val) => {
    takeInput.value += val;
}

const getOperation = (operator) => {
    takeInput.value += operator;
} 

const clearInput = () =>{
    takeInput.value='';
}

const deleteField = () => {
    let takeInput = document.getElementById("get-input");
    takeInput.value = takeInput.value.slice(0,-1);
}

const giveResult = () =>  {
    let exp = takeInput.value;

    let num = [];
    let op = '';
    let i=0;

    for(let j=0;j<exp.length;)
    {
        if(exp[j]>='0' && exp[j]<='9')
        {
            while(j<exp.length && exp[j]>='0' && exp[j]<='9')
            {
                num[i] = num[i] || '';
                num[i]+=exp[j];
                j++;
            }

            i++;
        }
        else{
            op = exp[j];
            j++;
        }
    }
    let ans;
    let a = parseInt(num[0]);
    let b = parseInt(num[1]);

    switch(op)
    {
        case '+': ans = a+b; break;
        case '-': ans = a-b; break;
        case '*': ans = a*b; break;
        case '/': ans = a/b; break;
        default: ans = a%b;
    }
 
    takeInput.value = ans;
}