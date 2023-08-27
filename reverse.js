let reversed = ' ';
function reverseString(text)
{
    // for (let i = 0; i < text.length; i++)
    // {
    //     const element = text[i];
    //     console.log(element);
    // }

    // let reversed = ' ';

    for (let i = text.length - 1; i >= 0; i--)
    {
        const element = text[i];
        reversed = reversed + element;
        console.log(element, reversed);
    }
    return reversed;
}

const myString = 'i am a good guy.';
const reversedString = reverseString(myString);
console.log('reversed output:',reversed);
