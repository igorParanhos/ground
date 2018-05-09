class Degree{
    constructor(value){

        this.deg;
        this.min;
        this.sec;

        this.decimal;

        this.setValue(value);
    }       

    setValue(value){
        if(this.getValueType(value) === 'degree'){
            let v = this.parseDegree(value);
            this.deg = v.deg;
            this.min = v.min;
            this.sec = v.sec;
            this.decimal = this.convertDegreeToDecimal(v);
        }else if(this.getValueType(value) === 'decimal'){
            this.decimal = value
            let d = this.convertDecimalToDegree(value)
            this.deg = d.deg;
            this.min = d.min;
            this.sec = d.sec;
        }
    }

    getValueType(value){
        let val = value.toString();
        if(val.match(/^\d{3}\W{1}\s?\d{1,2}\W\s?\d{1,2}/))
            return 'degree';
        else
            return 'decimal'
    }

    parseDegree(value){
        let parsed_value = value.match(/^(\d{3})\W{1}\s?(\d{1,2})\W\s?(\d{1,2})/)
        return {
            deg: parsed_value[1],
            min: parsed_value[2],
            sec: parsed_value[3],
        }
    }

    convertDecimalToDegree(D, is_round, lng){
        return {
            dir : D<0?lng?'W':'S':lng?'E':'N',
            deg : 0|(D<0?D=-D:D),
            min : 0|D%1*60,
            sec : is_round != null && is_round == true ? Math.round((0|D*60%1*6000)/100) : ((0|D*60%1*6000)/100 ).toFixed(1)
        };
    }
    
    convertDegreeToDecimal(degree){
        let int = parseFloat(degree.deg);
        let decimal = parseFloat(degree.min/60 + degree.sec/3600);
        return int + decimal;
    }

    degreesToRadians(degrees){
        var pi = Math.PI;
        return degrees * (pi/180);
    }
    
}

let d = new Degree('123.16111111');



console.log(d)