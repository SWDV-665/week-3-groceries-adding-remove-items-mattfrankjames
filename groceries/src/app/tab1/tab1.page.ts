import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  title = "Grocery";
  // TODO: hardcoded data, will be dynamic
  items = [{
    name: "Milk",
    quantity: 2
  },
  {
    name: "Bread",
    quantity: 4
    },
  {
    name: "Banana",
    quantity: 3
    },
  {
    name: "Sugar",
    quantity: 1
  }]
  constructor(public toastController: ToastController, public alertController: AlertController) {}
  async removeItem(item, index) {
    console.log(item);
    const toast = await this.toastController.create({
      message: 'Removing Item - ' + index + " ...",
      duration: 2000
    });
    toast.present();
    this.items.splice(index, 1)
  }
  // waiting to see if we can lose this method and just use the showAddItemPropmt()
  addItem() {
    console.log('adding item');
    this.showAddItemPrompt();
  }
  // set up alert / prompt for adding to list
  async showAddItemPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Add Item',
      message: "Please enter an item...",
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'name'
        },
        {
          name: 'quantity',
          type: 'text',
          id: 'quantity-id',
          placeholder: 'quantity',
          attributes: {

            inputmode: 'tel',
          }
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Add to List',
          handler: item=> {
            console.log('Confirm Ok', item);

            this.items.push(item)
          }
        }
      ]
    });

    await alert.present();
  }
}
