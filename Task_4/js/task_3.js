class Date{
    constructor(year, month, day, hour, minutes, sec){
        this.year = year
        this.month = month
        this.day = day
        this.hour = hour
        this.minutes = minutes
        this.sec = sec
    }

    ToString(str){

        let mounthMap = new Map([
            [1, "January"],
            [2, "February"],
            [3, "March"],
            [4, "April"],
            [5, "May"],
            [6, "June"],
            [7, "Jule"],
            [8, "August"],
            [9, "September"],
            [10, "October"],
            [11, "November"],
            [12, "December"]
          ]);

          let mounthMapShort = new Map([
            [1, "Jan"],
            [2, "Feb"],
            [3, "Mar"],
            [4, "Apr"],
            [5, "May"],
            [6, "Jun"],
            [7, "Jul"],
            [8, "Aug"],
            [9, "Sep"],
            [10, "Oct"],
            [11, "Nov"],
            [12, "Dec"]
          ]);

        //year
        str = str.replaceAll("yyyy", this.year).replaceAll("yy", String(this.year).slice(2,4))
        //month
        str = str.replaceAll("MMM", mounthMapShort.get(this.month))
        str = str.replaceAll("MMMM", mounthMap.get(this.month))
        if(this.month >= 10){
            str = str.replaceAll("MM", this.month)
        }
        else{
            str = str.replaceAll("MM", "0" + this.month)
        }
        str = str.replaceAll("M", this.month)
        //day
        if(this.day >= 10){
            str = str.replaceAll("dd", this.day)
        }
        else{
            str = str.replaceAll("dd", "0" + this.day)
        }
        str = str.replaceAll("d", this.day)
        //hour H (24)
        if(this.hour >= 10){
            str = str.replaceAll("HH", this.hour)
        }
        else{
            str = str.replaceAll("HH", "0" + this.hour)
        }
        str = str.replaceAll("H", this.hour)
        //hour h (12)
        var h = this.hour % 12
        if(h == 0){
            h = 12
        }
        if(this.hour >= 10){
            str = str.replaceAll("hh", h)
        }
        else{
            str = str.replaceAll("hh", "0" + h)
        }
        str = str.replaceAll("h", h)
        //minute
        if(this.minutes >= 10){
            str = str.replaceAll("mm", this.minutes)
        }
        else{
            str = str.replaceAll("mm", "0" + this.minutes)
        }
        str = str.replaceAll("m", this.minutes)
        //sec
        if(this.sec >= 10){
            str = str.replaceAll("ss", this.sec)
        }
        else{
            str = str.replaceAll("ss", "0" + this.sec)
        }
        str = str.replaceAll("s", this.sec)
        
        return str
    }
}

function  calc(){
    date = new Date(2015, 2, 4, 5, 7, 8)
    str = date.ToString("d-MMM-yy")
    let div = document.createElement('div');
    div.className = "alert";
    div.innerHTML = "<strong>Ответ: </strong>" + str;
    document.body.append(div);
}