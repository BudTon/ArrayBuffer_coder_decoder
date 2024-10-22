export class ArrayBufferConverter {
    constructor(name, buffer, text, data) {
        this.name = name;
        this.buffer = buffer;
        this.text = text;
        this.data = data;
    }
    
    load() {
        const data = this.data;
        const buffer = new ArrayBuffer(data.length * 2);
        const bufferView = new Uint16Array(buffer);
        for (let i = 0; i < data.length; i++) {
            bufferView[i] = data.charCodeAt(i);
        }
        this.text = '';
        this.buffer = buffer;
    }
    // Вариант 2
    // const data = this.data;
    // return (input => {
    //     const buffer = new ArrayBuffer(data.length * 2);
    //     const bufferView = new Uint16Array(buffer);
    //     for (let i = 0; i < input.length; i++) {
    //         bufferView[i] = input.charCodeAt(i);
    //     }
    //     return this.buffer = buffer;
    // })(data);

    toString() {
        const bufferToString = this.buffer
        const bufferView = new Uint16Array(bufferToString);
        const textList = [];
        for (let i = 0; i < bufferView.length; i++) {
            textList.push(String.fromCharCode(bufferView[i]))
        }
        this.buffer = [];
        this.text = textList.join('')
    }
    // Вариант 2
    // toString() {
    //     const decoder = new TextDecoder();
    //     return this.text = decoder.decode(this.buffer);
    // }    
}


