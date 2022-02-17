function p_fact(num){
    var quotient = num;
    var factors = new Array();
    while (quotient > 0) {
        var divider = 2n;
        while (divider*divider <= quotient){
            if (quotient % divider == 0 ){
                factors.push(divider);
                quotient = quotient/divider;
                break;
            }else{
                divider+=1n;
            }
        }
        if (divider*divider > quotient){
            factors.push(quotient);
            break;
        }
    }
    return factors;
    // return factors.map((value) => String(value)).join("×");
}

export function greet(text) {
	console.log(text);
}
export function p_fact_js(num) {
	return p_fact(num);
}