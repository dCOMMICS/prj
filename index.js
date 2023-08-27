const form = document.getElementById("form");
const result = document.getElementById("result");



    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const a = Number(formData.get("a"));
        const b = Number(formData.get("b"));

        result.textContent = (()=>{
            switch (e.submitter.value){
                case "summ":
                    return `summ result: ${a + b}`;
                    case "subtract":
                        return `subtract result: ${a - b}`;
                        case "Multiply":
                            return `multiply result: ${a * b}`;
                            case "divide":
                                return `divide result: ${a  / b}`;
            }
        })()
    }); //  end submit  submit  button  on  submit  button  submit