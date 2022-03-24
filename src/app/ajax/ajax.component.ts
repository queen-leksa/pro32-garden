import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})
export class AjaxComponent {
  data: {
    type:string,
    number:string[],
    expiration:string,
    owner:string
  }[] = [];
  types: {
    [k:string]:string,
  } = {
    "MasterCard": "fa-brands fa-cc-mastercard",
    "Visa": "fa-brands fa-cc-visa",
    "American Express": "fa-brands fa-cc-amex",
    "Discover Card": "fa-brands fa-cc-discover",
    "Visa Retired": "fa-brands fa-cc-visa",
    "default": "fa-solid fa-credit-card"
  }

  loadData(self = this) {
    const path:string = "https://fakerapi.it/api/v1/credit_cards?_quantity=6";
    fetch(path)
      .then(function(res):any {
        return res.json();
      })
      .then(function(d):any {
        console.log(d);
        console.log(self.data)
        self.data = [];
        d.data.forEach(function(el:{
          type:string,
          number:string,
          expiration:string,
          owner:string
        }):void {
          let n:string[] = [];
          let st:string = "";
          for (let i:number =0; i < el.number.length; i++) {
            if (i !== 0 && i % 4 === 0) {
              n.push(st);
              st = "";
            }
            st += el.number[i];
          }
          n.push(st);
          let obj = {
            owner: el.owner,
            expiration: el.expiration,
            type: el.type,
            number: n
          }
          self.data.push(obj);
        });
      })
  }
}
