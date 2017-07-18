import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  buttoncolor1 = "white"
  buttoncolor2 = "white"
  buttoncolor3 = "white"
  buttoncolor4 = "white"
  zone = ""
  date = new Date()
  datenow() {
    return new Date();

  };
  
  calcTime(offset) {
    var d = new Date();
      
      // convert to msec
      // add local time zone offset 
      // get UTC time in msec
      var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
      
      // create new Date object for different city
      // using supplied offset
      var nd = new Date(utc + (3600000*offset));
      
      // return time as a string
      return nd;
  }


  pst(){
    this.buttoncolor1 = "yellow"
    this.buttoncolor2 = "white"
    this.buttoncolor3 = "white"
    this.buttoncolor4 = "white"
    this.date = this.datenow()
  }
  
  mst(){
    this.buttoncolor1 = "white"
    this.buttoncolor2 = "yellow"
    this.buttoncolor3 = "white"
    this.buttoncolor4 = "white"
    this.date = this.calcTime(+6)
  }
  cst(){
    this.buttoncolor1 = "white"
    this.buttoncolor2 = "white"
    this.buttoncolor3 = "yellow"
    this.buttoncolor4 = "white"
    this.date = this.calcTime(+7)
  }
  est(){
    this.buttoncolor1 = "white"
    this.buttoncolor2 = "white"
    this.buttoncolor3 = "white"
    this.buttoncolor4 = "yellow"
    this.date = this.calcTime(+8)
  }
  clear(){
    this.buttoncolor1 = "white"
    this.buttoncolor2 = "white"
    this.buttoncolor3 = "white"
    this.buttoncolor4 = "white"
    this.date = this.datenow()
  }
 

  
  
  button = [
    { color: "red",
      word: "off"
    },
    { color: "red",
      word: "off"
    },
    { color: "red",
      word: "off"
    },
    { color: "red",
      word: "off"
    },
    { color: "red",
      word: "off"
    },
    { color: "red",
      word: "off"
    },
    { color: "red",
      word: "off"
    },
    { color: "red",
      word: "off"
    },
    { color: "red",
      word: "off"
    },
    { color: "red",
      word: "off"
    },
    { color: "red",
      word: "off"
    }]
    
    switch(num){
      if(this.button[num].color == "red" && this.button[num].word == "off"){
        this.button[num].color = "green"
        this.button[num].word = "on"
      }else{
        this.button[num].color = "red"
        this.button[num].word = "off"
      }

    }

}
